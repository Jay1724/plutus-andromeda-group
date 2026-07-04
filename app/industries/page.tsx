import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { CtaBanner } from "@/components/cta/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { industries } from "@/lib/data/industries";
import { projects } from "@/lib/data/work";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Deep sector experience across banking, mining, retail, healthcare, government, telecommunications, education and professional services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Sector depth, not generic playbooks."
        description="Every industry carries its own regulatory pressure, risk tolerance and user expectations. We design for the ones we know in detail."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {industries.map((industry, i) => {
              const relatedProjects = projects.filter(
                (p) => p.industry === industry.name
              );
              return (
                <Reveal key={industry.slug} delay={i * 0.04}>
                  <div
                    id={industry.slug}
                    className="grid scroll-mt-24 grid-cols-1 gap-8 py-10 md:grid-cols-[1.4fr_1fr]"
                  >
                    <div className="flex items-start gap-6">
                      <industry.icon
                        className="mt-1 h-8 w-8 shrink-0 text-accent"
                        strokeWidth={1.5}
                      />
                      <div className="flex flex-col gap-3">
                        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                          {industry.name}
                        </h2>
                        <p className="max-w-lg leading-relaxed text-muted">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:items-end md:text-right">
                      <span className="text-xs uppercase tracking-wide text-muted">
                        Related work
                      </span>
                      {relatedProjects.length ? (
                        relatedProjects.map((p) => (
                          <span key={p.slug} className="text-sm text-foreground/80">
                            {p.name}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm text-foreground/50">
                          Engagements under NDA
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
