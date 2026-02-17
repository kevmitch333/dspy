import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — TheHomie",
  description: "Simple, transparent pricing for TheHomie — your personal operating system.",
};

const tiers = [
  {
    name: "Core",
    price: "Free",
    period: "",
    description: "Essential personal operating system features for everyday life.",
    features: [
      "Personal Intelligence Graph (basic)",
      "2 active guardrails",
      "Weekly Life Ops Brief",
      "Friend mode",
      "Basic Preferences Vault",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "Full behavioral intelligence with advanced modes and integrations.",
    features: [
      "Everything in Core",
      "Unlimited guardrails",
      "All 4 modes (Friend, Coach, Executive, Strict)",
      "Geolocation Intelligence 2.0",
      "Full Preferences Vault",
      "Calendar, finance & wearable integrations",
      "Decision Guardrails with custom rules",
      "Priority support",
    ],
    cta: "Join Waitlist",
    highlighted: true,
  },
  {
    name: "Family",
    price: "$19",
    period: "/month",
    description: "Protect and support your household with shared safety features.",
    features: [
      "Everything in Pro",
      "Up to 5 family members",
      "Shared safety alerts",
      "Family Trust Center",
      "Parental guidance tools",
      "Shared location intelligence",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-graphite md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate">
            Start free. Upgrade when you need deeper intelligence.
            No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-xl border p-8 ${
                tier.highlighted
                  ? "border-graphite bg-white shadow-sm"
                  : "border-graphite/5 bg-white"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-block self-start rounded-full bg-graphite px-3 py-1 text-xs font-medium text-offwhite">
                  Most popular
                </span>
              )}
              <h2 className="text-xl font-semibold text-graphite">{tier.name}</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-graphite">{tier.price}</span>
                {tier.period && <span className="text-sm text-slate">{tier.period}</span>}
              </div>
              <p className="mt-4 text-sm text-slate">{tier.description}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-graphite">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="M4 8l3 3 5-5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/waitlist"
                className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-graphite text-offwhite hover:bg-slate"
                    : "border border-graphite/15 text-graphite hover:border-graphite/30"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-slate">
            All plans include end-to-end encryption, full data ownership, and the right to delete at any time.
          </p>
        </div>
      </section>
    </>
  );
}
