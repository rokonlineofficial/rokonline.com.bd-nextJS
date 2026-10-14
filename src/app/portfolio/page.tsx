import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Portfolio } from "@/components/sections/Portfolio";
import { CTA } from "@/components/sections/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio & Case Studies | Rok Online",
  description:
    "Explore Rok Online case studies in web development, SEO, Google Ads, Meta Ads and branding with real performance results.",
  path: "/portfolio",
  ogTitle: "Rok Online Portfolio & Case Studies",
  ogDescription: "Real projects, real growth numbers.",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Work Speaks For Results"
        subtitle="Case studies across web development, SEO, paid advertising and branding — with the outcomes that mattered to each client."
      />
      <Portfolio />
      <CTA />
    </>
  );
}
