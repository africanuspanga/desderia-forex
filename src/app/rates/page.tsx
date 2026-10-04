import type { Metadata } from "next";
import { getRates } from "@/lib/rates";
import ExchangeCalculator from "@/components/ExchangeCalculator";
import PageHeader from "@/components/PageHeader";
import RatesLedger from "@/components/RatesLedger";

export const metadata: Metadata = {
  title: "Exchange Rates | Desderia Bureau de Change",
  description: "Today's indicative buying and selling rates at Desderia Bureau de Change, Dar es Salaam.",
};

export default async function RatesPage() {
  const { rates, transactionDate, source } = await getRates();

  return (
    <>
      <PageHeader kicker="Today's rates" title="Exchange rates">
        Worked out from the Bank of Tanzania reference rate. The rate for your
        exchange is confirmed at our Sky City Mall counter.
      </PageHeader>
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <RatesLedger rates={rates} transactionDate={transactionDate} source={source} />
        </div>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <ExchangeCalculator rates={rates} />
          </div>
        </div>
      </div>
    </>
  );
}
