import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Plutus Andromeda Group. Tell us about your business and what you're trying to achieve.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building."
        description="Whether you have a fully-scoped brief or an early idea, tell us about it — we'll respond within one business day with next steps."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <span className="text-xs uppercase tracking-wide text-muted">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-display text-2xl font-medium tracking-tight transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-xs uppercase tracking-wide text-muted">
                    Phone
                  </span>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-display text-2xl font-medium tracking-tight transition-colors hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-xs uppercase tracking-wide text-muted">
                    Studio
                  </span>
                  <span className="font-display text-2xl font-medium tracking-tight">
                    {siteConfig.location}
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-1 border-t border-border pt-8">
                  <Accordion type="single" collapsible>
                    {faqs.map((faq) => (
                      <AccordionItem key={faq.question} value={faq.question}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
