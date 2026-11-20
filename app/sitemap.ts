import type { MetadataRoute } from "next";
import { services, works, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/usluge`, lastModified: now, priority: 0.8 },
    ...services.map((s) => ({ url: `${SITE_URL}/usluge/${s.slug}`, lastModified: now, priority: 0.9 })),
    { url: `${SITE_URL}/radovi`, lastModified: now, priority: 0.7 },
    ...works.map((w) => ({ url: `${SITE_URL}/radovi/${w.slug}`, lastModified: now, priority: 0.6 })),
  ];
}
