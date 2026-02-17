"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
}

export default function CTASection({
  headline = "Life doesn\u2019t need another app.",
  subheadline = "It needs an operating system.",
}: CTASectionProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
          {headline}
        </h2>
        <p className="mt-3 text-lg text-slate">{subheadline}</p>
        <div className="mt-10">
          <Link
            href="/waitlist"
            className="inline-block rounded-lg bg-graphite px-8 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-slate"
            onClick={() => trackCTAClick("final_cta", "cta_section")}
          >
            Request Early Access
          </Link>
        </div>
      </div>
    </section>
  );
}
