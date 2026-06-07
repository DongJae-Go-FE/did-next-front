import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import SmoothScrolling from "@/components/smooth-scroll";
import LangSync from "@/components/lang-sync";

import { content, locales, type Locale } from "../_lib/content";
import {
  EVENT_NAME_BY_LOCALE,
  OG_IMAGES,
  SEARCH_ALIASES_BY_LOCALE,
  SITE_ALIASES_BY_LOCALE,
  SITE_URL,
  getAlternateOpenGraphLocale,
  getCanonicalUrl,
  getLanguageAlternates,
  getLocaleLanguage,
  getMetaDescription,
  getOpenGraphLocale,
  getPageTitle,
  getSiteName,
} from "@/lib/seo";

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
  const pageTitle = getPageTitle(locale);
  const siteName = getSiteName(locale);
  const description = getMetaDescription(t.description);

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    keywords: Array.from(SEARCH_ALIASES_BY_LOCALE[locale]),
    applicationName: siteName,
    creator: siteName,
    publisher: siteName,
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
      canonical: getCanonicalUrl(locale),
      languages: getLanguageAlternates(),
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      siteName,
      url: getCanonicalUrl(locale),
      locale: getOpenGraphLocale(locale),
      alternateLocale: getAlternateOpenGraphLocale(locale),
      type: "website",
      images: OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: OG_IMAGES,
    },
    other: {
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

  const t = content[locale].metadata;
  const siteName = getSiteName(locale);
  const localeLanguage = getLocaleLanguage(locale);
  const description = getMetaDescription(t.description);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteName,
      alternateName: SITE_ALIASES_BY_LOCALE[locale],
      inLanguage: localeLanguage,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: siteName,
      alternateName: SITE_ALIASES_BY_LOCALE[locale],
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      image: `${SITE_URL}/opengraph-image`,
      sameAs: ["https://wydseoul.org/", "https://www.cbck.or.kr"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "@id": `${SITE_URL}/${locale}#event`,
      name: EVENT_NAME_BY_LOCALE[locale],
      alternateName: SEARCH_ALIASES_BY_LOCALE[locale],
      description,
      url: getCanonicalUrl(locale),
      mainEntityOfPage: getCanonicalUrl(locale),
      image: `${SITE_URL}/opengraph-image`,
      startDate: "2027-07-29",
      endDate: "2027-08-02",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Seoul, South Korea",
        address: {
          "@type": "PostalAddress",
          addressCountry: "KR",
          addressRegion: "Seoul",
        },
      },
      organizer: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: siteName,
        url: SITE_URL,
        sameAs: ["https://wydseoul.org/", "https://www.cbck.or.kr"],
      },
      offers: {
        "@type": "Offer",
        name: locale === "kr" ? "DID 신청" : "DID Application",
        url: `${SITE_URL}/${locale}/apply`,
        validFrom: "2026-06-01T00:00:00+09:00",
      },
      inLanguage: localeLanguage,
    },
  ];

  return (
    <>
      <LangSync lang={content[locale].lang} />
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} />
      <SmoothScrolling>{children}</SmoothScrolling>
      <Footer locale={locale} />
    </>
  );
}
