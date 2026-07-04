import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { CtaBanner } from "@/components/cta/cta-banner";
import { InsightCard } from "@/components/insights/insight-card";
import { Reveal } from "@/components/motion/reveal";
import { insights } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspective on design systems, product strategy, accessibility and enterprise platforms from the Plutus Andromeda Group team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Perspective from inside enterprise engagements."
        description="Notes on design, strategy and engineering from the projects we ship."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, i) => (
              <Reveal key={insight.slug} delay={(i % 3) * 0.06}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
