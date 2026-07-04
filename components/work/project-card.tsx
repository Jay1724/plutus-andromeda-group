"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/work/project-cover";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data/work";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      className="group flex flex-col gap-6 rounded-3xl border border-border bg-surface p-4 transition-colors hover:border-border-strong md:p-5"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectCover project={project} />
        </motion.div>
        <motion.div
          variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.3 }}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur"
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>

      <div className="flex flex-col gap-4 px-2 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-medium tracking-tight">
            {project.name}
          </h3>
          <span className="text-sm text-muted">{project.year}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>{project.industry}</Badge>
          {project.services.slice(0, 2).map((s) => (
            <Badge key={s} className="border-transparent bg-surface-muted">
              {s}
            </Badge>
          ))}
        </div>

        <dl className="grid grid-cols-1 gap-4 border-t border-border pt-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="mb-1 text-xs uppercase tracking-wide text-muted">
              Challenge
            </dt>
            <dd className="leading-relaxed text-foreground/80">
              {project.challenge}
            </dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-wide text-muted">
              Solution
            </dt>
            <dd className="leading-relaxed text-foreground/80">
              {project.solution}
            </dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-wide text-muted">
              Outcome
            </dt>
            <dd className="leading-relaxed text-foreground/80">
              {project.outcome}
            </dd>
          </div>
        </dl>

        <div className="flex items-baseline gap-2 border-t border-border pt-4">
          <span className="font-display text-3xl font-medium text-accent">
            {project.metric.value}
          </span>
          <span className="text-sm text-muted">{project.metric.label}</span>
        </div>
      </div>
    </motion.article>
  );
}
