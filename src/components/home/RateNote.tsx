import Guilloche from "@/components/Guilloche";
import MicroText from "@/components/MicroText";
import type { CurrencyRate } from "@/lib/rates";
import { formatRateDate, formatRateNumber } from "@/lib/format";

interface RateNoteProps {
  rate: CurrencyRate;
  transactionDate: string | null;
}

/** Today's headline rate, printed like a banknote. The serial is the BoT date. */
export default function RateNote({ rate, transactionDate }: RateNoteProps) {
  const serial = transactionDate ? transactionDate.slice(2).split("-").reverse().join("") : "000000";
  const reference = transactionDate
    ? `Bank of Tanzania reference · ${formatRateDate(transactionDate)} · `
    : "Indicative rate · Confirmed at the counter · ";

  return (
    <figure className="relative border border-gold/45 bg-ink-soft p-1.5 text-gold-soft shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
      <div className="relative overflow-hidden border border-gold/25 px-5 py-4 sm:px-7 sm:py-5">
        <Guilloche
          draw
          className="pointer-events-none absolute -left-24 top-1/2 h-[150%] -translate-y-1/2 text-gold/40 sm:-left-20"
        />

        <MicroText />

        <div className="relative mt-3 flex items-start justify-between gap-4">
          <p className="engraved text-sm text-gold">Desderia</p>
          <p className="engraved tabular text-sm text-gold/80">
            Nº DBC {serial}
          </p>
        </div>

        <div className="relative mt-4 text-right sm:mt-6">
          <p className="font-display text-[5.5rem] leading-[0.82] text-gold-bright sm:text-[7.5rem]">
            {rate.currency.code}
          </p>
          <p className="engraved mt-2 text-sm text-gold-soft/70">{rate.currency.name}</p>
        </div>

        <figcaption className="relative mt-6 grid grid-cols-2 gap-4 border-t border-gold/25 pt-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-soft/60">We buy</p>
            <p className="font-display-num mt-1 text-3xl text-white sm:text-4xl">{formatRateNumber(rate.buyingRate)}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-soft/60">We sell</p>
            <p className="font-display-num mt-1 text-3xl text-white sm:text-4xl">{formatRateNumber(rate.sellingRate)}</p>
          </div>
        </figcaption>

        <MicroText className="mt-4" text={reference} />
      </div>
    </figure>
  );
}
