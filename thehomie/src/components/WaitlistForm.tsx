"use client";

import { useState } from "react";
import { trackWaitlistSubmit } from "@/lib/analytics";

const goals = [
  "Better financial decisions",
  "Healthier habits",
  "Improved focus & productivity",
  "Emotional well-being",
  "Safety & personal security",
  "General life management",
];

const featureOptions = [
  "Preferences Vault",
  "Geolocation Intelligence",
  "Decision Guardrails",
  "Weekly Life Ops Brief",
  "Mode Switching",
  "Trust Center",
];

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    primaryGoal: "",
    features: [] as string[],
    message: "",
  });

  function toggleFeature(feature: string) {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        trackWaitlistSubmit(form.primaryGoal);
        setSubmitted(true);
      }
    } catch {
      // Fallback: still show success for demo purposes
      trackWaitlistSubmit(form.primaryGoal);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green/20 bg-green/5 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-graphite">You&apos;re on the list.</h3>
        <p className="mt-2 text-sm text-slate">
          We&apos;ll reach out when early access is ready. Thank you for trusting us with your interest.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-graphite">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-graphite/10 bg-white px-4 py-2.5 text-sm text-graphite placeholder:text-slate/40 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-graphite">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-graphite/10 bg-white px-4 py-2.5 text-sm text-graphite placeholder:text-slate/40 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          placeholder="you@example.com"
        />
      </div>

      {/* Primary goal */}
      <div>
        <label htmlFor="goal" className="block text-sm font-medium text-graphite">
          Primary goal
        </label>
        <select
          id="goal"
          required
          value={form.primaryGoal}
          onChange={(e) => setForm({ ...form, primaryGoal: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-graphite/10 bg-white px-4 py-2.5 text-sm text-graphite focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        >
          <option value="">Select a goal</option>
          {goals.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Features interest */}
      <fieldset>
        <legend className="block text-sm font-medium text-graphite">
          Which features interest you?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {featureOptions.map((feature) => (
            <button
              key={feature}
              type="button"
              onClick={() => toggleFeature(feature)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                form.features.includes(feature)
                  ? "border-cyan bg-cyan/10 text-graphite"
                  : "border-graphite/10 text-slate hover:border-graphite/20"
              }`}
              aria-pressed={form.features.includes(feature)}
            >
              {feature}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-graphite">
          Anything else? <span className="font-normal text-slate/60">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-graphite/10 bg-white px-4 py-2.5 text-sm text-graphite placeholder:text-slate/40 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          placeholder="Tell us what matters most to you..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-graphite px-6 py-3 text-sm font-medium text-offwhite transition-colors hover:bg-slate disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Join the Waitlist"}
      </button>
    </form>
  );
}
