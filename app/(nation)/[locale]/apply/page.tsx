import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  SubLayout,
  SubContentContainer,
  SubContentTitle,
} from "@/components/ui/common";

import LeftMenu from "@/components/ui/left-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SliderBackdrop from "@/components/ui/slider-backdrop";
import JsonLd from "@/components/json-ld";
import { content, locales, type Locale } from "../../_lib/content";
import { getDioceseChartData } from "@/lib/notion-status";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";
const SITE_URL = "https://wyd2027did.org";

const dioceseData = [
  {
    krName: "안동교구",
    enName: "Diocese of Andong",
    image: `${IMAGE_BASE}/did/apply/andong.jpg`,
    href: "https://forms.gle/vdmVvsfDaDeXGdNE6",
  },
  {
    krName: "부산교구",
    enName: "Diocese of Busan",
    image: `${IMAGE_BASE}/did/apply/busan.jpg`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "청주교구",
    enName: "Diocese of Cheongju",
    image: `${IMAGE_BASE}/did/apply/cheongju.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "춘천교구",
    enName: "Diocese of Chuncheon",
    image: `${IMAGE_BASE}/did/apply/chuncheon.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "대구대교구",
    enName: "Archdiocese of Daegu",
    image: `${IMAGE_BASE}/did/apply/daegu.jpg`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "대전교구",
    enName: "Diocese of Daejeon",
    image: `${IMAGE_BASE}/did/apply/daejeon.png`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "광주대교구",
    enName: "Archdiocese of Gwangju",
    image: `${IMAGE_BASE}/did/apply/gwangju.png`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "인천교구",
    enName: "Diocese of Incheon",
    image: `${IMAGE_BASE}/did/apply/incheon.jpg`,
    href: "https://forms.gle/aYJsg2TCdpCdMgF5A",
  },
  {
    krName: "제주교구",
    enName: "Diocese of Jeju",
    image: `${IMAGE_BASE}/did/apply/jeju.png`,
    href: "https://forms.gle/BGyxRicjoq7jyfXF8",
  },
  {
    krName: "전주교구",
    enName: "Diocese of Jeonju",
    image: `${IMAGE_BASE}/did/apply/jeonju.jpg`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "마산교구",
    enName: "Diocese of Masan",
    image: `${IMAGE_BASE}/did/apply/masan.jpg`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "수원교구",
    enName: "Diocese of Suwon",
    image: `${IMAGE_BASE}/did/apply/suwon.png`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdtMnx0BWhPVb7YriKYjROjU0UKKAzrTvY1DkjZZ3Lx6fT_ww/viewform",
  },
  {
    krName: "의정부교구",
    enName: "Diocese of Uijeongbu",
    image: `${IMAGE_BASE}/did/apply/uijeongbu.png`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    krName: "원주교구",
    enName: "Diocese of Wonju",
    image: `${IMAGE_BASE}/did/apply/wonju.jpg`,
    href: "https://docs.google.com/forms/d/1CdCodr8pIA4dQy_XBqt_FaAB0BxiDl2W1EosYzc1zXo/edit",
  },
];

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
  const t = content[locale].applyPage;
  const base = content[locale].metadata;
  const description = t.metaDescription;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${t.heroTitle} | ${base.title}`,
    description,
    keywords: base.keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/apply`,
      languages: {
        "ko-KR": `${SITE_URL}/kr/apply`,
        "en-US": `${SITE_URL}/en/apply`,
        "x-default": `${SITE_URL}/kr/apply`,
      },
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
      },
    },
    openGraph: {
      title: `${t.heroTitle} | ${base.title}`,
      description,
      url: `${SITE_URL}/${locale}/apply`,
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
  const t = content[locale].applyPage;
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: locale === "kr" ? "홈" : "Home", url: `${SITE_URL}/${locale}` },
    { name: t.heroTitle, url: `${SITE_URL}/${locale}/apply` },
  ]);

  const chartData = await getDioceseChartData();
  const notionMap = new Map(
    chartData.map((d) => [d.name, { applied: d.현재인원, total: d.목표인원 }]),
  );

  function findNotionData(krName: string) {
    if (notionMap.has(krName)) return notionMap.get(krName)!;

    const simplified = krName.replace("대교구", "교구");
    if (notionMap.has(simplified)) return notionMap.get(simplified)!;

    const short = krName.replace(/대?교구$/, "");
    for (const [key, value] of notionMap) {
      if (key.replace(/대?교구$/, "") === short) return value;
    }
    return { applied: 0, total: 1 };
  }

  return (
    <>
      <JsonLd id="breadcrumb-json-ld" data={breadcrumbJsonLd} />
      <div className="pt-30">
      <div className="w-full h-80 relative overflow-hidden flex justify-center items-center">
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
          <ul
            className="w-full grid gap-4"
            style={{
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(300px,100%), 1fr))",
            }}
          >
            {dioceseData.map(({ krName, enName, image }) => {
              const { applied, total } = findNotionData(krName);
              const name = locale === "kr" ? krName : enName;
              const key = name.replace(/\s/g, "");
              const rate = Math.round((applied / total) * 100);
              return (
                <li key={krName}>
                  <Card className="w-full max-w-full px-4">
                    <CardContent className="relative h-44 overflow-hidden">
                      <Image
                        src={image}
                        fill
                        className="object-cover"
                        priority
                        alt={name}
                      />
                    </CardContent>
                    <CardHeader className="px-0">
                      <CardTitle
                        className="leading-snug break-keep"
                        title={t.cardTitle(name)}
                      >
                        {t.cardTitle(name)}
                      </CardTitle>
                      <CardDescription
                        className="whitespace-normal leading-normal break-keep"
                        title={t.cardDesc()}
                      >
                        {t.cardDesc()}
                      </CardDescription>
                      <div className="mt-1">
                        <div className="flex flex-wrap justify-between items-center gap-x-2 gap-y-1 mb-1">
                          <span className="text-xs font-medium text-gray-600">
                            {t.rateLabel}
                          </span>
                          <span className="text-xs font-semibold text-gray-800">
                            {rate}% ({applied}/{total})
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                          <style>{`
                            @keyframes fill-${key} {
                              from { width: 0%; }
                              to { width: ${rate}%; }
                            }
                          `}</style>
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              backgroundColor: "#0047BB",
                              animation: `fill-${key} 1s ease-out forwards`,
                            }}
                          />
                        </div>
                      </div>
                    </CardHeader>

                    <CardFooter className="px-0">
                      <p className="flex min-h-12 w-full items-center justify-center rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-center body01m text-gray-500">
                        {t.applyUnavailable}
                      </p>
                    </CardFooter>
                  </Card>
                </li>
              );
            })}
          </ul>
        </SubContentContainer>
      </SubLayout>
      </div>
    </>
  );
}
