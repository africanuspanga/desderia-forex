import type { Metadata } from "next";
import { Anybody, Cormorant_SC, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import RatesTicker from "@/components/RatesTicker";
import { WHATSAPP_NUMBER } from "@/lib/format";
import { getRates } from "@/lib/rates";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

// Variable width axis lets the display face run condensed like the wordmark.
const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  axes: ["wdth"],
});

const cormorant = Cormorant_SC({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Desderia Bureau de Change | Foreign Exchange in Dar es Salaam",
  description:
    "Check today's foreign exchange rates and visit Desderia Bureau de Change at Sky City Mall, Dar es Salaam.",
  metadataBase: new URL("https://www.desderiaforex.co.tz"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Desderia Bureau de Change",
  description: "Your trusted currency exchange partner in Dar es Salaam.",
  telephone: "+255791666046",
  areaServed: "Dar es Salaam, Tanzania",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sky City Mall",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { rates } = await getRates();

  return (
    <html lang="en" className={`${schibsted.variable} ${anybody.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <RatesTicker rates={rates} />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton phone={WHATSAPP_NUMBER} />
        <MobileBottomNav
          items={[
            { href: "/", label: "Home", icon: "home" },
            { href: "/rates", label: "Rates", icon: "rates" },
            { href: "/about", label: "About", icon: "info" },
            { href: "/contact", label: "Contact", icon: "contact" },
          ]}
        />
      </body>
    </html>
  );
}
