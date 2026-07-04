import { Hero } from "@/sections/hero";
import { TrustedIndustries } from "@/sections/trusted-industries";
import { Services } from "@/sections/services";
import { FeaturedWork } from "@/sections/featured-work";
import { WhyPlutus } from "@/sections/why-plutus";
import { Process } from "@/sections/process";
import { Industries } from "@/sections/industries";
import { Insights } from "@/sections/insights";
import { FinalCta } from "@/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedIndustries />
      <Services />
      <FeaturedWork />
      <WhyPlutus />
      <Process />
      <Industries />
      <Insights />
      <FinalCta />
    </>
  );
}
