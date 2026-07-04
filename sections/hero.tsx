"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { AuroraField } from "@/components/motion/aurora-field";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-16">
      <AuroraField className="absolute inset-0" />

      <Container className="relative z-10 flex flex-col gap-10 py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur">
            Digital Design &amp; Engineering — South Africa
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            We design digital experiences businesses{" "}
            <span className="font-serif-accent italic text-accent">
              grow on.
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.25}
          variants={fadeUp}
          className="max-w-xl text-balance text-lg leading-relaxed text-muted md:text-xl"
        >
          From strategy to launch, we help organisations create digital
          products, websites and enterprise platforms that deliver measurable
          business value.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/work">View Our Work</Link>
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted md:flex"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
