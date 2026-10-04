"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/format";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rates", label: "Rates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Desderia Bureau de Change home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
                    active ? "text-gold-bright" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={`tel:${PHONE_TEL}`} className="tabular text-sm font-semibold text-white/75 hover:text-white">
            {PHONE_DISPLAY}
          </a>
          <Link href="/contact" className="btn btn-ghost-light py-2.5">
            Find us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-gold lg:hidden"
          onClick={() => setOpenOn(open ? null : pathname)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-line bg-ink px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block border-b border-ink-line py-4 text-sm font-bold uppercase tracking-[0.16em] ${
                    pathname === link.href ? "text-gold-bright" : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={`tel:${PHONE_TEL}`} className="btn btn-primary mt-6 w-full">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
