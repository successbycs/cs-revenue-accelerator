import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitLeadCapture } from "@/lib/leadCapture";

const ARCHITECTURE_DIAGRAM_URL = "/architecture-case-study.png";

const AutonomousAgents = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
              "radial-gradient(ellipse 70% 50% at 60% 0%, hsl(var(--accent-steward) / 0.09) 0%, transparent 70%)"
            }} />
          
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
                <span className="inline-block h-px w-6 bg-secondary" />
                Case Study
              </p>
              <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                ChatGPT AI  to Governed Autonomous Delivery System
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                This system was designed to make autonomy useful for project
                delivery, especially useful for developing tools to access business
                content and analyzing it, building knowledge bases and working on
                software development. Instead of relying on one generic agent, it
                separates orchestration, planning, implementation, review, QA, and
                audit into a controller-led operating model with explicit proof at
                each step. Its like magic but it isn't magic.
              </p>
              {/* Email Collection Widget */}
              <EarlyAccessForm />
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span className="rounded-full border border-border px-3 py-1">Controller-led orchestration</span>
                <span className="rounded-full border border-border px-3 py-1">Bounded role execution</span>
                <span className="rounded-full border border-border px-3 py-1">Verification before closure</span>
                <span className="rounded-full border border-border px-3 py-1">Persistent audit trail</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#architecture"
                  className="inline-flex items-center rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90">
                  See the system
                </a>
                <a
                  href="https://meetings-ap1.hubspot.com/christopher-sparshott"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
                  Talk to Chris
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="py-16 lg:py-24">
          <div className="section-container grid gap-8 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-card p-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">The problem</p>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Most autonomous builds are still black boxes
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A single agent can generate code, but that does not make the system
                governable. Teams still need bounded scope, tool controls, retries,
                blocker handling, review, QA, and evidence that the work actually
                passed through those gates.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">The approach</p>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                A controller-owned software delivery loop
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The solution was a milestone-driven control plane that selects work
                from local state, routes it through specialized roles, limits what
                each role can touch, and records structured proof instead of relying
                on chat history as the source of truth.
              </p>
            </article>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="py-16 lg:py-24" style={{ background: "hsl(var(--bg-dark-steward))" }}>
          <div className="section-container">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: "hsl(var(--accent-steward))" }}>
                High-level architecture
              </p>
              <h2 className="font-heading text-3xl font-bold" style={{ color: "hsl(var(--text-on-dark))" }}>
                The system is built as an operating model, not a single prompt
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "hsl(var(--text-on-dark) / 0.7)" }}>
                The controller sits at the centre of the loop. It reads project
                state, applies guardrails, emits bounded role packets, checks
                verification evidence, and decides whether work should retry, block,
                or close.
              </p>
              <DownloadDiagramButton />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white p-2 shadow-2xl">
              <img
                src={ARCHITECTURE_DIAGRAM_URL}
                alt="Governed Autonomous Delivery System architecture showing controller, role loop, guardrails, execution substrate, and persistent evidence"
                className="w-full rounded-lg" />
              
            </div>
          </div>
        </section>

        {/* What Was Built */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">What was built</p>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Seven working layers inside the control plane
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
              { title: "1. Milestone-aware controller", desc: "Selects the active unit of work, enforces dependencies, records run history, and decides next actions." },
              { title: "2. Specialized role loop", desc: "Prework, planner, builder, reviewer, and QA separate discovery, execution, and validation concerns." },
              { title: "3. Structured role packets", desc: "Roles receive bounded task context including scope, retry state, allowed tools, and write permissions." },
              { title: "4. Verification gate", desc: "Tests, artifact checks, and manual verification requirements prevent silent 'looks done' completion." },
              { title: "5. Tool governance", desc: "Tool access is declared centrally and filtered by milestone and role instead of being implicitly available." },
              { title: "6. Audit layer", desc: "Closeout and backfill auditors preserve residual risk and make historical proof easier to trust." },
              { title: "7. Persistent evidence", desc: "Run history, role outputs, audit logs, and milestone state give operators inspectable proof of execution." }].
              map((item) =>
              <article key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              )}
            </div>
          </div>
        </section>

        {/* Guardrails */}
        <section id="guardrails" className="py-16 lg:py-24 bg-muted/40">
          <div className="section-container">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Guardrails</p>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                The system is constrained by policy, not optimism
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
              { title: "Bounded write scope", desc: "Mutating roles can only change declared areas of the repo." },
              { title: "Declared tool access", desc: "Tools are exposed explicitly through the controller rather than left open-ended." },
              { title: "Retry discipline", desc: "Actionable failures can retry inside a budget, but external blockers stop the loop honestly." },
              { title: "Review and QA gates", desc: "Verification alone is not enough. Review and QA are required before closure." },
              { title: "Audit after completion", desc: "Residual risk and caveats are captured even after milestones are marked complete." }].
              map((item) =>
              <article key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              )}
            </div>
          </div>
        </section>

        {/* Why It Matters CTA */}
        <section className="py-16 lg:py-24" style={{ background: "hsl(var(--bg-dark-builder))" }}>
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: "hsl(var(--accent-builder))" }}>
                Where this fits
              </p>
              <h2 className="font-heading text-3xl font-bold" style={{ color: "hsl(var(--text-on-dark))" }}>
                Useful for teams that want autonomous execution without giving up operational control
              </h2>
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed" style={{ color: "hsl(var(--text-on-dark) / 0.7)" }}>
                This pattern works for internal engineering systems, implementation
                workflows, service delivery, and any environment where autonomy needs
                to be inspectable, bounded, and safe enough for serious use.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://meetings-ap1.hubspot.com/christopher-sparshott"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Talk to Chris


                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

const EarlyAccessForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;

    try {
      setSubmitting(true);
      setError("");
      await submitLeadCapture({
        email,
        name: firstName,
        type: "early-access",
      });
      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not submit your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 px-6 py-4">
        <p className="text-sm font-semibold text-foreground">
          Thanks. Your request has been sent and Chris can reply directly to your email.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          maxLength={100}
          className="h-11 rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary sm:w-44"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={255}
          className="h-11 rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary sm:w-52"
        />
        <button
          type="submit"
          disabled={submitting}
          className="h-11 whitespace-nowrap rounded-md bg-primary px-5 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Submitting..." : "Get Early Access to Autonomous Framework →"}
        </button>
      </form>
      {error ? (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

const DownloadDiagramButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    try {
      setSubmitting(true);
      setError("");
      await submitLeadCapture({
        email,
        name,
        type: "architecture-download",
      });
      setSubmitted(true);

      const link = document.createElement("a");
      link.href = ARCHITECTURE_DIAGRAM_URL;
      link.download = "governed-autonomous-delivery-system.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not submit your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-6 rounded-lg border border-white/20 bg-white/10 px-6 py-4">
        <p className="text-sm font-semibold" style={{ color: "hsl(var(--text-on-dark))" }}>
          Thanks. The download should start automatically.
        </p>
        <a
          href={ARCHITECTURE_DIAGRAM_URL}
          download="governed-autonomous-delivery-system.png"
          className="mt-3 inline-flex items-center text-sm font-semibold underline"
          style={{ color: "hsl(var(--text-on-dark))" }}
        >
          Download the diagram again
        </a>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
        >
          Download the Architecture Diagram
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            className="h-11 rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary sm:w-44"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={255}
            className="h-11 rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary sm:w-52"
          />
          <button
            type="submit"
            disabled={submitting}
            className="h-11 whitespace-nowrap rounded-md bg-primary px-5 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Send me the diagram →"}
          </button>
        </form>
      )}
      {error ? (
        <p className="mt-3 text-sm text-red-200" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default AutonomousAgents;
