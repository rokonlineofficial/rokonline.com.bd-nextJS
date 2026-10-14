import type { Metadata } from "next";

export const SITE_URL = (process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://www.rokonline.com.bd").replace(
  /\/$/,
  "",
);

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  type = "website",
}: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      type,
      url: path,
      siteName: "Rok Online",
    },
    twitter: { card: "summary_large_image" },
  };
}
