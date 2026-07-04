import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/lib/site-config";

const footerColumns = [
  {
    title: "Explore",
    links: navigation,
  },
  {
    title: "Services",
    links: [
      { label: "Digital Design", href: "/services#digital-design" },
      { label: "Product Design", href: "/services#product-design" },
      { label: "Web Experiences", href: "/services#web-experiences" },
      { label: "Commerce", href: "/services#commerce" },
      { label: "Enterprise Platforms", href: "/services#enterprise-platforms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-sm text-balance text-lg leading-relaxed text-muted">
              We design digital experiences that businesses grow on.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Plutus Andromeda Group on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email Plutus Andromeda Group"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {column.title}
              </span>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Contact
            </span>
            <div className="flex flex-col gap-3 text-sm text-foreground/80">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                {siteConfig.email}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-accent"
              >
                {siteConfig.phone}
              </a>
              <span className="text-muted">{siteConfig.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
          <span>Designed &amp; built in Johannesburg, South Africa.</span>
        </div>
      </Container>
    </footer>
  );
}
