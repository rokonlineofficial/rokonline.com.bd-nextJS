"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import type { EventMedia as MediaItem } from "@/lib/events-data";

type Props = {
  media: MediaItem;
  title: string;
  href?: string;
  sizes?: string;
};

const DEFAULT_SIZES = "(min-width: 768px) 288px, 100vw";

function PlayBadge() {
  return (
    <>
      <span className="absolute inset-0 bg-black/30" />
      <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-110">
        <Play className="size-6 translate-x-0.5 fill-current" />
      </span>
    </>
  );
}

export function EventMedia({ media, title, href, sizes = DEFAULT_SIZES }: Props) {
  const [playing, setPlaying] = useState(false);

  const frame =
    "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-black";
  const src = media.type === "image" ? media.src : media.thumbnail;
  const alt =
    media.alt ?? (media.type === "image" ? title : `${title} video thumbnail`);

  const cover = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {media.type === "video" && <PlayBadge />}
    </>
  );

  // কার্ডে: ক্লিক করলে ডিটেইল পেজে যাবে
  if (href) {
    return (
      <Link
        href={href}
        aria-label={`View details: ${title}`}
        className={`group block ${frame}`}
      >
        {cover}
      </Link>
    );
  }

  // ডিটেইল পেজে: ছবি
  if (media.type === "image") {
    return <div className={`group ${frame}`}>{cover}</div>;
  }

  // ডিটেইল পেজে: ভিডিও, ক্লিক করলে ওখানেই চলবে
  return (
    <div className={frame}>
      {playing ? (
        <video
          src={media.src}
          controls
          autoPlay
          playsInline
          className="size-full object-contain"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0"
        >
          {cover}
        </button>
      )}
    </div>
  );
}