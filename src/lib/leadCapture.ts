export type LeadCaptureType = "early-access" | "architecture-download";

type LeadCaptureRequest = {
  email: string;
  name: string;
  type: LeadCaptureType;
};

type LeadCaptureResponse = {
  message?: string;
  ok: boolean;
};

export async function submitLeadCapture(payload: LeadCaptureRequest): Promise<LeadCaptureResponse> {
  const response = await fetch("/api/lead", {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const responseText = await response.text();
  let responseBody: LeadCaptureResponse | { error?: string } = { ok: response.ok };

  if (responseText) {
    try {
      responseBody = JSON.parse(responseText) as LeadCaptureResponse | { error?: string };
    } catch {
      responseBody = { error: responseText };
    }
  }

  if (!response.ok) {
    throw new Error(
      "error" in responseBody && responseBody.error
        ? responseBody.error
        : "We could not submit your request. Please try again.",
    );
  }

  return {
    message: "message" in responseBody ? responseBody.message : undefined,
    ok: true,
  };
}
