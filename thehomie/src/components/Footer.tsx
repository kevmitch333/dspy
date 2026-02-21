import Link from "next/link";

const footerLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust", label: "Trust" },
  { href: "/faq", label: "FAQ" },
  { href: "/waitlist", label: "Waitlist" },
];

export default function Footer() {
  return (
    <footer className="border-t border-graphite/5 bg-offwhite" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-graphite">TheHomie</p>
            <p className="mt-1 text-sm text-slate">Your Personal Operating System.</p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate transition-colors hover:text-graphite"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-graphite/5 pt-6">
          <p className="text-xs text-slate/60">
            &copy; {new Date().getFullYear()} TheHomie. All rights reserved. Your data belongs to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
