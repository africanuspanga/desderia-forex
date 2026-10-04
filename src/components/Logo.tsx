import Image from "next/image";

interface LogoProps {
  className?: string;
}

/** Gold-and-white lockup on transparent — always place it on black. */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Desderia Bureau de Change"
      width={2172}
      height={724}
      className={`h-11 w-auto sm:h-12 ${className}`}
      priority
    />
  );
}
