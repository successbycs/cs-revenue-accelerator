import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="section-container pt-28 pb-20 lg:pt-36 lg:pb-28">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>

        <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Effective date:</strong>{" "}
            {new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website and engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">2. Services</h2>
            <p>
              SuccessByCS provides fractional Customer Success leadership, consulting, and mentoring services. The specific scope, deliverables, and terms of any engagement will be agreed upon separately in writing between SuccessByCS and the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, frameworks, and methodologies — is the property of SuccessByCS and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">4. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary or sensitive information disclosed during an engagement. This obligation survives the termination of any agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, SuccessByCS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our website or services, regardless of the cause of action.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">6. No Guarantee of Results</h2>
            <p>
              While we apply proven frameworks and best practices, results may vary depending on your organisation's circumstances. SuccessByCS does not guarantee specific business outcomes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws applicable in the jurisdiction where the client is based, unless otherwise agreed in writing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">8. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the website constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">9. Contact</h2>
            <p>
              For questions about these terms, please reach out via the contact form on our website or email us directly.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
