import { useEffect, useRef } from "react";
import heroPhoto from "@/assets/hero-photo-placeholder.jpg";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
          "radial-gradient(ellipse 70% 50% at 60% 0%, hsl(var(--accent-builder) / 0.07) 0%, transparent 70%)"
        }} />


      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left ── */}
          <div className="max-w-xl">

            {/* Eyebrow */}
            <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
              <span className="inline-block h-px w-6 bg-accent-builder" />
              Fractional CS Leadership · ANZ &amp; Global
            </p>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">

              Your CS team is{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-builder">losing revenue</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 -z-0 h-[6px] w-full rounded-sm opacity-20"
                  style={{ background: "hsl(var(--accent-builder))" }} />

              </span>{" "}
              it should be keeping.
            </h1>

            {/* Sub */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              You've got a CS problem — churn, stalled activation, a team without
              direction, or a leader going on leave. I step in, diagnose the broken
              stage, fix it, and leave you with a system that holds.
            </p>

            {/* Trust line */}
            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground/60">
              Built around the 7-stage CS Lifecycle · 15+ years experience · No full-time hire required
            </p>

            {/* CTA cluster */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#build-path"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent-builder px-6 py-3 text-sm font-semibold text-on-dark transition-all hover:opacity-90 hover:shadow-lg hover:shadow-accent-builder/20">

                I'm a Founder / CRO
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#cover-path"
                className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-accent-steward px-6 py-3 text-sm font-semibold text-accent-steward transition-all hover:bg-accent-steward hover:text-on-dark">

                I Need CS Leadership Cover
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#mentoring"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/60 px-6 py-3 text-sm font-semibold text-foreground/80 transition-all hover:border-accent-steward hover:text-accent-steward">

                New Head of CS? Get Mentored
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-8 flex items-center gap-4 border-t border-border/50 pt-6">
              <div className="text-center">
                <p className="font-heading text-xl font-bold text-foreground">15+</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Years in CS</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-xl font-bold text-accent-builder">+20%</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                </p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-xl font-bold text-accent-steward">+10%</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">ACTIVATION RATE</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-xl font-bold text-foreground">7</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Days to Start</p>
              </div>
            </div>
          </div>

          {/* ── Right — photo + floating cards ── */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">

              {/* Photo */}
              <img src={heroPhoto}
              alt="Christopher Sparshott — Fractional Head of Customer Success"
              className="h-80 w-64 rounded-xl object-cover shadow-xl sm:h-96 sm:w-72" />


              {/* Broken lifecycle badge — top left */}
              <div className="absolute -left-10 top-8 max-w-[160px] rounded-lg border border-border bg-background px-4 py-3 shadow-lg sm:-left-16">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Broken stage found
                </p>
                <p className="mt-1 font-heading text-sm font-bold text-foreground leading-tight">
                  Activation → Adoption gap
                </p>
                <div className="mt-2 flex gap-1">
                  {["Sign", "Onboard", "Activate", "Adopt", "Expand", "Renew", "Advocate"].map((stage, i) =>
                  <div
                    key={stage}
                    title={stage}
                    className={`h-1.5 flex-1 rounded-full ${
                    i === 2 ?
                    "bg-red-400" :
                    i < 2 ?
                    "bg-accent-builder" :
                    "bg-border"}`
                    } />

                  )}
                </div>
              </div>

              {/* Stat card — bottom right */}
              <div className="absolute -right-6 bottom-12 rounded-lg border border-border bg-background px-4 py-3 shadow-lg sm:-right-14">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Active in
                </p>
                <p className="mt-1 font-heading text-2xl font-bold text-accent-builder">
                  7 days
                </p>
                <p className="font-mono text-[10px] text-muted-foreground/70">
                  from first call
                </p>
              </div>

              {/* Availability pill — top right */}
              <div className="absolute -right-4 top-6 sm:-right-8">
                <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 shadow-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Taking clients
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>);

};

export default Hero;