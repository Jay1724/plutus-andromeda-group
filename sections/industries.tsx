import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { industries } from "@/lib/data/industries";

export function Industries() {
  return (
    <section id="industries" className="bg-surface-muted py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Industries"
            title="Deep sector experience, not generic playbooks."
            description="Every industry has different regulatory pressure, risk tolerance and user expectations. We design for the ones we know best."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 0.05}>
              <Link
                href={`/industries#${industry.slug}`}
                className="group flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <industry.icon
                    className="h-7 w-7 text-accent"
                    strokeWidth={1.5}
                  />
                  <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-lg font-medium tracking-tight">
                  {industry.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {industry.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
