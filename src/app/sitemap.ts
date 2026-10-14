import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/team", "/process", "/portfolio", "/testimonials", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...services.map((s) => ({ url: `${SITE_URL}/services/${s.slug}` })),
  ];
}
