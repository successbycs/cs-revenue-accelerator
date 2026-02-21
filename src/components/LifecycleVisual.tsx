import { useState } from "react";

const stages = [
  { name: "Sign", tooltip: "Deals close but customers aren't set up for success from day one." },
  { name: "Onboard", tooltip: "Time-to-value is too long. Customers stall before seeing ROI." },
  { name: "Activate", tooltip: "Users aren't reaching the 'aha' moment. Adoption stays surface-level." },
  { name: "Adopt", tooltip: "Feature usage plateaus. Customers use 20% of what they bought." },
  { name: "Expand", tooltip: "Upsell happens by accident, not through a repeatable motion." },
  { name: "Renew", tooltip: "Renewals defended reactively 30 days out instead of engineered early." },
  { name: "Advocate", tooltip: "Happy customers exist but aren't systematically turned into references." },
];

const LifecycleVisual = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="border-t border-border py-16 lg:py-20">
      <div className="section-container">
        <p className="stage-label mb-3 text-center text-muted-foreground">The 7-Stage CS Lifecycle</p>
        <h2 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Where is your revenue leaking?
        </h2>

        {/* Desktop horizontal */}
        <div className="relative mt-12 hidden items-center justify-between md:flex">
          {/* Connecting line */}
          <div className="absolute left-[7%] right-[7%] top-1/2 h-px -translate-y-1/2 bg-border" />

          {stages.map((s, i) => (
            <div
              key={s.name}
              className="group relative z-10 flex flex-col items-center"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                  active === i
                    ? "border-accent-builder bg-accent-builder text-on-dark scale-110"
                    : "border-border bg-background text-foreground"
                }`}
              >
                <span className="font-mono text-xs font-medium">{i + 1}</span>
              </div>
              <span className="mt-2 font-mono text-xs font-medium uppercase tracking-wider text-foreground">
                {s.name}
              </span>

              {/* Tooltip */}
              {active === i && (
                <div className="absolute top-full mt-3 w-56 rounded-lg border border-border bg-background p-3 text-xs leading-relaxed text-muted-foreground shadow-lg animate-fade-up">
                  {s.tooltip}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="mt-8 space-y-4 md:hidden">
          {stages.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(active === i ? null : i)}
              className="flex w-full items-start gap-4 rounded-lg border border-border p-4 text-left transition-colors hover:bg-muted/50"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent-builder font-mono text-xs font-medium text-accent-builder">
                {i + 1}
              </div>
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground">{s.name}</p>
                {active === i && (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.tooltip}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleVisual;
