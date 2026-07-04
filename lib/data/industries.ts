import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  Pickaxe,
  Radio,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Building,
  Briefcase,
} from "lucide-react";

export type Industry = {
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "Banking",
    slug: "banking",
    icon: Landmark,
    description:
      "Digital banking experiences and internal platforms built to meet the compliance and security bar regulators expect.",
  },
  {
    name: "Mining",
    slug: "mining",
    icon: Pickaxe,
    description:
      "Operational portals and corporate platforms for South Africa's most demanding industrial environments.",
  },
  {
    name: "Telecommunications",
    slug: "telecommunications",
    icon: Radio,
    description:
      "Customer-facing platforms and self-service portals built to handle national-scale traffic.",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: HeartPulse,
    description:
      "Patient and provider-facing digital experiences designed around trust, privacy and clarity.",
  },
  {
    name: "Retail",
    slug: "retail",
    icon: ShoppingBag,
    description:
      "Commerce platforms and brand experiences that convert across every channel and device.",
  },
  {
    name: "Education",
    slug: "education",
    icon: GraduationCap,
    description:
      "Learning platforms and institutional websites built for accessibility at scale.",
  },
  {
    name: "Government",
    slug: "government",
    icon: Building,
    description:
      "Public sector platforms designed for accessibility, transparency and long-term maintainability.",
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    icon: Briefcase,
    description:
      "Corporate and client-facing platforms that reflect the calibre of the firms behind them.",
  },
];
