import MicroText from "@/components/MicroText";
import type { CurrencyRate } from "@/lib/rates";
import { formatRateDate, formatRateNumber } from "@/lib/format";

interface RatesLedgerProps {
  rates: CurrencyRate[];
  transactionDate: string | null;
  source: "bot" | "fallback";
}

export default function RatesLedger({ rates, transactionDate, source }: RatesLedgerProps) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-[3px] border-double border-gold-dark pb-3">
        <p className="engraved text-sm text-gold-dark">Rates in Tanzanian shillings</p>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {source === "bot" && transactionDate
            ? `BoT reference ${formatRateDate(transactionDate)}`
            : "Indicative · live BoT feed unavailable"}
        </p>
      </div>

      <table className="w-full border-collapse">
        <caption className="sr-only">Desderia buying and selling rates in Tanzanian shillings</caption>
        <thead>
          <tr className="text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            <th scope="col" className="py-3 font-semibold">Currency</th>
            <th scope="col" className="py-3 text-right font-semibold">We buy</th>
            <th scope="col" className="py-3 pl-6 text-right font-semibold sm:pl-12">We sell</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.currency.code} className="border-t border-black/[0.08]">
              <th scope="row" className="py-3.5 text-left font-normal">
                <span className="font-display text-2xl leading-none text-foreground">{rate.currency.code}</span>
                <span className="ml-3 hidden text-sm text-muted sm:inline">{rate.currency.name}</span>
              </th>
              <td className="font-display-num py-3.5 text-right text-xl text-foreground sm:text-2xl">
                {formatRateNumber(rate.buyingRate)}
              </td>
              <td className="font-display-num py-3.5 pl-6 text-right text-xl text-foreground sm:pl-12 sm:text-2xl">
                {formatRateNumber(rate.sellingRate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <MicroText className="mt-1 border-t border-black/[0.08] pt-2" text="Indicative rates · Final rate confirmed at the Desderia counter · " />
    </div>
  );
}
