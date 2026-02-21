const metrics = [
  { label: "Average NRR Lift", value: "+15–20%", note: "Placeholder — based on engagement outcomes" },
  { label: "Churn Reduction", value: "25–40%", note: "Placeholder — varies by lifecycle maturity" },
  { label: "Time to Impact", value: "< 30 days", note: "Placeholder — typical first audit cycle" },
];

const testimonials = [
  {
    quote: "Placeholder testimonial — real client quote to be added.",
    name: "Client Name",
    role: "CRO, SaaS Company",
  },
  {
    quote: "Placeholder testimonial — real client quote to be added.",
    name: "Client Name",
    role: "VP CS, Growth-Stage SaaS",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="border-t border-border py-16 lg:py-20">
      <div className="section-container">
        <p className="stage-label mb-3 text-center text-muted-foreground">Results</p>
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">
          Outcomes That Compound.
        </h2>

        {/* Metrics */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border p-6 text-center">
              <p className="font-heading text-3xl font-bold text-accent-builder">{m.value}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{m.label}</p>
              <p className="mt-1 text-xs text-muted-foreground italic">{m.note}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm italic leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
