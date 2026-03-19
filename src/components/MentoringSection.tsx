import { GraduationCap, Target, TrendingUp, Users, MessageCircle, CalendarCheck } from "lucide-react";

const pillars = [
{
  icon: Target,
  title: "Strategic Positioning",
  desc: "Shift from reactive support to commercially accountable CS leadership your exec team respects."
},
{
  icon: TrendingUp,
  title: "Revenue Ownership",
  desc: "Own NRR, GRR, and expansion pipeline not just health scores and sentiment."
},
{
  icon: Users,
  title: "Team Leadership",
  desc: "Build and lead a CS team with clear accountability, cadence, and career paths."
},
{
  icon: MessageCircle,
  title: "Board & Exec Communication",
  desc: "Learn to present CS as a revenue engine not a cost centre in board and leadership forums."
},
{
  icon: CalendarCheck,
  title: "90-Day Acceleration Plan",
  desc: "A structured plan for your first 90 days that builds credibility and delivers early wins."
}];


const MentoringSection = () => {
  return (
    <section id="mentoring" className="border-t border-border bg-background py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted">
            <GraduationCap className="h-7 w-7 text-accent-steward" />
          </div>
          <p className="stage-label mb-3 text-accent-steward">Mentoring</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Promoted to Head of CS? Let's Make Sure You Succeed.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">You were a high-performing IC. Now you're leading a team, owning revenue metrics, and reporting to the board. The skills that got you promoted aren't the skills that will make you successful. This mentoring engagement bridges that gap fast.



          </p>
        </div>

        {/* Who it's for */}
        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-border bg-card p-8">
          <h3 className="font-heading text-xl font-bold text-foreground">Built for CS leaders who:</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
            "Were recently promoted from IC to Head of CS or CS Manager",
            "Feel the gap between doing CS and leading CS",
            "Need to build credibility with Sales, Product, and the exec team",
            "Want a structured approach to their first 90–180 days",
            "Don't have an internal mentor who's done the role before"].
            map((item) =>
            <li key={item} className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-steward" />
                <span>{item}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Pillars */}
        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl">
            What We Work On Together
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) =>
            <div
              key={pillar.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              
                <pillar.icon className="h-6 w-6 text-accent-steward" />
                <h4 className="mt-4 font-heading text-base font-bold text-foreground">{pillar.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            )}
          </div>
        </div>

        {/* How it works */}
        <div className="mx-auto mt-14 max-w-2xl">
          <h3 className="text-center font-heading text-2xl font-bold text-foreground">How the Engagement Works</h3>
          <div className="mt-8 space-y-5">
            {[
            {
              step: "01",
              title: "Discovery Call",
              desc: "We assess where you are, what's expected of you, and where the gaps are."
            },
            {
              step: "02",
              title: "Structured Mentoring",
              desc: "Fortnightly 1:1 sessions focused on real challenges not theory. Typically 3–6 months."
            },
            {
              step: "03",
              title: "Async Support",
              desc: "Between sessions, you get direct access for board prep, team issues, and strategic decisions."
            }].
            map((s) =>
            <div key={s.step} className="flex gap-5 rounded-xl border border-border p-6">
                <span className="font-mono text-2xl font-bold text-accent-steward">{s.step}</span>
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground">{s.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://meetings-ap1.hubspot.com/christopher-sparshott"
            className="inline-block rounded-md bg-accent-steward px-6 py-3 text-sm font-semibold text-on-dark transition-opacity hover:opacity-90">
            
            Book a Mentoring Discovery Call →
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            No commitment. 30-minute call to see if it's the right fit.
          </p>
        </div>
      </div>
    </section>);

};

export default MentoringSection;