import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";

import { SmoothScroll } from "@/components/anim/SmoothScroll";
import { Cursor } from "@/components/anim/Cursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rok Online | Digital Growth Agency Rangpur, Bangladesh",
  description:
    "Rok Online builds high-performing websites and runs SEO, Google Ads and Meta Ads campaigns that turn clicks into loyal customers.",
  applicationName: "Rok Online",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "Rok Online",
    title: "Rok Online | Digital Growth Agency Rangpur, Bangladesh",
    description:
      "Data-driven websites and digital marketing designed to increase traffic, leads and revenue.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  );
}
