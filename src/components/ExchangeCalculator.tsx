"use client";

import { useMemo, useState } from "react";
import type { CurrencyRate } from "@/lib/rates";

interface ExchangeCalculatorProps {
  rates: CurrencyRate[];
}

function formatAmount(value: number): string {
  const decimals = value < 100 ? 2 : 0;
  return new Intl.NumberFormat("en-TZ", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export default function ExchangeCalculator({ rates }: ExchangeCalculatorProps) {
  const rateMap = useMemo(() => new Map(rates.map((r) => [r.currency.code, r])), [rates]);

  const [haveCode, setHaveCode] = useState<string>(
    rates.some((r) => r.currency.code === "USD") ? "USD" : rates[0]?.currency.code ?? "TZS"
  );
  const [wantCode, setWantCode] = useState<string>("TZS");
  const [amountInput, setAmountInput] = useState<string>("100");

  const amount = parseFloat(amountInput.replace(/,/g, ""));
  const hasAmount = amountInput.trim() !== "" && Number.isFinite(amount) && amount > 0;

  // The bureau buys your foreign currency at its buying rate, sells at its selling rate.
  const toTzs = (code: string, value: number): number => {
    if (code === "TZS") return value;
    const rate = rateMap.get(code);
    return rate ? value * rate.buyingRate : NaN;
  };
  const fromTzs = (code: string, tzs: number): number => {
    if (code === "TZS") return tzs;
    const rate = rateMap.get(code);
    return rate ? tzs / rate.sellingRate : NaN;
  };

  const result = hasAmount ? fromTzs(wantCode, toTzs(haveCode, amount)) : null;

  const indicativeRate = ((): string | null => {
    if (haveCode === wantCode) return null;
    if (haveCode === "TZS") {
      const rate = rateMap.get(wantCode);
      return rate ? `1 ${wantCode} = ${formatAmount(rate.sellingRate)} TZS` : null;
    }
    if (wantCode === "TZS") {
      const rate = rateMap.get(haveCode);
      return rate ? `1 ${haveCode} = ${formatAmount(rate.buyingRate)} TZS` : null;
    }
    const from = rateMap.get(haveCode);
    const to = rateMap.get(wantCode);
    if (!from || !to) return null;
    return `1 ${haveCode} = ${formatAmount(from.buyingRate / to.sellingRate)} ${wantCode}`;
  })();

  const options = (
    <>
      <option value="TZS">TZS — Tanzanian Shilling</option>
      {rates.map((r) => (
        <option key={r.currency.code} value={r.currency.code}>
          {r.currency.code} — {r.currency.name}
        </option>
      ))}
    </>
  );

  return (
    <div className="border border-gold/50 bg-white p-1.5">
      <div className="border border-gold/25 p-5 sm:p-7">
        <p className="engraved text-sm text-gold-dark">Exchange estimate</p>

        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor="calc-have" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              You bring
            </label>
            <div className="mt-2 grid grid-cols-[1fr_8rem] gap-2">
              <select id="calc-have" value={haveCode} onChange={(e) => setHaveCode(e.target.value)} className="field font-medium">
                {options}
              </select>
              <input
                type="number"
                inputMode="decimal"
                min="0"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                aria-label={`Amount in ${haveCode}`}
                className="field tabular text-right"
              />
            </div>
          </div>

          <div>
            <label htmlFor="calc-want" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              You receive
            </label>
            <select id="calc-want" value={wantCode} onChange={(e) => setWantCode(e.target.value)} className="field mt-2 font-medium">
              {options}
            </select>
          </div>
        </div>

        <div className="mt-6 border-t-[3px] border-double border-gold/60 pt-4">
          <output aria-live="polite" className="flex items-baseline justify-between gap-3">
            <span className="font-display text-xl text-muted">{wantCode}</span>
            <span className="font-display-num truncate text-4xl text-foreground sm:text-5xl">
              {result !== null && Number.isFinite(result) ? formatAmount(result) : "—"}
            </span>
          </output>
          <p className="tabular mt-2 text-right text-sm text-muted">{indicativeRate ?? "Choose two different currencies"}</p>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-muted">
          An estimate from today&apos;s indicative rates. The counter confirms the final amount.
        </p>
      </div>
    </div>
  );
}
