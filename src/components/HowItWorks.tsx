import { useState } from "react";

const builderSteps = [
  { step: "01", title: "CS Lifecycle Audit", desc: "We map your 7 lifecycle stages and identify the one costing you the most revenue." },
  { step: "02", title: "90-Day Action Plan", desc: "You get a prioritised roadmap with immediate wins and structural fixes." },
  { step: "03", title: "Fractional Retainer", desc: "Ongoing execution at the stage that matters — metrics, team accountability, revenue reviews." },
];

const coverSteps = [
  { step: "01", title: "Rapid Assessment", desc: "Within the first week we assess team health, pipeline risk, and immediate priorities." },
  { step: "02", title: "Stabilise Operations", desc: "Direct leadership of the CS team with clear cadence and accountability from day one." },
  { step: "03", title: "Transition Support", desc: "Handover plan for your permanent hire, with documentation and team readiness." },
];

const HowItWorks = () => {
  const [tab, setTab] = useState<"builder" | "cover">("builder");
  const steps = tab === "builder" ? builderSteps : coverSteps;

  return (
    <section className="border-t border-border py-16 lg:py-20">
      <div className="section-container">
        <p className="stage-label mb-3 text-center text-muted-foreground">How It Works</p>
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">
          From Diagnosis to Execution.
        </h2>

        {/* Tabs */}
        <div className="mx-auto mt-8 flex max-w-xs rounded-lg border border-border">
          {(["builder", "cover"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                tab === t
                  ? t === "builder"
                    ? "bg-accent-builder text-on-dark"
                    : "bg-accent-steward text-on-dark"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "builder" ? "Builder" : "Cover"}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 max-w-2xl space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5 rounded-xl border border-border p-6">
              <span className={`font-mono text-2xl font-bold ${tab === "builder" ? "text-accent-builder" : "text-accent-steward"}`}>
                {s.step}
              </span>
              <div>
                <h4 className="font-heading text-lg font-bold text-foreground">{s.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
