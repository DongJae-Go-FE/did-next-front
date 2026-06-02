import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";

import {
  SubLayout,
  SubContentContainer,
  SubContentTitle,
} from "@/components/ui/common";

import LeftMenu from "@/components/ui/left-menu";
import SliderBackdrop from "@/components/ui/slider-backdrop";
import NoticeList from "@/components/notice-list";
import JsonLd from "@/components/json-ld";
import { getNoticeList } from "@/lib/notion-notice";
import { content, locales, type Locale } from "../../_lib/content";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";
const SITE_URL = "https://wyd2027did.org";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeStr } = await params;
  if (!locales.includes(localeStr as Locale)) return {};
  const locale = localeStr as Locale;
  const t = content[locale].noticePage;
  const base = content[locale].metadata;
  const description = t.metaDescription;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${t.heroTitle} | ${base.title}`,
    description,
    keywords: base.keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/notice`,
      languages: {
        "ko-KR": `${SITE_URL}/kr/notice`,
        "en-US": `${SITE_URL}/en/notice`,
        "x-default": `${SITE_URL}/kr/notice`,
      },
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
      },
    },
    openGraph: {
      title: `${t.heroTitle} | ${base.title}`,
      description,
      url: `${SITE_URL}/${locale}/notice`,
      siteName: base.title,
      locale: base.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.heroTitle} | ${base.title}`,
      description,
    },
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { locale: localeStr } = await params;

  if (!locales.includes(localeStr as Locale)) {
    notFound();
  }

  const locale = localeStr as Locale;
  const t = content[locale].noticePage;
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: locale === "kr" ? "홈" : "Home", url: `${SITE_URL}/${locale}` },
    { name: t.heroTitle, url: `${SITE_URL}/${locale}/notice` },
  ]);
  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);
  const result = await getNoticeList(page, locale);

  return (
    <>
      <JsonLd id="breadcrumb-json-ld" data={breadcrumbJsonLd} />
      <div className="pt-30">
      <div className="w-full h-75 relative overflow-hidden flex justify-center items-center">
        <Image
          src={`${IMAGE_BASE}/did/visual.png`}
          sizes="100vw"
          fill
          alt={t.heroAlt}
          priority
          className="object-cover object-center w-full h-full animate-pan-zoom-center-small"
        />
        <div className="flex flex-col gap-y-2 text-white z-40 relative justify-center animate-fadeIn2 opacity-0">
          <h2 className="heading02b">{t.heroTitle}</h2>
          <ul className="flex gap-x-1 justify-center body01b">
            {t.breadcrumb.map((crumb) => (
              <li key={crumb}>{crumb}</li>
            ))}
          </ul>
        </div>
        <SliderBackdrop />
      </div>
      <SubLayout className="relative">
        <LeftMenu title={t.leftMenuTitle} menus={t.leftMenuItems} />
        <SubContentContainer>
          <SubContentTitle>{t.pageTitle}</SubContentTitle>
          <Suspense
            fallback={
              <div className="py-20 text-center text-gray-400">Loading...</div>
            }
          >
            <NoticeList
              items={result.items}
              totalPages={result.totalPages}
              currentPage={result.currentPage}
              locale={locale}
              labels={{
                noItems: t.noItems,
                prevPage: t.prevPage,
                nextPage: t.nextPage,
                orderLabel: t.orderLabel,
                titleLabel: t.titleLabel,
                authorLabel: t.authorLabel,
                dateLabel: t.dateLabel,
              }}
            />
          </Suspense>
        </SubContentContainer>
      </SubLayout>
      </div>
    </>
  );
}
