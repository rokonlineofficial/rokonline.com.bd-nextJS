import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { TechStack } from "@/components/sections/TechStack";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Rok Online | Web Development & Digital Marketing Agency",
  description:
    "Rok Online builds high-performing websites and runs SEO, Google Ads and Meta Ads campaigns that turn clicks into loyal customers. 150+ projects delivered.",
  path: "/",
  ogTitle: "Rok Online | Digital Growth Agency Rangpur, Bangladesh",
  ogDescription:
    "Data-driven websites and digital marketing designed to increase traffic, leads and revenue.",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Rok Online Inc.",
          description:
            "Digital marketing agency and web development company helping businesses grow online.",
          telephone: "+8801326131609",
          email: "email@rokonline.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Maddho Pirzabad",
            addressLocality: "Rangpur",
            addressRegion: "Bangladesh",
            postalCode: "5400",
            addressCountry: "BD",
          },
          founder: { "@type": "Person", name: "Rokon Uz Zaman" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "145" },
        }}
      />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Team limit={4} />
      <TechStack />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
