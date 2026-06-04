import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  SubLayout,
  SubContentContainer,
  SubContentTitle,
} from "@/components/ui/common";

import LeftMenu from "@/components/ui/left-menu";
import SliderBackdrop from "@/components/ui/slider-backdrop";
import NotionRenderer from "@/components/notion-renderer";
import JsonLd from "@/components/json-ld";
import { getNoticeDetail } from "@/lib/notion-notice";
import { content, locales, type Locale } from "../../../_lib/content";
import {
  createArticleJsonLd,
  createBreadcrumbJsonLd,
} from "@/lib/structured-data";
import {
  SITE_URL,
  getCanonicalUrl,
  getLanguageAlternates,
  getMetaDescription,
  getPageTitle,
  getSiteName,
} from "@/lib/seo";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale: localeStr, id } = await params;
  if (!locales.includes(localeStr as Locale)) return {};
  const locale = localeStr as Locale;
  const base = content[locale].metadata;
  const noticePage = content[locale].noticePage;
  const detail = await getNoticeDetail(id);
  const title = detail?.title ?? noticePage.heroTitle;
  const description = getMetaDescription(noticePage.detailDescription(title));
  const pageTitle = getPageTitle(locale, title);
  const siteName = getSiteName(locale);
  const noticePath = `/notice/${id}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    alternates: {
      canonical: getCanonicalUrl(locale, noticePath),
      languages: getLanguageAlternates(noticePath),
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url: getCanonicalUrl(locale, noticePath),
      siteName,
      locale: base.ogLocale,
      type: "article",
    },
  };
}

function formatDate(dateStr: string, locale: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (locale === "kr") {
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  }
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: localeStr, id } = await params;

  if (!locales.includes(localeStr as Locale)) {
    notFound();
  }

  const locale = localeStr as Locale;
  const t = content[locale].noticePage;
  const detail = await getNoticeDetail(id);

  if (!detail) {
    notFound();
  }

  const noticeUrl = `${SITE_URL}/${locale}/notice/${id}`;
  const description = getMetaDescription(t.detailDescription(detail.title));
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: locale === "kr" ? "홈" : "Home", url: `${SITE_URL}/${locale}` },
    { name: t.heroTitle, url: `${SITE_URL}/${locale}/notice` },
    { name: detail.title, url: noticeUrl },
  ]);
  const articleJsonLd = createArticleJsonLd({
    author: detail.author,
    date: detail.date,
    description,
    locale,
    title: detail.title,
    url: noticeUrl,
  });

  return (
    <>
      <JsonLd id="breadcrumb-json-ld" data={breadcrumbJsonLd} />
      <JsonLd id="article-json-ld" data={articleJsonLd} />
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

          {/* Notice header */}
          <div className="border-t-2 border-t-gray-800 border-b border-b-gray-200 px-4 py-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {detail.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              {detail.author && <span>{detail.author}</span>}
              <span>{formatDate(detail.date, locale)}</span>
            </div>
          </div>

          {/* Notice content */}
          <div className="px-4 py-8">
            <NotionRenderer blocks={detail.blocks} />
          </div>

          {/* Back to list */}
          <div className="flex justify-end mt-4 mb-8 border-t border-t-gray-200 pt-4">
            <Link
              href={`/${locale}/notice`}
              className="px-6 py-2.5 bg-[#0047BB] hover:bg-[#003a9e] text-white rounded-md text-sm font-medium transition-colors"
            >
              {t.backToList}
            </Link>
          </div>
        </SubContentContainer>
      </SubLayout>
      </div>
    </>
  );
}
