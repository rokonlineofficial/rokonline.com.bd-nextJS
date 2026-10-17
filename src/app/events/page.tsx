import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { Stagger } from "@/components/anim/Reveal";
import { EventMedia } from "@/components/events/EventMedia";
import { events, type EventItem } from "@/lib/events-data";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { todayISO, dateParts } from "@/lib/event-utils";

export const metadata: Metadata = pageMetadata({
  title: "Events | Rok Online",
  description: "Upcoming and past workshops, meetups and events hosted by Rok Online.",
  path: "/events",
});

// প্রতি ঘণ্টায় পেজ নতুন করে তৈরি হবে, যাতে পার হওয়া ইভেন্ট Past-এ সরে যায়
export const revalidate = 3600;



function DateBlob({
  date,
  time,
  past,
  className = "",
}: {
  date: string;
  time?: string | undefined;
  past: boolean;
  className?: string;
}) {
  const { dayMonth, year } = dateParts(date);
  const tone = past
    ? "bg-gradient-to-br from-white/15 to-white/5 text-foreground ring-1 ring-white/20 backdrop-blur"
    : "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)]";

  return (
    <div
      className={`grid size-36 shrink-0 place-content-center rounded-[58%_42%_55%_45%/48%_56%_44%_52%] text-center md:size-40 ${tone} ${className}`}
    >
      {time && <span className="text-sm font-medium">{time}</span>}
      <span className="font-display text-2xl font-extrabold leading-tight">
        {dayMonth},
      </span>
      <span className="font-display text-2xl font-extrabold leading-tight">
        {year}
      </span>
    </div>
  );
}

function EventCard({
  event,
  index,
  past,
}: {
  event: EventItem;
  index: number;
  past: boolean;
}) {
  const even = index % 2 === 0;

  return (
    <article className="relative">
      <DateBlob
        date={event.date}
        time={event.time}
        past={past}
        className={`relative z-10 -mb-10 ml-4 md:absolute md:top-1/2 md:mb-0 md:ml-0 md:-translate-y-1/2 ${
          even ? "md:-left-6" : "md:-right-6"
        }`}
      />

      <div
        className={`glass rounded-3xl p-6 pt-14 md:flex md:min-h-[11rem] md:items-center md:gap-8 md:py-8 ${
          even
            ? "md:flex-row md:pl-36 md:pr-8"
            : "md:flex-row-reverse md:pl-8 md:pr-36"
        }`}
      >
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl font-bold md:text-2xl">
            <Link
              href={`/events/${event.slug}`}
              className="transition-colors hover:text-accent"
            >
              {event.title}
            </Link>
          </h3>
          {event.location && (
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {event.location}
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {event.description}
          </p>
        </div>

        {event.media && (
          <div className="mt-5 md:mt-0 md:w-64 md:shrink-0 lg:w-72">
            <EventMedia
              media={event.media}
              title={event.title}
              href={`/events/${event.slug}`}
            />
          </div>
        )}
      </div>
    </article>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="glass rounded-3xl p-10 text-center text-muted-foreground">
      {text}
    </div>
  );
}

export default function EventsPage() {
  const today = todayISO();

  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  const past = events
    .filter((e) => e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Workshops, Meetups & Events"
        subtitle="Join us to learn, connect and grow with the Rok Online community."
      />

      {/* Upcoming Events */}
      <section className="section-pad pt-10 lg:pt-16">
        <div className="mx-auto max-w-5xl px-8 md:px-12">
          <h2 className="text-center font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold uppercase leading-none">
            Upcoming Events
          </h2>

          <div className="mt-14">
            {upcoming.length === 0 ? (
              <EmptyState text="No upcoming events right now. Check back soon!" />
            ) : (
              <Stagger className="space-y-12">
                {upcoming.map((e, i) => (
                  <EventCard
                    key={`${e.title}-${e.date}`}
                    event={e}
                    index={i}
                    past={false}
                  />
                ))}
              </Stagger>
            )}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-5xl px-8 md:px-12">
          <h2 className="text-center font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold uppercase leading-none">
            Past Events
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            A look back at the moments we shared.
          </p>

          <div className="mt-14">
            {past.length === 0 ? (
              <EmptyState text="No past events yet." />
            ) : (
              <Stagger className="space-y-12">
                {past.map((e, i) => (
                  <EventCard
                    key={`${e.title}-${e.date}`}
                    event={e}
                    index={i}
                    past
                  />
                ))}
              </Stagger>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}