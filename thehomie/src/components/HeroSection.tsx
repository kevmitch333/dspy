"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import DashboardMock from "./DashboardMock";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-graphite md:text-6xl md:leading-[1.1]">
            Your Personal Operating System.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
            The intelligence layer that models your behavior, predicts risk, and keeps
            your life aligned&nbsp;&mdash; before regret happens.
          </p>
          <p className="mt-4 text-sm font-medium tracking-wide text-slate/70">
            Turning Chaos into Clarity&nbsp;&mdash; and Turning Impulse into Intention.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/waitlist"
              className="rounded-lg bg-graphite px-6 py-3 text-center text-sm font-medium text-offwhite transition-colors hover:bg-slate"
              onClick={() => trackCTAClick("hero_primary", "hero")}
            >
              Request Early Access
            </Link>
            <Link
              href="/product"
              className="rounded-lg border border-graphite/15 px-6 py-3 text-center text-sm font-medium text-graphite transition-colors hover:border-graphite/30"
              onClick={() => trackCTAClick("hero_secondary", "hero")}
            >
              See How It Works
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
