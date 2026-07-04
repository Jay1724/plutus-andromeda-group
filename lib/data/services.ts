import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Layers,
  Globe,
  ShoppingCart,
  Building2,
} from "lucide-react";

export type Service = {
  slug: string;
  category: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "digital-design",
    category: "Digital Design",
    icon: Palette,
    summary: "Brand identity and visual systems built for the enterprise.",
    description:
      "We build the visual and verbal foundations organisations use to show up consistently across every product, platform and touchpoint — from executive decks to production interfaces.",
    capabilities: [
      "Brand Identity",
      "Graphic Design",
      "Visual Language Systems",
      "Naming & Verbal Identity",
    ],
  },
  {
    slug: "product-design",
    category: "Product Design",
    icon: Layers,
    summary: "Interfaces and design systems that scale with your product.",
    description:
      "We design the products your customers and employees use every day, and the systems that let your teams keep shipping quality long after we're gone.",
    capabilities: [
      "UI Design",
      "UX Design",
      "Product Strategy",
      "Design Systems",
    ],
  },
  {
    slug: "web-experiences",
    category: "Web Experiences",
    icon: Globe,
    summary: "Corporate sites and marketing experiences that convert.",
    description:
      "We design and engineer websites that carry enterprise weight without the enterprise lag — fast, accessible and built to represent your business at its best.",
    capabilities: [
      "Corporate Websites",
      "Marketing Websites",
      "Landing Pages",
      "CMS Development",
    ],
  },
  {
    slug: "commerce",
    category: "Commerce",
    icon: ShoppingCart,
    summary: "E-commerce platforms engineered for scale and conversion.",
    description:
      "From catalogue architecture to checkout performance, we build commerce platforms that hold up under real trading volumes and real customer expectations.",
    capabilities: [
      "E-commerce Platforms",
      "Checkout & Payments UX",
      "Catalogue & Merchandising",
      "Performance Engineering",
    ],
  },
  {
    slug: "enterprise-platforms",
    category: "Enterprise Platforms",
    icon: Building2,
    summary: "Internal systems that make complex organisations run smoother.",
    description:
      "We design and build the intranets, portals and internal tools that large organisations depend on — secure, scalable, and built around how your people actually work.",
    capabilities: [
      "Intranets",
      "Employee Portals",
      "Client Portals",
      "Digital Consulting",
    ],
  },
];
