import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="section-container pt-28 pb-20 lg:pt-36 lg:pb-28">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Statement
        </h1>

        <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Effective date:</strong>{" "}
            {new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              We may collect personal information you voluntarily provide when you book a meeting, fill out a form, or contact us — including your name, email address, company name, and phone number.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>
              Your information is used to respond to enquiries, schedule meetings, deliver our services, and send occasional updates relevant to Customer Success leadership. We will never sell your data to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">3. Third-Party Services</h2>
            <p>
              We use third-party tools such as HubSpot for scheduling and communication. These services have their own privacy policies and handle data in accordance with their terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">4. Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to improve your browsing experience and analyse site traffic. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">5. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any time by contacting us directly.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-foreground">7. Contact</h2>
            <p>
              For any privacy-related questions, please reach out via the contact form on our website or email us directly.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
