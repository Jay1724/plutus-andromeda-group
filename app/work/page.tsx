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
    "Enterprise and mid-market platforms designed and built by Plutus Andromeda Group across banking, mining, healthcare, telecommunications and government.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Platforms shipped across South Africa's most regulated industries."
        description="A selection of engagements spanning banking, mining, healthcare, telecommunications, professional services and government."
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
