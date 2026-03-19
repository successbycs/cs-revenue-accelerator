import { CheckCircle2 } from "lucide-react";

const auditItems = [
"Lifecycle stage health mapping",
"Activation → NRR risk analysis",
"Ownership and accountability gaps",
"Immediate revenue recovery actions",
"90-day execution roadmap"];


const tiers = [
{
  name: "Activate & Adopt",
  desc: "Turn new revenue into measurable usage.",
  includes: [
  "Time to value and adoption benchmarks",
  "Clarify onboarding ownership and accountability",
  "Align CS, Sales, and Product around usage metrics",
  "Establish stage-level KPIs tied to expansion"],

  outcome: "Faster activation, higher product adoption, stronger expansion signals."
},
{
  name: "Retain & Renew",
  desc: "Protect ARR before it's at risk.",
  includes: [
  "Surface renewal risk early through health scoring",
  "Install structured renewal forecasting",
  "Implement proactive value review cadence",
  "Close ownership gaps across the lifecycle"],

  outcome: "Predictable renewals, lower gross churn, stronger NRR."
},
{
  name: "Full Lifecycle",
  desc: "Build the compounding revenue engine.",
  includes: [
  "Align KPIs from acquisition to renewal",
  "Team accountability structure",
  "Install cross-functional revenue rituals",
  "Create a 90-day execution roadmap"],

  outcome: "A Customer Success function that compounds revenue instead of firefighting."
}];


const BuilderSection = () => {
  return (
    <section id="build-path" className="bg-dark-builder py-20 lg:py-28">
      <div className="section-container">
        {/* Audit */}
        <div className="mx-auto max-w-3xl">
          <p className="stage-label mb-3 text-accent-builder/70">Builder Path</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-on-dark sm:text-4xl">
            Identify the Stage That's Costing You the Most.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-dark/70">A focused lifecycle diagnosis that pinpoints where revenue is leaking and gives you a 90-day action plan to fix it.


          </p>

          <div className="mt-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-on-dark/50">Audit Includes</p>
            <ul className="space-y-3">
              {auditItems.map((item) =>
              <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-builder" />
                  <span className="text-sm text-on-dark/90">{item}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://meetings-ap1.hubspot.com/christopher-sparshott"
              className="rounded-md bg-accent-builder px-6 py-3 text-sm font-semibold text-on-dark transition-opacity hover:opacity-90">
              
              Book a CS Lifecycle Audit
            </a>
          </div>
        </div>

        {/* Retainer */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h3 className="font-heading text-2xl font-bold text-on-dark sm:text-3xl">
            Execution at the Stage That Matters Most.
          </h3>
          <p className="mt-3 text-base text-on-dark/70">
            Ongoing fractional leadership focused on the lifecycle stage driving your next revenue move.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {tiers.map((tier) =>
            <div
              key={tier.name}
              className="rounded-xl border border-on-dark/15 bg-on-dark/5 p-6 transition-colors hover:bg-on-dark/10">
              
                <h4 className="font-heading text-lg font-bold text-on-dark">{tier.name}</h4>
                <p className="mt-2 text-sm text-on-dark/60">{tier.desc}</p>

                <ul className="mt-5 space-y-2">
                  {tier.includes.map((inc) =>
                <li key={inc} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-builder/70" />
                      <span className="text-xs text-on-dark/70">{inc}</span>
                    </li>
                )}
                </ul>
                <p className="mt-4 text-xs italic text-on-dark/50">Outcome: {tier.outcome}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default BuilderSection;