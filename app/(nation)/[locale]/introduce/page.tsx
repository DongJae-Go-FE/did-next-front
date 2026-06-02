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
import IntroduceDioceseBanner from "@/components/introduce-diocese-banner";
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
  const t = content[locale].introducePage;
  const base = content[locale].metadata;
  const description = t.metaDescription;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${t.heroTitle} | ${base.title}`,
    description,
    keywords: base.keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/introduce`,
      languages: {
        "ko-KR": `${SITE_URL}/kr/introduce`,
        "en-US": `${SITE_URL}/en/introduce`,
        "x-default": `${SITE_URL}/kr/introduce`,
      },
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
      },
    },
    openGraph: {
      title: `${t.heroTitle} | ${base.title}`,
      description,
      url: `${SITE_URL}/${locale}/introduce`,
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
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeStr } = await params;

  if (!locales.includes(localeStr as Locale)) {
    notFound();
  }

  const locale = localeStr as Locale;
  const t = content[locale].introducePage;

  return (
    <div className="pt-30">
      <div className="w-full h-80 relative overflow-hidden flex justify-center items-center">
        <Image
          src={`${IMAGE_BASE}/did/visula2.jpeg`}
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

          <div className="w-full mt-8 overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="bg-[#0047BB] text-white text-center py-3 md:py-4 text-base md:text-lg font-bold rounded-t-lg">
                {t.scheduleTitle}
              </div>

              <div className="border border-[#0047BB] border-t-0 rounded-b-lg overflow-hidden">
                <div className="grid grid-cols-5 border-b border-gray-200">
                  {t.scheduleHeaders.map((header, index) => (
                    <div
                      key={index}
                      className="py-2 md:py-4 text-center text-xs md:text-base font-medium text-gray-800 border-r border-gray-200 last:border-r-0"
                    >
                      {header}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-5">
                  <div className="py-4 md:py-6 text-center text-xs md:text-base font-medium text-gray-700 border-r border-gray-200 flex items-center justify-center">
                    {t.scheduleWelcome}
                  </div>

                  <div className="col-span-3 py-4 md:py-6 text-center border-r border-gray-200 flex flex-col items-center justify-center px-2">
                    <span className="font-medium text-gray-800 text-xs md:text-base">
                      {t.scheduleProgram}
                    </span>
                    <span className="text-[10px] md:text-sm text-gray-500 mt-1">
                      {t.scheduleProgramSub}
                    </span>
                  </div>

                  <div className="py-4 md:py-6 text-center text-xs md:text-base font-medium text-gray-700 flex items-center justify-center">
                    {t.scheduleFarewell}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <IntroduceDioceseBanner locale={locale} />
        </SubContentContainer>
      </SubLayout>
    </div>
  );
}
