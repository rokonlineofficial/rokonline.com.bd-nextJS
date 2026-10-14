import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTA } from "@/components/sections/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Client Testimonials & Reviews | Rok Online",
  description:
    "Read what clients say about working with Rok Online on web development, SEO and paid advertising projects.",
  path: "/testimonials",
  ogTitle: "Rok Online Client Testimonials",
  ogDescription: "145+ five-star reviews from happy clients.",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Clients Who Trust Rok Online"
        subtitle="145+ five-star reviews from business owners and marketing leaders across the US and beyond."
      />
      <Testimonials />
      <TrustBar />
      <CTA />
    </>
  );
}
