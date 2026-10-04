import type { CSSProperties } from "react";

/**
 * Banknote-style guilloche rosette, drawn as overlapping epitrochoids.
 * Pure geometry, computed on the server — no image asset.
 */

function epitrochoid(R: number, r: number, d: number, scale: number, rotate: number): string {
  // Integer R and r → the curve closes after r / gcd(R, r) turns.
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const laps = r / gcd(R, r);
  const steps = laps * 150;
  const k = (R + r) / r;
  let path = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * laps * Math.PI * 2;
    const x = ((R + r) * Math.cos(t) - d * Math.cos(k * t)) * scale;
    const y = ((R + r) * Math.sin(t) - d * Math.sin(k * t)) * scale;
    const xr = x * Math.cos(rotate) - y * Math.sin(rotate);
    const yr = x * Math.sin(rotate) + y * Math.cos(rotate);
    path += `${i === 0 ? "M" : "L"}${xr.toFixed(1)} ${yr.toFixed(1)}`;
  }
  return path;
}

const RINGS = [
  { R: 53, r: 7, d: 18, size: 98, rotate: 0, opacity: 0.9 },
  { R: 53, r: 7, d: 18, size: 92, rotate: Math.PI / 60, opacity: 0.55 },
  { R: 41, r: 5, d: 14, size: 70, rotate: Math.PI / 20, opacity: 0.7 },
  { R: 29, r: 6, d: 11, size: 44, rotate: 0, opacity: 0.5 },
];

interface GuillocheProps {
  className?: string;
  /** Number of rings to draw (outermost first). */
  rings?: number;
  draw?: boolean;
  strokeWidth?: number;
}

export default function Guilloche({ className = "", rings = RINGS.length, draw = false, strokeWidth = 0.35 }: GuillocheProps) {
  return (
    <svg
      viewBox="-100 -100 200 200"
      className={`guilloche ${draw ? "guilloche-draw" : ""} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {RINGS.slice(0, rings).map((ring, i) => {
        const outer = ring.R + ring.r + ring.d; // max radius before scaling
        return (
          <path
            key={i}
            d={epitrochoid(ring.R, ring.r, ring.d, ring.size / outer, ring.rotate)}
            pathLength={1}
            strokeWidth={strokeWidth}
            opacity={ring.opacity}
            style={{ "--i": i } as CSSProperties}
          />
        );
      })}
    </svg>
  );
}
