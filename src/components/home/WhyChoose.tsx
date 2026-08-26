import Image from "next/image";

const FACTS = [
  "Competitive, published rates",
  "Fast & secure",
  "Discreet, professional service",
];

const CURRENCY_SYMBOLS = ["$", "€", "¥", "£"];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="flex items-start justify-between gap-6">
              <p className="eyebrow">Why Desderia</p>
              <div className="hidden shrink-0 flex-col items-end gap-1.5 sm:flex" aria-hidden="true">
                {CURRENCY_SYMBOLS.map((sym) => (
                  <span key={sym} className="font-display text-sm font-bold text-gold/50">
                    {sym}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Currency exchange, handled properly.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Desderia&apos;s rates track Bank of Tanzania references and
              update regularly, so the number you see online is the number
              you get at Sky City Mall. Fast, secure, and handled by a team
              that treats every exchange — large or small — with the same
              discretion.
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-black/8 pt-6 text-sm font-medium text-foreground">
              {FACTS.map((fact, i) => (
                <li key={fact} className="flex items-center gap-5">
                  {i > 0 && <span className="h-4 w-px bg-black/12" aria-hidden="true" />}
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-2xl">
            <Image
              src="/photos/skyline-moon.jpg"
              alt="Dar es Salaam skyline at night"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6">
              <p className="text-sm font-semibold text-white">Trusted across Dar es Salaam.</p>
              <p className="mt-1 text-xs text-white/70">Sky City Mall — Dar es Salaam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
