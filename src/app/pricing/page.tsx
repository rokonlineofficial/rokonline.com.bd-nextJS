import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { Stagger } from "@/components/anim/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pricing | Rok Online",
  description: "Transparent pricing for web development and digital marketing services.",
  path: "/pricing",
});

// প্ল্যান, দাম আর ফিচার নিজের মতো বদলান
const plans = [
  {
    name: "Starter",
    price: "$000",
    note: "per project",
    features: ["Feature one", "Feature two", "Feature three"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$000",
    note: "per project",
    features: ["Everything in Starter", "Feature four", "Feature five"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    note: "tailored to you",
    features: ["Everything in Growth", "Feature six", "Priority support"],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose a plan that fits your goals, or talk to us for a custom quote."
      />
      <section className="section-pad pt-10 lg:pt-16">
        <div className="mx-auto max-w-6xl px-5">
          <Stagger className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`glass rounded-3xl p-8 ${
                  p.featured ? "border-2 border-primary shadow-[var(--shadow-glow)]" : ""
                }`}
              >
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-4 font-display text-4xl font-extrabold">{p.price}</p>
                <p className="text-sm text-muted-foreground">{p.note}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-primary-foreground"
                >
                  Get Started
                </Link>
              </article>
            ))}
          </Stagger>
        </div>
      </section>
      <CTA />
    </>
  );
}