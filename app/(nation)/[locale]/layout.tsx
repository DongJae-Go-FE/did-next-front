import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../../globals.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import SmoothScrolling from "@/components/smooth-scroll";

import { content, locales, type Locale } from "../_lib/content";

const SITE_URL = "https://wyd2027did.org";
const OG_IMAGE = "/logo.svg";

const pretendard = localFont({
  src: [
    {
      path: "../../fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-pretendard",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const t = content[locale].metadata;

  return {
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    applicationName: "2027 WYD SEOUL DID",
    generator: "Next.js",
    creator: "clemens",
    publisher: "clemens",
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "event",
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        "ko": `${SITE_URL}/kr`,
        "en": `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/kr`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      siteName: "2027 WYD SEOUL DID",
      url: `${SITE_URL}/${locale}`,
      locale: t.ogLocale,
      alternateLocale: locale === "kr" ? "en_US" : "ko_KR",
      type: "website",
      images: [{ url: OG_IMAGE, alt: "2027 WYD SEOUL DID logo" }],
    },
    twitter: {
      card: "summary",
      title: t.title,
      description: t.description,
      images: [OG_IMAGE],
    },
    other: {
      "Content-Script-Type": "Text/javascript",
      Subject: t.description,
      "Other Agent": "clemens",
      Date: "2026-02-24T12:00:00+09:00",
      Build: "20260224",
      "Last-Modified": "Tue, 24 Feb 2026 12:00:00 GMT",
      Copyright: t.description,
      "geo.region": "KR-41",
      "geo.placename": "Seoul",
      "geo.position": "37.3884;126.8350",
      ICBM: "37.3884, 126.8350",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const lang = content[locale].lang;

  return (
    <html lang={lang} className="lenis lenis-smooth">
      <body className={pretendard.className}>
        <Header locale={locale} />
        <SmoothScrolling>{children}</SmoothScrolling>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
