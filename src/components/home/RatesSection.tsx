import ExchangeCalculator from "@/components/ExchangeCalculator";
import RatesLedger from "@/components/RatesLedger";
import type { RatesResult } from "@/lib/rates";

export default function RatesSection({ rates, transactionDate, source }: RatesResult) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Today&apos;s rates</p>
            <h2 className="font-display mt-5 text-5xl leading-[0.92] text-foreground sm:text-6xl">
              Buy &amp; sell, side by side
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              &ldquo;We buy&rdquo; is what we pay for your foreign currency. &ldquo;We
              sell&rdquo; is what you pay for ours.
            </p>
            <div className="mt-10">
              <RatesLedger rates={rates} transactionDate={transactionDate} source={source} />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-36">
            <div className="lg:sticky lg:top-36">
              <ExchangeCalculator rates={rates} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
