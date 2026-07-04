import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { CtaBanner } from "@/components/cta/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { WhyPlutus } from "@/sections/why-plutus";
import { stats, values } from "@/lib/data/about";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Plutus Andromeda Group is a Johannesburg-based digital consultancy helping mid-size and enterprise organisations design, build and scale digital products.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A digital consultancy built for the enterprise, run like a product studio."
        description={`Founded in ${siteConfig.founded} and based in Johannesburg, we work with organisations who need agency-grade design and engineering-grade rigour in the same team.`}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div className="flex flex-col gap-6">
                <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                  Our story
                </h2>
                <p className="leading-relaxed text-muted">
                  Plutus Andromeda Group started as a small team of designers
                  and engineers frustrated by how often digital projects in
                  South Africa were treated as a cost centre rather than a
                  growth lever. We set out to build a consultancy that could
                  operate at the same calibre as the design studios our
                  clients admired internationally, while understanding the
                  regulatory and operational reality of doing business here.
                </p>
                <p className="leading-relaxed text-muted">
                  Nearly a decade on, we work across banking, mining,
                  healthcare, telecommunications and government — sectors
                  where the cost of getting digital experience wrong is
                  measured in more than lost conversions. That context shapes
                  everything we design.
                </p>
                <p className="leading-relaxed text-muted">
                  We remain intentionally mid-sized: large enough to resource
                  enterprise engagements properly, small enough that every
                  project has senior attention from strategy through to
                  launch.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-8"
                  >
                    <span className="font-display text-4xl font-medium text-accent">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              What we hold ourselves to
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="flex flex-col gap-3 border-t border-border-strong pt-6">
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WhyPlutus />

      <CtaBanner />
    </>
  );
}
