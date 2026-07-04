"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data/work";

export function ProjectCover({ project }: { project: Project }) {
  const [from, to] = project.palette;

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border-strong/60"
      style={{
        background: `linear-gradient(155deg, ${from} 0%, ${to} 100%)`,
      }}
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <div className="ml-3 h-5 flex-1 rounded-full bg-white/10" />
        </div>

        <div className="relative flex flex-1 items-center justify-center p-6">
          <motion.div
            className="absolute h-40 w-40 rounded-full bg-white/10 blur-2xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative grid w-full max-w-[85%] grid-cols-3 gap-2">
            <div className="col-span-2 h-16 rounded-lg bg-white/[0.14]" />
            <div className="h-16 rounded-lg bg-white/[0.1]" />
            <div className="h-10 rounded-lg bg-white/[0.08]" />
            <div className="h-10 rounded-lg bg-white/[0.14]" />
            <div className="h-10 rounded-lg bg-white/[0.08]" />
          </div>
        </div>
      </div>

      <div className="noise-overlay" />
    </div>
  );
}
