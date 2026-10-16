import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger } from "@/components/anim/Reveal";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return pageMetadata({
    title: s ? `${s.title} Services | Rok Online` : "Service | Rok Online",
    description: s?.short ?? "Digital growth services by Rok Online.",
    path: `/services/${slug}`,
    type: "article",
  });
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={service.category} title={service.title} subtitle={service.short} />
      <section className="section-pad pt-10 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="glass rounded-3xl p-8 sm:p-10">
            <h2 className="font-display text-2xl font-extrabold">What&apos;s included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </Reveal>

          <Stagger className="space-y-4">
            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold">Explore other services</h3>
              <div className="mt-4 space-y-2">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {o.title}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold">Start this service</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get a free audit and a clear plan tailored to your goals.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-primary-foreground"
              >
                Book a consultation <ArrowRight className="size-4" />
              </Link>
            </div>
          </Stagger>
        </div>
      </section>
      <CTA />
    </>
  );
}
