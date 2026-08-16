import type { MetadataRoute } from "next";
import { researchItems } from "@/data/research";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = [
    "",
    "/about/",
    "/research/",
    ...researchItems.map((item) => `/research/${item.slug}/`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
