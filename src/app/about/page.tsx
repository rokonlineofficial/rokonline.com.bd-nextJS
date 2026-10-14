import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Rok Online | Digital Growth Agency in Rangpur-BD",
  description:
    "Learn how Rok Online grew from a web studio in 2018 into a full digital growth agency with 150+ projects and 145+ Upwork reviews.",
  path: "/about",
  ogTitle: "About Rok Online",
  ogDescription: "Our story, mission, values and the milestones behind 150+ projects.",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rok Online Inc.",
          url: SITE_URL,
          founder: { "@type": "Person", name: "Rokon Uz Zaman" },
          foundingDate: "2018",
        }}
      />
      <PageHero
        eyebrow="About Us"
        title="Building Digital Experiences That Create Growth"
        subtitle="Founded in 2018 by Rokon Uz Zaman, Rok Online has grown into a full-service digital growth agency with 150+ completed projects."
      />
      <About />
      <TechStack />
      <Team limit={4} />
      <CTA />
    </>
  );
}
