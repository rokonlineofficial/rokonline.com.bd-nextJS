import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Rok Online | Free Digital Growth Consultation",
  description:
    "Talk to Rok Online in Rangpur, Bangladesh about web development, SEO and paid ads. Call +8801326-131609 or book a free consultation.",
  path: "/contact",
  ogTitle: "Contact Rok Online",
  ogDescription: "Book a free digital growth consultation with the Rok Online team.",
});

export default function Page() {
  return <ContactPage />;
}
