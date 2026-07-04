import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { CtaBanner } from "@/components/cta/cta-banner";
import { ProjectCard } from "@/components/work/project-card";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/lib/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Corporate and investor-facing websites designed and built by Plutus Andromeda Group, including Siyanda Resources and Siyanda Bakgatla Platinum Mine.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="New, relevant sites for South Africa's mining sector."
        description="A selection of the corporate and investor-facing websites we've designed and built."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Have a platform in mind?"
        description="We'd love to hear about it. Tell us what you're building and we'll get back to you within one business day."
      />
    </>
  );
}
