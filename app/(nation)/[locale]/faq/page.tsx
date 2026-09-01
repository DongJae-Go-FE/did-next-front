import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ChevronDown, MessageCircleQuestion } from "lucide-react";

import {
  SubLayout,
  SubContentContainer,
  SubContentTitle,
} from "@/components/ui/common";

import LeftMenu from "@/components/ui/left-menu";
import SliderBackdrop from "@/components/ui/slider-backdrop";
import JsonLd from "@/components/json-ld";
import { content, locales, type Locale } from "../../_lib/content";
import { faqContent, CHATBOT_URL } from "../../_lib/faq-content";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";
import {
  SITE_URL,
  getCanonicalUrl,
  getLanguageAlternates,
  getMetaDescription,
  getPageTitle,
  getSiteName,
  OG_IMAGES,
} from "@/lib/seo";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

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
  const t = faqContent[locale];
  const base = content[locale].metadata;
  const description = getMetaDescription(t.metaDescription);
  const pageTitle = getPageTitle(locale, t.heroTitle);
  const siteName = getSiteName(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    alternates: {
      canonical: getCanonicalUrl(locale, "/faq"),
      languages: getLanguageAlternates("/faq"),
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url: getCanonicalUrl(locale, "/faq"),
      siteName,
      locale: base.ogLocale,
      type: "website",
      images: OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: OG_IMAGES,
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
  const t = faqContent[locale];
  const noticeT = content[locale].noticePage;

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: locale === "kr" ? "홈" : "Home", url: `${SITE_URL}/${locale}` },
    { name: t.heroTitle, url: `${SITE_URL}/${locale}/faq` },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.join(" "),
      },
    })),
  };

  return (
    <>
      <JsonLd id="breadcrumb-json-ld" data={breadcrumbJsonLd} />
      <JsonLd id="faq-json-ld" data={faqJsonLd} />
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
            <h2 className="heading02b text-center">{t.heroTitle}</h2>
            <ul className="flex gap-x-1 justify-center body01b">
              {t.breadcrumb.map((crumb) => (
                <li key={crumb}>{crumb}</li>
              ))}
            </ul>
          </div>
          <SliderBackdrop />
        </div>
        <SubLayout className="relative">
          <LeftMenu
            title={noticeT.leftMenuTitle}
            menus={noticeT.leftMenuItems}
          />
          <SubContentContainer>
            <SubContentTitle>{t.pageTitle}</SubContentTitle>

            <div className="w-full mt-4 border-t-2 border-[#0047BB]">
              {t.items.map((item, index) => (
                <details
                  key={item.q}
                  className="group border-b border-gray-200"
                >
                  <summary className="flex items-start gap-x-3 md:gap-x-4 py-5 md:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                    <span className="text-[#0047BB] font-bold text-base md:text-lg shrink-0 leading-6 md:leading-7">
                      Q{index + 1}.
                    </span>
                    <span className="flex-1 text-gray-900 font-semibold text-base md:text-lg leading-6 md:leading-7 group-open:text-[#0047BB] transition-colors">
                      {item.q}
                    </span>
                    <ChevronDown
                      className="shrink-0 mt-0.5 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#0047BB]"
                      width={22}
                      height={22}
                    />
                  </summary>
                  <div className="pb-6 md:pb-7 pl-9 md:pl-11 pr-2 md:pr-8 flex flex-col gap-y-3">
                    {item.a.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 30)}
                        className="text-gray-600 text-sm md:text-base leading-6 md:leading-7 break-keep"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div className="w-full mt-10 md:mt-12 rounded-2xl bg-[#F4F7FC] border border-[#0047BB]/15 px-6 py-8 md:px-10 md:py-10 flex flex-col items-center text-center gap-y-4">
              <div className="w-14 h-14 rounded-full bg-[#0047BB] flex items-center justify-center">
                <MessageCircleQuestion
                  width={28}
                  height={28}
                  className="text-white"
                />
              </div>
              <h3 className="heading04b text-gray-900">{t.chatbot.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7 break-keep max-w-[560px]">
                {t.chatbot.desc}
              </p>
              <a
                href={CHATBOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0047BB] text-white font-semibold text-sm md:text-base px-8 py-3 hover:bg-[#003a99] transition-colors"
              >
                {t.chatbot.button}
              </a>
            </div>
          </SubContentContainer>
        </SubLayout>
      </div>
    </>
  );
}
