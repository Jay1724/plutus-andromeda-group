export type Project = {
  slug: string;
  name: string;
  industry: string;
  url?: string;
  year?: string;
  services: string[];
  challenge: string;
  solution: string;
  outcome: string;
  metric?: { value: string; label: string };
  palette: [string, string];
};

export const projects: Project[] = [
  {
    slug: "siyanda-resources",
    name: "Siyanda Resources",
    industry: "Mining",
    url: "https://www.siyandaresources.com/",
    services: ["Corporate Websites", "UI Design", "UX Design"],
    challenge:
      "Siyanda Resources' digital presence hadn't kept pace with its growth into a multi-commodity mining investment group spanning platinum group metals, chrome, coal and base metals.",
    solution:
      "We designed and built a new corporate website that presents the group's portfolio, leadership and investment focus clearly to partners, investors and regulators.",
    outcome:
      "A new, relevant site that reflects the scale and credibility of the business today.",
    palette: ["#0a1a33", "#1f6fd6"],
  },
  {
    slug: "siyanda-platinum",
    name: "Siyanda Bakgatla Platinum Mine",
    industry: "Mining",
    url: "https://www.siyandaplatinum.com/",
    services: ["Corporate Websites", "UI Design", "UX Design"],
    challenge:
      "Siyanda Bakgatla Platinum Mine needed a digital home that reflected its scale as an operating PGM producer, not just its origins as an acquisition from Anglo American Platinum.",
    solution:
      "We designed and built a new site focused on the mine's operations, safety and sustainability commitments, and its role within the Siyanda Resources group.",
    outcome:
      "A dedicated, modern digital presence for one of South Africa's fastest-growing black-owned PGM operations.",
    palette: ["#10163a", "#3654e6"],
  },
];
