import type { ReactNode } from "react";
import Guilloche from "@/components/Guilloche";

interface PageHeaderProps {
  kicker: string;
  title: string;
  children?: ReactNode;
}

/** Black band with a corner of guilloche — the top of every inner page. */
export default function PageHeader({ kicker, title, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-ink pt-30 text-white">
      <Guilloche
        rings={2}
        strokeWidth={0.25}
        className="pointer-events-none absolute -right-48 top-0 h-[34rem] text-gold/[0.12]"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <p className="eyebrow eyebrow-light">{kicker}</p>
        <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.92] sm:text-7xl">{title}</h1>
        {children && <div className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{children}</div>}
      </div>
    </header>
  );
}
