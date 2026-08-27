import type { MetadataRoute } from "next";
import { researchItems } from "@/data/research";
import { systemItems } from "@/data/systems";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = [
    "",
    "/about/",
    "/research/",
    "/systems/",
    "/methods/",
    ...researchItems.map((item) => `/research/${item.slug}/`),
    ...systemItems.map((item) => `/systems/${item.slug}/`),
    "/systems/scenario-stress-lab/guide/",
  ];

  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
