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
import ApplyButton from "@/components/apply-button";
import { content, locales, type Locale } from "../../_lib/content";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";
const SITE_URL = "https://wyd2027did.org";
const OG_IMAGE = "/logo.svg";

const dioceseData = [
  {
    krName: "안동교구",
    enName: "Diocese of Andong",
    image: `${IMAGE_BASE}/did/apply/andong.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 10,
    total: 50,
  },
  {
    krName: "부산교구",
    enName: "Diocese of Busan",
    image: `${IMAGE_BASE}/did/apply/busan.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 90,
    total: 170,
  },
  {
    krName: "청주교구",
    enName: "Diocese of Cheongju",
    image: `${IMAGE_BASE}/did/apply/cheongju.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 25,
    total: 90,
  },
  {
    krName: "춘천교구",
    enName: "Diocese of Chuncheon",
    image: `${IMAGE_BASE}/did/apply/chuncheon.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 20,
    total: 80,
  },
  {
    krName: "대구대교구",
    enName: "Archdiocese of Daegu",
    image: `${IMAGE_BASE}/did/apply/daegu.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 70,
    total: 160,
  },
  {
    krName: "대전교구",
    enName: "Diocese of Daejeon",
    image: `${IMAGE_BASE}/did/apply/daejeon.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 55,
    total: 130,
  },
  {
    krName: "광주대교구",
    enName: "Archdiocese of Gwangju",
    image: `${IMAGE_BASE}/did/apply/gwangju.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 60,
    total: 140,
  },
  {
    krName: "인천교구",
    enName: "Diocese of Incheon",
    image: `${IMAGE_BASE}/did/apply/incheon.jpg`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 45,
    total: 120,
  },
  {
    krName: "제주교구",
    enName: "Diocese of Jeju",
    image: `${IMAGE_BASE}/did/apply/jeju.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 12,
    total: 40,
  },
  {
    krName: "전주교구",
    enName: "Diocese of Jeonju",
    image: `${IMAGE_BASE}/did/apply/jeonju.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 35,
    total: 110,
  },
  {
    krName: "마산교구",
    enName: "Diocese of Masan",
    image: `${IMAGE_BASE}/did/apply/masan.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 18,
    total: 70,
  },
  {
    krName: "군종교구",
    enName: "Military Ordinariate",
    image: `${IMAGE_BASE}/did/apply/gun.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 40,
    total: 100,
  },
  {
    krName: "수원교구",
    enName: "Diocese of Suwon",
    image: `${IMAGE_BASE}/did/apply/suwon.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 80,
    total: 150,
  },
  {
    krName: "의정부교구",
    enName: "Diocese of Uijeongbu",
    image: `${IMAGE_BASE}/did/apply/uijeongbu.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 30,
    total: 100,
  },
  {
    krName: "원주교구",
    enName: "Diocese of Wonju",
    image: `${IMAGE_BASE}/did/apply/wonju.webp`,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 15,
    total: 60,
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

  return {
    title: `${t.heroTitle} | 2027 WYD SEOUL DID`,
    description: base.description,
    keywords: base.keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/apply`,
      languages: {
        ko: `${SITE_URL}/kr/apply`,
        en: `${SITE_URL}/en/apply`,
        "x-default": `${SITE_URL}/kr/apply`,
      },
    },
    openGraph: {
      title: `${t.heroTitle} | 2027 WYD SEOUL DID`,
      description: base.description,
      url: `${SITE_URL}/${locale}/apply`,
      siteName: "2027 WYD SEOUL DID",
      locale: base.ogLocale,
      type: "website",
      images: [{ url: OG_IMAGE, alt: "2027 WYD SEOUL DID logo" }],
    },
    twitter: {
      card: "summary",
      title: `${t.heroTitle} | 2027 WYD SEOUL DID`,
      description: base.description,
      images: [OG_IMAGE],
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

  return (
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
            {dioceseData.map(({ krName, enName, href, image, applied, total }) => {
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
                      <CardTitle title={t.cardTitle(name)}>
                        {t.cardTitle(name)}
                      </CardTitle>
                      <CardDescription
                        className="truncate"
                        title={t.cardDesc(name)}
                      >
                        {t.cardDesc(name)}
                      </CardDescription>
                      <div className="mt-1">
                        <div className="flex justify-between items-center mb-1">
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

                    <CardFooter className="flex-col gap-2 px-0">
                      <ApplyButton
                        href={href}
                        label={t.applyBtn}
                        dialogTitle={t.privacyDialogTitle}
                        dialogDesc={t.privacyDialogDesc}
                        dialogDetail={t.privacyDialogDetail}
                        dialogWarning={t.privacyWarning}
                        agreeLabel={t.privacyAgreeLabel}
                        confirmBtn={t.privacyConfirmBtn}
                        cancelBtn={t.privacyCancelBtn}
                      />
                    </CardFooter>
                  </Card>
                </li>
              );
            })}
          </ul>
        </SubContentContainer>
      </SubLayout>
    </div>
  );
}
