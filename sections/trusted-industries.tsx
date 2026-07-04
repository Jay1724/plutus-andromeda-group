import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { industries } from "@/lib/data/industries";

export function TrustedIndustries() {
  const loop = [...industries, ...industries];

  return (
    <section className="border-y border-border bg-surface-muted py-16">
      <Container>
        <Reveal className="mb-10 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Trusted Across Industries
          </span>
        </Reveal>
      </Container>

      <div className="relative mask-fade-x">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {loop.map((industry, i) => (
            <div
              key={`${industry.slug}-${i}`}
              className="flex items-center gap-3 rounded-full border border-border-strong bg-surface px-6 py-3 text-sm font-medium text-foreground/80 whitespace-nowrap"
            >
              <industry.icon className="h-4 w-4 text-accent" />
              {industry.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
