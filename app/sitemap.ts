import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { insights } from "@/lib/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/industries",
    "/insights",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const insightRoutes = insights.map((insight) => ({
    url: `${siteConfig.url}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...insightRoutes];
}
