import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CtaBanner } from "@/components/cta/cta-banner";
import { Services } from "@/sections/services";
import { Process } from "@/sections/process";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, product design, web experiences, commerce and enterprise platforms — the full capability set behind Plutus Andromeda Group.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Strategy, design and engineering, under one roof."
        description="We work across the full stack of digital transformation — brand, product, web and enterprise platforms — or embed into the part of it you need most."
      />
      <Services />
      <Process />
      <CtaBanner />
    </>
  );
}
