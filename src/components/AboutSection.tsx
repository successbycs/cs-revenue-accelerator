const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border py-16 lg:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <p className="stage-label mb-3 text-muted-foreground">About</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Built for SaaS. Based in ANZ.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            SuccessByCS is a fractional Customer Success practice designed for ANZ SaaS companies at the growth and scale stage. Every engagement is anchored to the 7-stage CS Lifecycle — because revenue compounds when every stage is accountable.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you're a Founder who needs CS commercially structured, or a CS Leader who needs interim executive cover, the engagement is scoped to solve one problem fast — then build from there.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
