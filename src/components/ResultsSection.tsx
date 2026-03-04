const metrics = [
  { label: "On-time Renewal rate", value: "+15–20%", note: "For mature organisations" },
  { label: "Activation Rate", value: "+5-10%", note: "Especially for scaling fast paced businesses" },
  { label: "Time to Impact", value: "< 30 days", note: "Quick wins in 30 days, systemic fixes up to 90 days" },
];

const testimonials = [
  {
    quote: "These are the best Activation results we have had for 2 years, thank you",
    name: "New Zealand SaaS",
    role: "Chief Customer Officer",
  },
  {
    quote: "I have managed to turn around under performing employees and added repeatable processes and structures",
    name: "Global SEO Company",
    role: "New Head of Customer Success",
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
