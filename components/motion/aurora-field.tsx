"use client";

import { motion } from "framer-motion";

export function AuroraField({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[-20%] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-accent/[0.16] blur-[140px]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-10%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-accent/[0.12] blur-[120px]"
          animate={{ x: [0, -24, 0], y: [0, 24, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] left-[10%] h-[24rem] w-[24rem] rounded-full bg-accent/[0.08] blur-[120px]"
          animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
    </div>
  );
}
