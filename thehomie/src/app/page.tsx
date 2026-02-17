import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import ScenarioCard from "@/components/ScenarioCard";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. The Problem */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
            Modern life has no operating system.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Too many apps",
              "Too many notifications",
              "Decisions under fatigue",
              "Fragmented data",
              "Impulse + burnout cycles",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-graphite/5 bg-offwhite px-4 py-3 text-sm text-slate"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Shift */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-2xl font-semibold leading-relaxed text-graphite md:text-3xl">
            Your devices have operating systems.
          </p>
          <p className="mt-2 text-2xl font-semibold leading-relaxed text-slate/50 md:text-3xl">
            Your life doesn&apos;t.
          </p>
          <p className="mt-4 text-lg font-medium text-cyan">Until now.</p>
        </div>
      </section>

      {/* 4. What TheHomie Does */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
            What TheHomie Does
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-graphite">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="#F8F8F6" strokeWidth="1.5" />
                  <path d="M12 7v5l3.5 2" stroke="#F8F8F6" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-graphite">Predict</h3>
              <p className="mt-2 text-sm text-slate">
                Model your patterns and anticipate risk before decisions are made under pressure.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-graphite">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" stroke="#F8F8F6" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-graphite">Protect</h3>
              <p className="mt-2 text-sm text-slate">
                Set guardrails that prevent impulse-driven decisions and protect what matters most.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-graphite">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#F8F8F6" strokeWidth="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#F8F8F6" strokeWidth="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#F8F8F6" strokeWidth="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#F8F8F6" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-graphite">Orchestrate</h3>
              <p className="mt-2 text-sm text-slate">
                Coordinate across your tools, data, and context to deliver timely, relevant guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-graphite text-xs font-semibold text-offwhite">
                1
              </span>
              <h3 className="mt-4 text-base font-semibold text-graphite">Personal Intelligence Graph</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                A living model of your preferences, patterns, triggers, and goals — built from the
                data you choose to share.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-graphite text-xs font-semibold text-offwhite">
                2
              </span>
              <h3 className="mt-4 text-base font-semibold text-graphite">Context Engine</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Real-time awareness of your location, energy, schedule, and environment to deliver
                relevant intelligence.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-graphite text-xs font-semibold text-offwhite">
                3
              </span>
              <h3 className="mt-4 text-base font-semibold text-graphite">Intervention Layer</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Contextual nudges, guardrails, and summaries that arrive at exactly the right moment
                — not as noise, but as signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Signature Features Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
            Signature Features
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 8h8M6 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              title="Preferences Vault"
              description="A secure, structured store for your personal preferences — from dietary needs to communication style. Always available, never shared."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 14v4M7 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              title="Geolocation Intelligence 2.0"
              description="Context-aware location intelligence that understands where you are, what that means, and what risks or opportunities exist nearby."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 3v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              }
              title="Decision Guardrails"
              description="Configurable boundaries that activate before impulsive actions — spending limits, time gates, and behavioral tripwires."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 7h14" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 7v10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              }
              title="Weekly Life Ops Brief"
              description="A concise, structured summary of your week: patterns observed, risks flagged, progress toward goals, and recommended adjustments."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="7" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="13" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              }
              title="Mode Switching"
              description="Switch between Friend, Coach, Executive, and Strict modes to match the level of guidance you need at any moment."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="3" y="9" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 9V6a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              title="Trust Center"
              description="A transparent dashboard showing exactly what data TheHomie accesses, why, and how to revoke permissions or delete memory."
            />
          </div>
        </div>
      </section>

      {/* 7. Real Scenario Cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
            Real Scenarios
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            How TheHomie shows up when it matters.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ScenarioCard
              category="Finance"
              categoryColor="#F5A623"
              title="Late-night impulse purchase"
              scenario="It's 1 AM. You're about to spend $340 on something you browsed earlier today."
              response="Spending pause activated. This exceeds your daily discretionary limit. Added to your 48-hour review queue."
            />
            <ScenarioCard
              category="Health"
              categoryColor="#2ECC71"
              title="Skipping workout pattern"
              scenario="Third consecutive missed workout. Energy levels have been declining this week."
              response="Pattern detected: 3 skipped sessions correlates with lower mood scores. Suggesting a 15-min walk — your minimum effective threshold."
            />
            <ScenarioCard
              category="Safety"
              categoryColor="#E74C3C"
              title="Unfamiliar late-night location"
              scenario="You're in an unfamiliar area at 2 AM, phone battery at 12%."
              response="Shared location with your trusted contact. Nearest safe transit options identified. Battery-saver mode recommended."
            />
          </div>
        </div>
      </section>

      {/* 8. Built on Trust */}
      <TrustSection />

      {/* 9. Final CTA */}
      <CTASection />
    </>
  );
}
