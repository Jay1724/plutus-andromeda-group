import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="border-b border-border pb-16 pt-20 md:pb-20 md:pt-28">
      <Container>
        <Reveal>
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted md:text-xl">
              {description}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
