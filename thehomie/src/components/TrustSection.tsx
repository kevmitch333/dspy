const trustPoints = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="9" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 9V6a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "End-to-end encrypted",
    description: "Your data is encrypted at rest and in transit. We cannot read your personal information.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Fully transparent",
    description: "See exactly what data is accessed, why it is needed, and how it is used — at any time.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l1.5 4.5H16l-3.5 2.7 1.3 4.3L10 11l-3.8 2.5 1.3-4.3L4 6.5h4.5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "User-controlled",
    description: "You decide what TheHomie sees. Adjust permissions, revoke access, or pause anytime.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Delete anytime",
    description: "Request full data deletion at any point. Your memory, your choice.",
  },
];

export default function TrustSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
          Built on Trust
        </h2>
        <p className="mt-4 max-w-xl text-base text-slate">
          Privacy is not a feature. It is the foundation.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-xl border border-graphite/5 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-offwhite text-graphite">
                {point.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-graphite">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
