import Image from "next/image";

interface LogoProps {
  className?: string;
}

/** Desderia's real lockup ships on its own black card — wrap it, don't fight it. */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center overflow-hidden rounded-lg bg-ink ${className}`}>
      <Image
        src="/logo.png"
        alt="Desderia Bureau de Change"
        width={2172}
        height={724}
        className="h-10 w-auto sm:h-11"
        priority
      />
    </span>
  );
}
