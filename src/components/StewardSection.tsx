import { Shield, Users, FileText } from "lucide-react";

const StewardSection = () => {
  return (
    <section id="cover-path" className="bg-dark-steward py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <p className="stage-label mb-3 text-accent-steward/70">Steward Path</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-on-dark sm:text-4xl">
            Your CS Leader Left. Your Customers Can't Wait.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-dark/70">
            Interim fractional CS leadership that keeps your team performing, your customers retained, and your board confident — while you hire the right permanent leader.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Protect Revenue",
                desc: "Immediate ownership of renewals pipeline and at-risk accounts.",
              },
              {
                icon: Users,
                title: "Lead the Team",
                desc: "Direct management of CSMs with weekly cadence and clear accountability.",
              },
              {
                icon: FileText,
                title: "Board-Ready Reporting",
                desc: "NRR, GRR, health scores, and churn analysis your leadership team needs.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-on-dark/15 bg-on-dark/5 p-6">
                <item.icon className="h-6 w-6 text-accent-steward" />
                <h4 className="mt-4 font-heading text-base font-bold text-on-dark">{item.title}</h4>
                <p className="mt-2 text-sm text-on-dark/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block rounded-md bg-accent-steward px-6 py-3 text-sm font-semibold text-on-dark transition-opacity hover:opacity-90"
            >
              Discuss Interim Cover →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StewardSection;
