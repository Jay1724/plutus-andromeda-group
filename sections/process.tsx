"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/lib/data/process";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Our Process"
            title="A disciplined path from problem to product."
            description="Six stages, applied consistently whether we're shipping a landing page or a national banking platform."
          />
        </Reveal>

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-[15px] top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[15px] top-0 hidden h-full w-px origin-top bg-accent md:left-1/2 md:block"
          />
          <div className="absolute left-[15px] top-0 h-full w-px bg-border md:hidden" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[15px] top-0 h-full w-px origin-top bg-accent md:hidden"
          />

          <div className="flex flex-col gap-12 md:gap-0">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.index}
                  className="relative flex items-start gap-6 pl-10 md:grid md:grid-cols-2 md:gap-0 md:pl-0 md:py-10"
                >
                  <span className="absolute left-0 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border-strong bg-background text-xs font-medium md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <Reveal
                    className={
                      isEven
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }
                    delay={0.05}
                  >
                    <div
                      className={
                        isEven
                          ? "flex flex-col gap-2 md:items-end"
                          : "flex flex-col gap-2"
                      }
                    >
                      <span className="font-mono text-sm text-accent">
                        {step.index}
                      </span>
                      <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                        {step.name}
                      </h3>
                      <p className="max-w-md leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
