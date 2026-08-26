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
Fonts: Oswald (`font-display`, uppercase headings) + Inter (`font-sans`, body). The real
logo (`public/Desderia logo.png` → `public/logo.png`) ships on its own solid black card
(not transparent) — the `Logo` component wraps it in a small rounded chip rather than
fighting that. Favicon padded to square from `public/Desderia-Favicon.png` → `src/app/icon.png`.

## Session handover — 2026-08-26

Full redesign pass to fix agency feedback ("cards look AI-generated"). Design system,
rationale, and what to watch for next time this feedback recurs is written up in full
in the Claude memory system under `feedback-ai-slop-design-system` (not in this repo) —
worth reading before making further visual changes here.

Short version of what changed:
- Reusable component classes added to `globals.css`: `.btn` / `.btn-primary` /
  `.btn-outline` / `.btn-dark` / `.btn-white` / `.btn-ghost-light` (12px radius, never
  pill), `.card` (whisper shadow, no colored glow), `.eyebrow` (quiet kicker label,
  replaces pill badges), `.badge` (small rect status badges). Reuse these instead of
  inlining new pill/glow Tailwind classes.
- Hero background is a real photo (`public/photos/hero-golden-towers.jpg`) + `.hero-scrim`
  gradient, not an abstract radial-gradient mesh.
- `WhyChoose` and the About-page values section were rewritten twice: round 1 dropped
  icon-box cards for a `border-l-2` accent list, but that *still* read as "AI card grid"
  in agency review. Round 2 fix: no boxes/grids at all — one flowing editorial paragraph
  + a single-row fact strip with hairline (`h-4 w-px bg-black/12`) dividers between
  short phrases. The currency-symbol row ($ € ¥ £) was kept but demoted to a small
  decorative flourish beside the heading, not a card/row of its own. If "still looks AI"
  feedback recurs, suspect this shape (N visually equal blocks) before suspecting styling.
- Added `src/components/RatesTicker.tsx`: a fixed, auto-scrolling rates strip under the
  navbar (`.ticker-*` classes in `globals.css`, ink background + gold text since gold-on-
  white lacked contrast), wired by making `layout.tsx` an async Server Component that
  calls `getRates()`. Its divided-strip look deliberately echoes the WhyChoose fact strip.
- Navbar switched from dark to white background (needed for the real logo's black card to
  read cleanly) with a bottom hairline border and underline active-state, no pill nav links.
- Adding the ticker pushed every page's top padding down by 40px — Hero uses `pt-30`,
  About/Contact/Rates use `pt-38 lg:pt-42`. If you touch header height (navbar or
  ticker), these need to move together; Tailwind v4's spacing scale accepts any integer
  step so arbitrary numbers like `pt-38` are valid, not typos.
- This was a plain folder with no git history until today — repo was `git init`'d fresh
  and pushed to https://github.com/africanuspanga/desderia-forex as a single initial
  commit (everything, including the redesign, landed in commit 1).
- Dar es Salaam stock photography for hero/section imagery lives in
  `/Users/admin/Downloads/Dar-City-Images` — several unused images remain there for
  future sections (check before asking the user for new photos).

**Not done / possible next steps:** only Hero + WhyChoose + About values got the full
editorial treatment; RateCard/VisitCta/ExchangeCalculator got lighter button/shadow
fixes only. No automated tests exist. Verified via `curl` + dev-server logs only this
session — no browser screenshot verification was done (Chrome extension wasn't
connected); worth an actual visual pass next session.
