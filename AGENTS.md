<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Desderia Bureau de Change — Website

Marketing + indicative-rates website for **Desderia Bureau de Change**, a physical
foreign exchange bureau at Sky City Mall, Dar es Salaam.

This is a companion site to **L&S Forex Bureau** and **Papa Faru Bureau de Change** —
one agency commissions and reviews all three together, so design-system feedback
usually applies to all three at once. See the sibling repos:
- L&S: https://github.com/africanuspanga/l-s-forex-bureau (local: `~/L&S Forex Bureau/web`, port 3000)
- Papa Faru: https://github.com/africanuspanga/papa-faru (local: `~/Papa Faru Forex`, port 3001)

## Stack

Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4.
No database — rates come from `src/lib/rates.ts` (Bank of Tanzania reference import,
same pattern as L&S but without the admin/publish workflow).

## Commands

```bash
npm run dev -- -p 3002   # dev server (this site's assigned port — see sibling repos above)
npm run build
npm run start
```

## Brand

Black `#0a0a0a` / gold `#c9b54a` (`gold-dark` `#9c8a2e`, `gold-soft` `#f6f1d9`).
Fonts: Anybody (`font-display`, condensed via wdth axis) + Cormorant SC (engraved labels) + Schibsted Grotesk (`font-sans`). The real
logo (`public/Desderia logo.png` → `public/logo.png`) is gold-and-white on a transparent
background, so it must sit on black (header, footer). Favicon padded to square from `public/Desderia-Favicon.png` → `src/app/icon.png`.

## Session handover — 2026-10-04 (design round 3)

Agency feedback round 3: "all three still look too AI-generic". Root cause: the three
sites were one template with different colours (same photo hero + calculator card, same
rate-card grid, same eyebrow labels, same gradient CTA box). Each site was rebuilt around
its own signature device taken from a real bureau. **Keep the three distinct: don't
port a component's shape from one sibling site to another.** Full rationale is in the
Claude memory `feedback-forex-sites-sameness`.

**Desderia signature: banknote security printing.**
- `src/components/Guilloche.tsx` generates the rosette line-work (epitrochoids, server-side,
  optional stroke-draw animation). `MicroText.tsx` = microprinted rules.
- Hero "rate note" (`components/home/RateNote.tsx`) prints today's USD rate like a banknote;
  its serial number is the BoT transaction date. `RatesLedger.tsx` is the rate table.
- Header, footer and mobile bar are black because the logo is gold-on-transparent
  (`Logo.tsx` no longer wraps it in a card). Inner pages use `PageHeader.tsx`.
- Fonts: Anybody at wdth 58 (`font-display`, matches the wordmark) + Cormorant SC
  (`.engraved`, `.eyebrow`) + Schibsted Grotesk (body). Square corners everywhere.
- Removed: WhyChoose, VisitCta, RateCard, emoji flags. Rates <100 now keep 2 decimals.
  Fallback BoT means refreshed to 4 Oct 2026.
