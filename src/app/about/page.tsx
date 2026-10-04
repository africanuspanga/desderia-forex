import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MicroText from "@/components/MicroText";
import PageHeader from "@/components/PageHeader";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/format";

export const metadata: Metadata = {
  title: "About | Desderia Bureau de Change",
  description: "Desderia Bureau de Change, your trusted currency exchange partner in Dar es Salaam.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader kicker="About Desderia" title="A currency counter at Sky City Mall" />
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
          <p className="text-2xl leading-snug text-foreground">
            Desderia Bureau de Change buys and sells foreign currency for people and
            businesses in Dar es Salaam, from our counter at Sky City Mall.
          </p>
          <p>
            We deal in the currencies our customers actually carry — US dollars,
            euros and pounds, Saudi riyals and Chinese yuan, and the Kenyan, Ugandan
            and South African currencies used for regional travel and trade.
          </p>
          <p>
            Our rates are worked out each day from the Bank of Tanzania reference
            rate and published here, so you can compare before you come. The final
            rate for your exchange is confirmed with you at the counter.
          </p>
          <p>
            Competitive rates, fast and reliable service, and transactions that are
            safe and secure — that&apos;s the whole job, done properly.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Link href="/rates" className="btn btn-dark">
              Today&apos;s rates
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-outline">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-gold/50 p-1.5">
            <div className="relative aspect-[4/5]">
              <Image
                src="/photos/hero-golden-towers.jpg"
                alt="Aerial view of traffic crossing a bridge in Dar es Salaam"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <MicroText className="mt-3" />
        </div>
      </div>
    </>
  );
}
