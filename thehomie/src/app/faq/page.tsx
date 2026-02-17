import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ — TheHomie",
  description: "Frequently asked questions about TheHomie — your personal operating system.",
};

const faqs = [
  {
    question: "What exactly is TheHomie?",
    answer:
      "TheHomie is a personal behavioral operating system — an intelligence layer that sits across your existing apps and data to model your behavior, predict risks, and deliver contextual guidance. Think of it as an OS for your life, not another app.",
  },
  {
    question: "How is this different from a habit tracker or productivity app?",
    answer:
      "Habit trackers record what happened. TheHomie predicts what\u2019s about to happen and intervenes before poor decisions are made. It combines data from multiple sources — calendar, location, finance, health — into a unified intelligence graph that understands your patterns holistically.",
  },
  {
    question: "What data does TheHomie need?",
    answer:
      "Only the data you explicitly grant access to. This can include calendar events, location, spending transactions, and wearable health metrics. Every permission is granular and revocable at any time. See our Trust page for full details.",
  },
  {
    question: "Is my data sold or shared?",
    answer:
      "No. Your data is never sold, never shared with advertisers, and never used to train models for other users. TheHomie\u2019s business model is subscription-based, not data-based. Your information belongs to you.",
  },
  {
    question: "Can I delete my data?",
    answer:
      "Yes. You can delete specific data categories or all data at any time through the Trust Center. Deletion is permanent and completed within 24 hours.",
  },
  {
    question: "What are modes?",
    answer:
      "Modes control how TheHomie interacts with you. Friend mode offers gentle nudges. Coach mode provides structured accountability. Executive mode delivers data-driven briefings. Strict mode enforces hard boundaries. You can switch modes anytime.",
  },
  {
    question: "What are guardrails?",
    answer:
      "Guardrails are configurable boundaries you set for yourself. They can include spending limits, time-based restrictions, and behavioral triggers. When a guardrail is about to be crossed, TheHomie intervenes with a contextual alert before the action is completed.",
  },
  {
    question: "Does TheHomie make decisions for me?",
    answer:
      "No. TheHomie provides guidance and interventions, but you always have the final say. Every recommendation can be overridden. It\u2019s designed to inform your decisions, not replace them.",
  },
  {
    question: "Is TheHomie a medical or financial advisor?",
    answer:
      "No. TheHomie offers behavioral intelligence and pattern-based guidance. It is not a licensed medical device, financial advisor, or emergency service. For professional advice, consult qualified professionals.",
  },
  {
    question: "When will TheHomie be available?",
    answer:
      "We\u2019re currently in early development. Join the waitlist to be among the first to access the platform when it launches.",
  },
  {
    question: "How much does it cost?",
    answer:
      "TheHomie will offer a free Core tier with essential features, a Pro tier at $9/month with full behavioral intelligence, and a Family tier at $19/month for household coverage. See our Pricing page for details.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-graphite md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-slate">
            Clear answers to common questions.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-graphite/5 bg-white p-6">
              <h2 className="text-base font-semibold text-graphite">{faq.question}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        headline="Still have questions?"
        subheadline="Join the waitlist and we\u2019ll keep you informed as we build."
      />
    </>
  );
}
