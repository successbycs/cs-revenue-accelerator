import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Strong new sales. Weak activation.",
  "Expansion happens by accident, not design.",
  "Renewals defended late instead of engineered early.",
  "No clear owner for lifecycle accountability.",
  "NRR flat despite logo growth.",
  "CS feels busy but not commercially decisive.",
];

const BuilderRoutingCard = () => {
  return (
    <section id="how-i-help" className="border-t border-border py-16 lg:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-8 shadow-sm sm:p-12">
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            You're Growing. But Revenue Isn't Compounding.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Sales are working. Customer Success isn't structured enough to protect and expand what you're winning.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-builder" />
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href="#build-path"
              className="inline-block rounded-md bg-accent-builder px-6 py-3 text-sm font-semibold text-on-dark transition-opacity hover:opacity-90"
            >
              Fix My Lifecycle →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuilderRoutingCard;
