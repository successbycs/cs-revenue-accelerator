import { ShieldCheck } from "lucide-react";

const RiskReversal = () => {
  return (
    <section className="border-t border-border py-16 lg:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <ShieldCheck className="mx-auto h-10 w-10 text-accent-builder" />
          <h2 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
            No Lock-in. No Long-term Contracts.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every engagement starts with a scoped audit or assessment. If the diagnosis doesn't surface clear revenue impact, you walk away with the insights — no obligation to continue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
