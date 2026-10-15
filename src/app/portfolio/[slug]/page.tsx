import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { portfolio } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/*
 * Generate a static page for every portfolio project.
 */
export function generateStaticParams() {
  return portfolio
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug,
    }));
}

/*
 * Allow portfolio slugs to resolve dynamically as well.
 * This prevents a newly-added portfolio item from immediately
 * returning a 404 during development.
 */
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = portfolio.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return pageMetadata({
      title: "Portfolio | Rok Online",
      description:
        "Explore website design, development, SEO and digital marketing projects by Rok Online.",
      path: "/portfolio",
      type: "article",
    });
  }

  return pageMetadata({
    title: `${project.title} | Rok Online Portfolio`,
    description: project.description,
    path: `/portfolio/${project.slug}`,
    type: "article",
  });
}

export default async function PortfolioDetail({
  params,
}: Props) {
  const { slug } = await params;

  const project = portfolio.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <PageHero
        eyebrow={project.category}
        title={project.title}
        subtitle={project.result}
      />

      {/* =========================
          PROJECT CONTENT
      ========================== */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5">

          {/* Back to Portfolio */}
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>

          {/* =========================
              PROJECT IMAGE
          ========================== */}
          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            <Image
              src={project.image}
              alt={`${project.title} project showcase`}
              priority
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* =========================
              PROJECT DETAILS
          ========================== */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.7fr_1fr]">

            {/* LEFT */}
            <div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Project Overview
              </p>

              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                About this project
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                {project.description}
              </p>

              {/* Result */}
              <div className="mt-10 rounded-3xl border border-border bg-surface p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Project Result
                </p>

                <p className="mt-3 text-xl font-bold leading-relaxed">
                  {project.result}
                </p>
              </div>

            </div>

            {/* RIGHT */}
            <aside className="h-fit rounded-3xl border border-border bg-surface p-6 md:p-8">

              {/* Industry */}
              <div className="border-b border-border pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Industry
                </p>

                <p className="mt-2 font-semibold">
                  {project.industry}
                </p>
              </div>

              {/* Category */}
              <div className="border-b border-border py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Category
                </p>

                <p className="mt-2 font-semibold">
                  {project.category}
                </p>
              </div>

              {/* Services */}
              <div className="py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Services
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Website */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Visit Website
                  <ArrowUpRight className="size-4" />
                </a>
              )}

            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}