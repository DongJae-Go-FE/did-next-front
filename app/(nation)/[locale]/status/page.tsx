import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  SubLayout,
  SubContentContainer,
  SubContentTitle,
} from "@/components/ui/common";

import LeftMenu from "@/components/ui/left-menu";
import SliderBackdrop from "@/components/ui/slider-backdrop";
import ChartPage from "@/components/page/chart-page";
import { getDioceseChartData } from "@/lib/notion-status";
import { content, locales, type Locale } from "../../_lib/content";

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
  const t = content[locale].statusPage;
  const base = content[locale].metadata;

  return {
    title: `${t.heroTitle} | ${base.title}`,
    description: base.description,
    keywords: base.keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/status`,
      languages: {
        "ko-KR": `${SITE_URL}/kr/status`,
        "en-US": `${SITE_URL}/en/status`,
        "x-default": `${SITE_URL}/kr/status`,
      },
    },
    openGraph: {
      title: `${t.heroTitle} | ${base.title}`,
      description: base.description,
      url: `${SITE_URL}/${locale}/status`,
      siteName: base.title,
      locale: base.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.heroTitle} | ${base.title}`,
      description: base.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeStr } = await params;

  if (!locales.includes(localeStr as Locale)) {
    notFound();
  }

  const locale = localeStr as Locale;
  const t = content[locale].statusPage;
  const chartData = await getDioceseChartData();

  return (
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
          <ChartPage data={chartData} locale={locale} />
        </SubContentContainer>
      </SubLayout>
    </div>
  );
}
