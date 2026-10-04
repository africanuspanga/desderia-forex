import Link from "next/link";
import Guilloche from "@/components/Guilloche";
import RateNote from "@/components/home/RateNote";
import type { RatesResult } from "@/lib/rates";

export default function Hero({ rates, transactionDate }: RatesResult) {
  const headline = rates.find((r) => r.currency.code === "USD") ?? rates[0];

  return (
    <section className="relative overflow-hidden bg-ink pt-30 text-white">
      <Guilloche
        rings={2}
        strokeWidth={0.25}
        className="pointer-events-none absolute -right-[22rem] -top-40 h-[56rem] text-gold/[0.09]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <p className="eyebrow eyebrow-light">Bureau de Change · Sky City Mall</p>
          <h1 className="font-display mt-6 text-[3.6rem] leading-[0.9] sm:text-[5.5rem] lg:text-[6.5rem]">
            Know the rate
            <br />
            before you
            <br />
            <span className="text-gold-bright">walk in.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">
            Desderia&apos;s buying and selling rates for today, taken from the Bank of
            Tanzania reference rate. Check them here, then exchange at our counter in
            Sky City Mall.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/rates" className="btn btn-primary">
              All of today&apos;s rates
            </Link>
            <Link href="/contact" className="btn btn-ghost-light">
              How to find us
            </Link>
          </div>
        </div>

        {headline && (
          <div className="lg:col-span-6 lg:pl-6">
            <RateNote rate={headline} transactionDate={transactionDate} />
          </div>
        )}
      </div>
    </section>
  );
}
