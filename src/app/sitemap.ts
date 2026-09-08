import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { researchItems } from "@/data/research";
import { systemItems } from "@/data/systems";

export const dynamic = "force-static";

const DEFAULT_SITE_URL = "https://research.slackquant.com";

function collectMethodArticleRoutes() {
  const methodsRoot = path.join(process.cwd(), "public", "methods");
  if (!fs.existsSync(methodsRoot)) return [] as string[];

  const routes: string[] = [];
  const visit = (directory: string) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        visit(fullPath);
      } else if (entry.isFile() && entry.name === "article.html") {
        const relative = path.relative(methodsRoot, fullPath).split(path.sep).join("/");
        routes.push(`/methods/${relative}`);
      }
    }
  };

  visit(methodsRoot);
  return routes.sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, "");
  const routes = [
    "",
    "/about/",
    "/research/",
    "/systems/",
    "/systems/pds/dashboard/",
    "/methods/",
    ...researchItems.map((item) => `/research/${item.slug}/`),
    ...systemItems.map((item) => `/systems/${item.slug}/`),
    "/systems/scenario-stress-lab/guide/",
    ...collectMethodArticleRoutes(),
  ];

  return [...new Set(routes)].map((route) => ({ url: `${siteUrl}${route}` }));
}
