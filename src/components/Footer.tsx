import Link from "next/link";
import Logo from "@/components/Logo";
import MicroText from "@/components/MicroText";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/format";

const LINKS = [
  { href: "/rates", label: "Exchange rates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-dark bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8 lg:pb-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo className="h-14 sm:h-16" />
            <p className="engraved mt-5 text-sm text-gold">Your trusted currency exchange partner</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <ul className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-gold-bright">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-sm text-white/65">{ADDRESS}</p>
            <a href={`tel:${PHONE_TEL}`} className="tabular mt-3 inline-block text-lg font-semibold hover:text-gold-bright">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <MicroText className="mt-14" />
        <div className="mt-4 flex flex-col gap-3 text-xs leading-relaxed text-white/45 sm:flex-row sm:justify-between">
          <p>Rates shown online are indicative. The final rate is confirmed at our Sky City Mall counter.</p>
          <p>© {new Date().getFullYear()} Desderia Bureau de Change</p>
        </div>
      </div>
    </footer>
  );
}
