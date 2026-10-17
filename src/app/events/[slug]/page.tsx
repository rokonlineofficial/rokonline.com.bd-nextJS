import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { EventMedia } from "@/components/events/EventMedia";
import { events } from "@/lib/events-data";
import { todayISO, dateParts } from "@/lib/event-utils";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = events.find((x) => x.slug === slug);
  return pageMetadata({
    title: e ? `${e.title} | Rok Online Events` : "Event | Rok Online",
    description: e?.description ?? "Events hosted by Rok Online.",
    path: `/events/${slug}`,
    type: "article",
  });
}

export default async function EventDetail({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const isPast = event.date < todayISO();
  const { dayMonth, year } = dateParts(event.date);
  const items = [...(event.media ? [event.media] : []), ...(event.gallery ?? [])];

  const subtitle = `${dayMonth}, ${year}${event.time ? ` · ${event.time}` : ""}${
    event.location ? ` · ${event.location}` : ""
  }`;

  return (
    <>
      <PageHero
        eyebrow={isPast ? "Past Event" : "Upcoming Event"}
        title={event.title}
        subtitle={subtitle}
      />

      <section className="section-pad pt-10 lg:pt-16">
        <div className="mx-auto max-w-5xl px-5">
          <Link
            href="/events"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> Back to events
          </Link>

          <div className="glass rounded-3xl p-7 md:p-10">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CalendarDays className="size-4 text-accent" />
                {dayMonth}, {year}
              </span>
              {event.time && (
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-accent" />
                  {event.time}
                </span>
              )}
              {event.location && (
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-accent" />
                  {event.location}
                </span>
              )}
            </div>

            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>{event.description}</p>
              {event.details?.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          {items.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-2xl font-extrabold">
                Photos &amp; Videos
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((m) => (
                  <EventMedia
                    key={m.src}
                    media={m}
                    title={event.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}