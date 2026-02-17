"use client";

import Link from "next/link";
import { useState } from "react";
import { trackCTAClick } from "@/lib/analytics";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust", label: "Trust" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-graphite/5 bg-offwhite/90 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-graphite"
          aria-label="TheHomie home"
        >
          TheHomie
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate transition-colors hover:text-graphite"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/waitlist"
            className="rounded-lg bg-graphite px-4 py-2 text-sm font-medium text-offwhite transition-colors hover:bg-slate"
            onClick={() => trackCTAClick("header_cta", "header")}
          >
            Request Early Access
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-graphite transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-graphite transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-graphite transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="border-t border-graphite/5 bg-offwhite px-6 pb-6 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-slate transition-colors hover:text-graphite"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/waitlist"
            className="mt-2 block rounded-lg bg-graphite px-4 py-2.5 text-center text-sm font-medium text-offwhite transition-colors hover:bg-slate"
            onClick={() => {
              setMenuOpen(false);
              trackCTAClick("header_cta_mobile", "header");
            }}
          >
            Request Early Access
          </Link>
        </nav>
      )}
    </header>
  );
}
