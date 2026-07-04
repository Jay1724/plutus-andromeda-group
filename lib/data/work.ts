export type Project = {
  slug: string;
  name: string;
  industry: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  outcome: string;
  metric: { value: string; label: string };
  palette: [string, string];
};

export const projects: Project[] = [
  {
    slug: "argent-capital",
    name: "Argent Capital Bank",
    industry: "Banking",
    year: "2025",
    services: ["Product Design", "Design Systems", "Client Portals"],
    challenge:
      "Argent Capital's business banking clients were managing multi-entity accounts through three disconnected legacy portals, driving support volume and churn risk.",
    solution:
      "We consolidated the experience into a single design system and unified client portal, restructured around how treasury teams actually make decisions.",
    outcome:
      "A unified platform that cut average task completion time and gave Argent a design system their internal teams still ship on today.",
    metric: { value: "42%", label: "faster task completion" },
    palette: ["#0a1a33", "#1f6fd6"],
  },
  {
    slug: "karoo-minerals",
    name: "Karoo Minerals",
    industry: "Mining",
    year: "2024",
    services: ["Enterprise Platforms", "UX Design", "Intranets"],
    challenge:
      "Karoo Minerals ran safety and operations reporting across spreadsheets and email, creating dangerous blind spots across remote sites.",
    solution:
      "We designed and built a unified operations intranet with real-time site reporting, structured around field-tested information hierarchy for control-room use.",
    outcome:
      "Site incident reporting moved from days to minutes, giving safety officers a live view across every operation.",
    metric: { value: "9x", label: "faster incident reporting" },
    palette: ["#0d1b26", "#2b7a8c"],
  },
  {
    slug: "meridian-health",
    name: "Meridian Health Network",
    industry: "Healthcare",
    year: "2024",
    services: ["UI Design", "UX Design", "Client Portals"],
    challenge:
      "Meridian's patient portal had a 61% drop-off rate at appointment booking, driven by a confusing multi-step legacy flow.",
    solution:
      "We redesigned the booking journey around a single guided flow, rebuilt the visual language for clarity, and rebuilt the front end for performance.",
    outcome:
      "A calmer, faster booking experience that patients and administrators both trust — and use.",
    metric: { value: "-58%", label: "booking drop-off" },
    palette: ["#08202b", "#1f9bc9"],
  },
  {
    slug: "solari-telecom",
    name: "Solari Telecom",
    industry: "Telecommunications",
    year: "2023",
    services: ["Marketing Websites", "Brand Identity", "CMS Development"],
    challenge:
      "Solari's national rebrand needed a new digital home capable of handling launch-day traffic without compromising on design ambition.",
    solution:
      "We built a new brand system and a headless marketing site engineered for scale, giving Solari's team full editorial control post-launch.",
    outcome:
      "Zero downtime through a nationwide launch campaign, with page load times among the fastest in the sector.",
    metric: { value: "1.2s", label: "median load time" },
    palette: ["#10163a", "#3654e6"],
  },
  {
    slug: "founders-exchange",
    name: "Founders Exchange",
    industry: "Professional Services",
    year: "2023",
    services: ["Product Strategy", "UI Design", "E-commerce Platforms"],
    challenge:
      "A fast-growing advisory marketplace needed to move from manual matching to a self-service platform without losing its premium feel.",
    solution:
      "We designed a two-sided platform experience with a restrained, editorial visual language that matched the calibre of the advisors on it.",
    outcome:
      "Founders Exchange scaled from 40 to over 600 advisory engagements a year on the platform we designed.",
    metric: { value: "15x", label: "engagement growth" },
    palette: ["#0c1830", "#2f8fe0"],
  },
  {
    slug: "civica-gov",
    name: "Civica Public Services",
    industry: "Government",
    year: "2022",
    services: ["Corporate Websites", "UX Design", "Digital Consulting"],
    challenge:
      "A public services department needed a citizen-facing platform that met strict accessibility requirements without feeling institutional.",
    solution:
      "We designed a WCAG AA-compliant platform from the ground up, tested with real citizens across devices, literacy levels and connection speeds.",
    outcome:
      "A public platform that set a new accessibility benchmark internally, now used as the department's reference implementation.",
    metric: { value: "100%", label: "WCAG AA conformance" },
    palette: ["#0a1620", "#1f6f85"],
  },
];
