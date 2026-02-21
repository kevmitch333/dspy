import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Trust — TheHomie",
  description: "How TheHomie protects your data: encryption, transparency, user control, and deletion rights.",
};

const dataAccess = [
  { data: "Calendar events", why: "Schedule awareness and conflict detection", how: "Read-only API. Events processed on-device where possible." },
  { data: "Location", why: "Context-aware interventions and safety features", how: "Processed in real-time. Historical location data encrypted and stored locally." },
  { data: "Spending transactions", why: "Budget tracking and impulse prevention", how: "Aggregated categories only. Individual transactions encrypted." },
  { data: "Health & wearable data", why: "Energy, sleep, and activity pattern modeling", how: "Metrics only. No raw health records accessed." },
];

const neverDo = [
  "Sell your data to third parties",
  "Share data with advertisers",
  "Use your data to train models for other users",
  "Access data without explicit permission",
  "Store unencrypted personal information",
  "Make decisions without human override capability",
];

export default function TrustPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-tight text-graphite md:text-5xl">
            Trust &amp; Privacy
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate">
            Privacy is not a feature we added. It is the foundation everything else is built on.
            Here is exactly how your data is handled.
          </p>
        </div>
      </section>

      {/* What data is accessed */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            What Data Is Accessed
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            TheHomie only accesses data you explicitly grant permission for. Here is what, why, and how.
          </p>
          <div className="mt-10 space-y-4">
            {dataAccess.map((item) => (
              <div key={item.data} className="rounded-xl border border-graphite/5 bg-offwhite p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-medium text-slate/60 uppercase tracking-wider">Data</p>
                    <p className="mt-1 text-sm font-medium text-graphite">{item.data}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate/60 uppercase tracking-wider">Why</p>
                    <p className="mt-1 text-sm text-slate">{item.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate/60 uppercase tracking-wider">How</p>
                    <p className="mt-1 text-sm text-slate">{item.how}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How data is protected */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            How Your Data Is Protected
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <h3 className="text-sm font-semibold text-graphite">Encryption at Rest</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                All stored data is encrypted using AES-256. Your information is unreadable without
                your authentication.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <h3 className="text-sm font-semibold text-graphite">Encryption in Transit</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                All data transfer uses TLS 1.3. No unencrypted communication between your devices
                and our systems.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <h3 className="text-sm font-semibold text-graphite">On-Device Processing</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Where possible, data is processed directly on your device. Only aggregated, anonymized
                signals leave your phone.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <h3 className="text-sm font-semibold text-graphite">Zero-Knowledge Architecture</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                TheHomie&apos;s systems are designed so that even we cannot access your decrypted personal data.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <h3 className="text-sm font-semibold text-graphite">Regular Audits</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Independent security audits verify our practices. Results are published for full
                transparency.
              </p>
            </div>
            <div className="rounded-xl border border-graphite/5 bg-white p-6">
              <h3 className="text-sm font-semibold text-graphite">Minimal Data Retention</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Data is retained only as long as needed for your active use. Inactive data is
                automatically purged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we never do */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            What We Never Do
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {neverDo.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-red/10 bg-red/5 px-4 py-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-sm text-graphite">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to delete */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            How to Delete Your Memory
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            Your data belongs to you. Deletion is simple and permanent.
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-graphite/5 bg-white p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-graphite text-xs font-semibold text-offwhite">1</span>
              <div>
                <h3 className="text-sm font-semibold text-graphite">Open Trust Center</h3>
                <p className="mt-1 text-sm text-slate">Navigate to Settings &gt; Trust Center in the app.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-graphite/5 bg-white p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-graphite text-xs font-semibold text-offwhite">2</span>
              <div>
                <h3 className="text-sm font-semibold text-graphite">Select data to remove</h3>
                <p className="mt-1 text-sm text-slate">Choose specific categories or select all data for complete deletion.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-graphite/5 bg-white p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-graphite text-xs font-semibold text-offwhite">3</span>
              <div>
                <h3 className="text-sm font-semibold text-graphite">Confirm deletion</h3>
                <p className="mt-1 text-sm text-slate">Confirm your request. Data is permanently removed within 24 hours. No recovery possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-graphite/5 bg-offwhite p-6 md:p-8">
            <h2 className="text-lg font-semibold text-graphite">Guidance, Not Guarantees</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              TheHomie provides behavioral intelligence and guidance based on the data you share.
              It is not a medical device, financial advisor, or emergency service. All interventions
              are recommendations — never commands. You always retain full control over your decisions.
              TheHomie is a tool to help you make better choices, not a replacement for professional
              advice when needed.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
