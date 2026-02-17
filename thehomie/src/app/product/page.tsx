import type { Metadata } from "next";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Product — TheHomie",
  description: "How TheHomie works: modes, guardrails, weekly briefs, trust center, and integrations.",
};

const modes = [
  {
    name: "Friend",
    description: "Gentle check-ins and casual nudges. Low friction, high warmth. For everyday support.",
    level: "Low",
  },
  {
    name: "Coach",
    description: "Structured accountability with clear feedback. For active goal pursuit and habit building.",
    level: "Medium",
  },
  {
    name: "Executive",
    description: "Data-driven briefings and strategic recommendations. For high-stakes periods and complex decisions.",
    level: "High",
  },
  {
    name: "Strict",
    description: "Hard guardrails and zero tolerance for impulse. For recovery, crises, or when you need firm boundaries.",
    level: "Maximum",
  },
];

const integrations = [
  { name: "Calendar", description: "Google Calendar, Apple Calendar, Outlook. Schedule awareness and conflict detection." },
  { name: "Location", description: "GPS + contextual location intelligence. Know where you are and what that means." },
  { name: "Finance", description: "Bank feeds, spending categorization. Real-time budget awareness and impulse prevention." },
  { name: "Wearable", description: "Apple Watch, Fitbit, Oura. Sleep, HRV, activity, and energy tracking." },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-tight text-graphite md:text-5xl">
            How TheHomie Works
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate">
            A personal behavioral operating system built around your patterns, preferences,
            and goals. Contextual intelligence, not notification noise.
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            System Architecture
          </h2>
          <p className="mt-4 text-base text-slate">
            Data flows through five stages — each designed to be transparent and user-controlled.
          </p>
          <div className="mt-10">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            Modes
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            Choose how TheHomie interacts with you. Switch modes anytime based on what you need.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {modes.map((mode) => (
              <div key={mode.name} className="rounded-xl border border-graphite/5 bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-graphite">{mode.name}</h3>
                  <span className="rounded-full bg-offwhite px-3 py-1 text-xs font-medium text-slate">
                    Intensity: {mode.level}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guardrails */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            Decision Guardrails
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            Configurable boundaries that activate before impulsive actions. You set the rules.
            TheHomie enforces them.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-graphite/5 bg-offwhite p-6">
              <h3 className="text-sm font-semibold text-graphite">Spending Limits</h3>
              <p className="mt-2 text-sm text-slate">
                Daily, weekly, or per-transaction caps. Purchases above threshold trigger a cooling-off period.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-offwhite p-6">
              <h3 className="text-sm font-semibold text-graphite">Time Gates</h3>
              <p className="mt-2 text-sm text-slate">
                Block certain actions during vulnerable hours — late-night purchases, social media binges, emotional texts.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-offwhite p-6">
              <h3 className="text-sm font-semibold text-graphite">Behavioral Tripwires</h3>
              <p className="mt-2 text-sm text-slate">
                Custom alerts triggered by pattern breaks — skipped workouts, unusual spending, disrupted sleep cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Brief */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            Weekly Life Ops Brief
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            Every week, TheHomie delivers a concise operations brief covering your patterns,
            risks, and recommended adjustments.
          </p>
          <div className="mt-10 rounded-xl border border-graphite/5 bg-white p-6 md:p-8">
            <div className="space-y-4 text-sm text-slate">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-green" />
                <p><span className="font-medium text-graphite">Sleep:</span> Averaged 7.2 hours. Up from 6.5 last week. Consistency improving.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber" />
                <p><span className="font-medium text-graphite">Spending:</span> $127 over discretionary budget. 3 late-night purchases flagged.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-green" />
                <p><span className="font-medium text-graphite">Fitness:</span> 4 of 5 planned workouts completed. Streak maintained.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan" />
                <p><span className="font-medium text-graphite">Recommendation:</span> Tighten evening spending guardrail to $50. Shift workout to morning slot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Center */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            Trust Center
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            A transparent dashboard showing exactly what data TheHomie accesses,
            why it needs it, and how to control or revoke access at any time.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["View all accessed data", "Revoke specific permissions", "Pause all tracking", "Delete memory entirely"].map(
              (item) => (
                <div key={item} className="rounded-lg border border-graphite/5 bg-offwhite px-4 py-3 text-sm text-graphite">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            Integrations
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            TheHomie connects to the tools and data sources that matter — always with explicit permission.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {integrations.map((integration) => (
              <div key={integration.name} className="rounded-xl border border-graphite/5 bg-white p-6">
                <h3 className="text-base font-semibold text-graphite">{integration.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
