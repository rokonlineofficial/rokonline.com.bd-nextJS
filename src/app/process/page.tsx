import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Process | How Rok Online Delivers Growth",
  description:
    "See the five-stage Rok Online process: discovery, design, development, launch and growth optimization.",
  path: "/process",
  ogTitle: "The Rok Online Process",
  ogDescription: "A proven five-stage growth system.",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="How We Turn Ideas Into Results"
        subtitle="Discovery, design, development, launch and optimization — a repeatable system built for measurable growth."
      />
      <Process />
      <CTA />
    </>
  );
}
