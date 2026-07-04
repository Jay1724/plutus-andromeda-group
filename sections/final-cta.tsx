import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { AuroraField } from "@/components/motion/aurora-field";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <AuroraField className="absolute inset-0 opacity-60" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="flex flex-col gap-6">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  <span className="h-px w-6 bg-accent" aria-hidden />
                  Get in touch
                </span>
                <h2 className="text-balance font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
                  Let&apos;s build something{" "}
                  <span className="font-semibold text-accent">
                    remarkable.
                  </span>
                </h2>
                <p className="max-w-md text-balance text-lg leading-relaxed text-muted">
                  Tell us about your business, your users and what you&apos;re
                  trying to achieve. We&apos;ll respond within one business day
                  with next steps.
                </p>
              </div>

              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <dt className="text-muted">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-muted">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-muted">Studio</dt>
                  <dd className="font-medium text-foreground">
                    {siteConfig.location}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-surface/80 p-8 backdrop-blur md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
