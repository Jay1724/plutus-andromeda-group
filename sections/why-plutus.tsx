import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { whyFeatures } from "@/lib/data/why-plutus";

export function WhyPlutus() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Why Plutus"
            title="Craft and rigour, in equal measure."
            description="We combine agency-grade design with the engineering discipline enterprise platforms demand."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {whyFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-5 bg-surface p-8 md:p-10">
                <feature.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
