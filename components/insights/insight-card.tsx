import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/lib/data/insights";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-muted">
          <span>{insight.category}</span>
          <span>{insight.readTime}</span>
        </div>
        <h3 className="font-display text-2xl font-medium leading-snug tracking-tight">
          {insight.title}
        </h3>
        <p className="leading-relaxed text-muted">{insight.excerpt}</p>
      </div>
      <div className="flex items-center justify-between border-t border-border pt-5 text-sm">
        <span className="text-muted">{formatDate(insight.date)}</span>
        <span className="flex items-center gap-1.5 font-medium text-accent">
          Read
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
