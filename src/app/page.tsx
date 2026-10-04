import { getRates } from "@/lib/rates";
import Hero from "@/components/home/Hero";
import RatesSection from "@/components/home/RatesSection";
import VisitSection from "@/components/home/VisitSection";

export default async function Home() {
  const ratesResult = await getRates();

  return (
    <>
      <Hero {...ratesResult} />
      <RatesSection {...ratesResult} />
      <VisitSection />
    </>
  );
}
