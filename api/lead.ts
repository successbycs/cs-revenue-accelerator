import nodemailer from "nodemailer";

type LeadCaptureBody = {
  email?: string;
  name?: string;
  type?: "early-access" | "architecture-download";
};

type RequestLike = {
  body?: LeadCaptureBody | string;
  headers?: Record<string, string | string[] | undefined>;
  method?: string;
};

type ResponseLike = {
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ResponseLike;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TRUE_VALUES = new Set(["1", "true", "yes", "on"]);

type MailError = Error & {
  code?: string;
  command?: string;
  response?: string;
  responseCode?: number;
};

function getEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getMissingEnvVars(names: string[]) {
  return names.filter((name) => !process.env[name]?.trim());
}

function parsePort(value: string) {
  const port = Number.parseInt(value, 10);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error("Invalid SMTP_PORT value.");
  }

  return port;
}

function parseSecure(value: string | undefined, port: number) {
  if (!value) {
    return port === 465;
  }

  return TRUE_VALUES.has(value.trim().toLowerCase());
}

function getHeader(req: RequestLike, name: string) {
  const headerValue = req.headers?.[name] ?? req.headers?.[name.toLowerCase()];

  return Array.isArray(headerValue) ? headerValue[0] : headerValue;
}

function parseBody(body: RequestLike["body"]): LeadCaptureBody {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body) as LeadCaptureBody;
    } catch {
      return {};
    }
  }

  return body;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function labelForType(type: NonNullable<LeadCaptureBody["type"]>) {
  return type === "architecture-download" ? "Architecture diagram request" : "Autonomous framework early access";
}

export default async function handler(req: RequestLike, res: ResponseLike) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = parseBody(req.body);
  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const type = body.type;

  if (!name || !email || !type) {
    return res.status(400).json({ error: "Name, email, and request type are required." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (type !== "early-access" && type !== "architecture-download") {
    return res.status(400).json({ error: "Unsupported request type." });
  }

  try {
    const missingEnvVars = getMissingEnvVars([
      "EARLY_ACCESS_TO_EMAIL",
      "SMTP_HOST",
      "SMTP_PASS",
      "SMTP_PORT",
      "SMTP_USER",
    ]);

    if (missingEnvVars.length > 0) {
      return res.status(500).json({
        error: `Server email configuration is incomplete: ${missingEnvVars.join(", ")}.`,
      });
    }

    const smtpHost = getEnv("SMTP_HOST");
    const smtpPort = parsePort(getEnv("SMTP_PORT"));
    const smtpUser = getEnv("SMTP_USER");
    const smtpPass = getEnv("SMTP_PASS");
    const smtpFromEmail = (process.env.SMTP_FROM_EMAIL?.trim() || smtpUser).trim();
    const notifyEmail = getEnv("EARLY_ACCESS_TO_EMAIL");
    const siteUrl = process.env.SITE_URL?.trim();
    const smtpSecure = parseSecure(process.env.SMTP_SECURE, smtpPort);

    const forwardedFor = getHeader(req, "x-forwarded-for") ?? "unknown";
    const userAgent = getHeader(req, "user-agent") ?? "unknown";
    const requestedFrom = siteUrl ? `${siteUrl}/case-study/autonomous-agents` : "/case-study/autonomous-agents";
    const diagramUrl =
      type === "architecture-download" && siteUrl ? `${siteUrl}/architecture-case-study.png` : undefined;
    const subject = `${labelForType(type)}: ${name}`;

    const transporter = nodemailer.createTransport({
      auth: {
        pass: smtpPass,
        user: smtpUser,
      },
      host: smtpHost,
      port: smtpPort,
      requireTLS: !smtpSecure,
      secure: smtpSecure,
    });

    await transporter.verify();

    const htmlLines = [
      `<p><strong>Request type:</strong> ${escapeHtml(labelForType(type))}</p>`,
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
      `<p><strong>Page:</strong> ${escapeHtml(requestedFrom)}</p>`,
      diagramUrl ? `<p><strong>Diagram URL:</strong> ${escapeHtml(diagramUrl)}</p>` : "",
      `<p><strong>Forwarded for:</strong> ${escapeHtml(forwardedFor)}</p>`,
      `<p><strong>User agent:</strong> ${escapeHtml(userAgent)}</p>`,
    ].filter(Boolean);

    await transporter.sendMail({
      from: `SuccessByCS <${smtpFromEmail}>`,
      html: htmlLines.join(""),
      replyTo: email,
      subject,
      text: [
        `Request type: ${labelForType(type)}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Page: ${requestedFrom}`,
        diagramUrl ? `Diagram URL: ${diagramUrl}` : "",
        `Forwarded for: ${forwardedFor}`,
        `User agent: ${userAgent}`,
      ]
        .filter(Boolean)
        .join("\n"),
      to: notifyEmail,
    });

    return res.status(200).json({
      message:
        type === "architecture-download"
          ? "Request received. The diagram download can start now."
          : "Request received. Chris can reply directly to your email.",
      ok: true,
    });
  } catch (error) {
    const mailError = error as MailError;

    console.error("Lead capture failed", {
      code: mailError.code,
      command: mailError.command,
      message: mailError.message,
      response: mailError.response,
      responseCode: mailError.responseCode,
    });

    if (mailError.message?.includes("Missing required environment variable")) {
      return res.status(500).json({ error: mailError.message });
    }

    if (mailError.message === "Invalid SMTP_PORT value.") {
      return res.status(500).json({ error: "SMTP port configuration is invalid." });
    }

    if (mailError.code === "EAUTH" || mailError.responseCode === 535) {
      return res.status(500).json({ error: "SMTP authentication failed. Check the Gmail username and app password." });
    }

    if (mailError.code === "ESOCKET" || mailError.code === "ETIMEDOUT") {
      return res.status(500).json({ error: "SMTP connection failed. Check host, port, and secure settings." });
    }

    return res.status(500).json({ error: "Lead capture email failed. Check the Vercel SMTP settings." });
  }
}
