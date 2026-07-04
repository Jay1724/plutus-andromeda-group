import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/cta/cta-banner";
import { insights } from "@/lib/data/insights";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
      publishedTime: insight.date,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) notFound();

  return (
    <>
      <article className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href="/insights"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              All insights
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <Badge>{insight.category}</Badge>
              <span className="text-sm text-muted">{insight.readTime}</span>
              <span className="text-sm text-muted">
                {formatDate(insight.date)}
              </span>
            </div>

            <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
              {insight.title}
            </h1>

            <p className="mt-6 text-balance text-xl leading-relaxed text-muted">
              {insight.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col gap-6 border-t border-border pt-12 text-lg leading-relaxed text-foreground/85">
              {insight.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </article>

      <CtaBanner />
    </>
  );
}
