import { useEffect, useRef } from "react";

const FooterCTA = () => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HubSpot Meetings embed script should be loaded once on the page.
    const scriptId = "hubspot-meetings-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }

    // No cleanup: keeping the script avoids reload/flicker if this component remounts.
  }, []);

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
        </div>

        {/* HubSpot Meetings embed */}
        <div
          ref={embedRef}
          className="mx-auto mt-10 max-w-md rounded-lg border border-on-dark/15 bg-on-dark/5 p-8"
        >
          <div
            className="meetings-iframe-container"
            data-src="https://meetings-ap1.hubspot.com/christopher-sparshott?embed=true"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
