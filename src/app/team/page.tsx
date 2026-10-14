import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Team | Rok Online Digital Agency Experts",
  description:
    "Meet the developers, designers, SEO specialists, ads experts and video editors behind Rok Online's client results.",
  path: "/team",
  ogTitle: "Meet The Rok Online Team",
  ogDescription: "Senior specialists in development, SEO, paid media and creative.",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet The Experts Behind Rok Online"
        subtitle="A senior in-house team of developers, designers, SEO specialists, paid ads experts, social media managers and video editors."
      />
      <Team />
      <CTA />
    </>
  );
}
