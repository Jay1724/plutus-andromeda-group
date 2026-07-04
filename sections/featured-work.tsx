import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/work/project-card";
import { projects } from "@/lib/data/work";

export function FeaturedWork() {
  const featured = projects.slice(0, 4);

  return (
    <section id="work" className="bg-surface-muted py-28 md:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="Featured Work"
              title="Platforms shipped. Outcomes measured."
              description="A selection of the enterprise and mid-market platforms we've designed and built across South Africa's most regulated industries."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/work">
                View all work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
