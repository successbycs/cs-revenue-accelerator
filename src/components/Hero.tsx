import heroPhoto from "@/assets/hero-photo-placeholder.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Fix the Lifecycle Stage That's Leaking Your SaaS Revenue
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Fractional Customer Success leadership for ANZ SaaS companies that need results without hiring full-time.
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
              Audit · Retainer · Executive Cover · Built around the 7-stage CS Lifecycle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#build-path"
                className="rounded-md bg-accent-builder px-6 py-3 text-sm font-semibold text-on-dark transition-opacity hover:opacity-90"
              >
                I'm a Founder / CRO →
              </a>
              <a
                href="#cover-path"
                className="rounded-md border-2 border-accent-steward px-6 py-3 text-sm font-semibold text-accent-steward transition-colors hover:bg-accent-steward hover:text-on-dark"
              >
                I Need CS Leadership Cover →
              </a>
              <a
                href="#mentoring"
                className="rounded-md border-2 border-accent-steward/60 bg-accent-steward/10 px-6 py-3 text-sm font-semibold text-accent-steward transition-colors hover:bg-accent-steward hover:text-on-dark"
              >
                New Head of CS? Get Mentored →
              </a>
            </div>
          </div>

          {/* Right — photo + stats */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroPhoto}
                alt="CS Leadership professional"
                className="h-80 w-64 rounded-xl object-cover shadow-xl sm:h-96 sm:w-72"
              />
              {/* Floating stat 1 */}
              <div className="absolute -left-10 top-8 rounded-lg border border-border bg-background px-4 py-3 shadow-lg sm:-left-16">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">NRR Improvement</p>
                <p className="mt-1 font-heading text-2xl font-bold text-accent-builder">+18%</p>
              </div>
              {/* Floating stat 2 */}
              <div className="absolute -right-6 bottom-12 rounded-lg border border-border bg-background px-4 py-3 shadow-lg sm:-right-14">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Churn Reduced</p>
                <p className="mt-1 font-heading text-2xl font-bold text-accent-steward">–32%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
