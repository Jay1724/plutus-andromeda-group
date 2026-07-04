import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { InsightCard } from "@/components/insights/insight-card";
import { insights } from "@/lib/data/insights";

export function Insights() {
  const featured = insights.slice(0, 3);

  return (
    <section id="insights" className="py-28 md:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="Insights"
              title="Perspective from inside enterprise engagements."
              description="Notes on design, strategy and engineering from the projects we ship."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/insights">
                All insights
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((insight, i) => (
            <Reveal key={insight.slug} delay={i * 0.08}>
              <InsightCard insight={insight} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
