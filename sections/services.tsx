"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  const [openSlug, setOpenSlug] = useState<string>(services[0].slug);

  return (
    <section id="services" className="py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="One consultancy, every capability a digital product needs."
            description="From first brand mark to production infrastructure — we work across the full stack of digital transformation, or slot into the part of it you need most."
          />
        </Reveal>

        <div className="mt-16 flex flex-col divide-y divide-border border-y border-border">
          {services.map((service, index) => {
            const isOpen = openSlug === service.slug;
            return (
              <Reveal key={service.slug} delay={index * 0.05}>
                <div
                  id={service.slug}
                  className="group scroll-mt-24 py-8 md:py-10"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSlug(isOpen ? "" : service.slug)
                    }
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-5 md:gap-8">
                      <span className="hidden font-mono text-sm text-muted md:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <service.icon className="h-6 w-6 shrink-0 text-accent" />
                      <span className="font-display text-2xl font-medium tracking-tight md:text-4xl">
                        {service.category}
                      </span>
                    </div>
                    <Plus
                      className={cn(
                        "h-6 w-6 shrink-0 text-muted transition-transform duration-300",
                        isOpen && "rotate-45 text-accent"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-[2fr_1fr] md:pl-[4.5rem] lg:pl-24">
                          <p className="max-w-xl text-balance text-lg leading-relaxed text-muted">
                            {service.description}
                          </p>
                          <div className="flex flex-col gap-3">
                            <ul className="flex flex-col gap-2.5">
                              {service.capabilities.map((c) => (
                                <li
                                  key={c}
                                  className="flex items-center gap-2 text-sm text-foreground/80"
                                >
                                  <span className="h-1 w-1 rounded-full bg-accent" />
                                  {c}
                                </li>
                              ))}
                            </ul>
                            <Link
                              href="/services"
                              className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-transform hover:translate-x-0.5"
                            >
                              Learn more
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
