import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaBanner({
  title = "Let's build something remarkable.",
  description = "Tell us about your business and what you're trying to achieve — we'll respond within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start gap-8 rounded-3xl border border-border bg-surface-muted p-10 md:flex-row md:items-center md:justify-between md:p-16">
            <div className="max-w-xl">
              <h2 className="text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-balance leading-relaxed text-muted">
                {description}
              </p>
            </div>
            <Button asChild size="lg" variant="accent" className="shrink-0">
              <Link href="/contact">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
