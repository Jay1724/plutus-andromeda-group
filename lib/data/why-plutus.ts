import type { LucideIcon } from "lucide-react";
import { Compass, TrendingUp, ShieldCheck, HeartHandshake } from "lucide-react";

export type WhyFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyFeatures: WhyFeature[] = [
  {
    title: "Strategy Before Pixels",
    description:
      "We don't open a design file until we understand the business problem. Every engagement starts with discovery, not deliverables.",
    icon: Compass,
  },
  {
    title: "Built to Scale",
    description:
      "Architecture and design systems that hold up as your organisation grows — not fragile builds that need rebuilding in eighteen months.",
    icon: TrendingUp,
  },
  {
    title: "Enterprise Ready",
    description:
      "Security, accessibility and governance built in from day one — proven across banking, healthcare and public sector engagements.",
    icon: ShieldCheck,
  },
  {
    title: "Human-Centred Design",
    description:
      "Every decision is tested against real users, not internal assumptions. We design for the people who'll actually use it.",
    icon: HeartHandshake,
  },
];
