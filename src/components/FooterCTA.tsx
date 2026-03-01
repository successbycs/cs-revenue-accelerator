const FooterCTA = () => {
  return (
    <section id="contact" className="bg-dark-builder py-16 lg:py-20">
      <div className="section-container text-center">
        <h2 className="font-heading text-3xl font-bold text-on-dark sm:text-4xl">
          Ready to Fix the Stage That's Costing You?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-on-dark/70">
          Book a 30-minute lifecycle audit call or download the free checklist to get started.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://meetings-ap1.hubspot.com/christopher-sparshott"
            className="rounded-md bg-on-dark px-6 py-3 text-sm font-semibold text-dark-builder transition-opacity hover:opacity-90"
          >
            Book a CS Lifecycle Audit
          </a>
          <a
            href="#contact"
            className="rounded-md border border-on-dark/40 px-6 py-3 text-sm font-semibold text-on-dark transition-colors hover:bg-on-dark/10"
          >
            Get the Audit Checklist
          </a>
        </div>
        {/* HubSpot embed placeholder */}
        <div className="mx-auto mt-10 max-w-md rounded-lg border border-on-dark/15 bg-on-dark/5 p-8">
          <p className="text-sm text-on-dark/50 italic">
            HubSpot meeting embed will be placed here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
