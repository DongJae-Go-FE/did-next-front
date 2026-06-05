"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

//import GradientText from "../gradient-text";
import { content, type Locale } from "@/app/(nation)/_lib/content";

import "swiper/css";
import "swiper/css/pagination";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

const sponsors = [
  { name: "BYN", nameEn: "BYN", image: "/sponsor/s1.svg", url: "https://www.byn.kr/" },
  { name: "에버랜드", nameEn: "Everland", image: "/sponsor/s2.svg", url: "https://www.everland.com/" },
  { name: "스파클", nameEn: "Sparkle", image: `${IMAGE_BASE}/s3.png`, url: "http://sparklewater.net/" },
  { name: "한국민속촌", nameEn: "Korean Folk Village", image: "/sponsor/s4.svg", url: "https://www.koreanfolk.co.kr/" },
  { name: "고고코퍼레이션", nameEn: "GoGo Corporation", image: "/sponsor/s5.svg", url: "https://www.gogocorp.co.kr/", scale: 0.7 },
  { name: "홀리스팟", nameEn: "HolySpots", image: "/sponsor/s6.svg", url: "http://holyspots.kr/" },
  { name: "가톨릭신문", nameEn: "Catholic Times", image: "/sponsor/s7.svg", url: "https://www.catholictimes.org/" },
  { name: "가톨릭평화방송", nameEn: "CPBC", image: "/sponsor/s8.svg", url: "https://www.cpbc.co.kr/" },
  { name: "한국천주교주교회의", nameEn: "CBCK", image: "/sponsor/s9.svg", url: "https://www.cbck.or.kr/" },
];

function SponsorItem({
  index,
  locale,
  asListItem = true,
}: {
  index: number;
  locale: Locale;
  asListItem?: boolean;
}) {
  const sponsor = sponsors[index];
  const sponsorName = locale === "kr" ? sponsor.name : sponsor.nameEn;
  const Wrapper = asListItem ? "li" : "div";

  return (
    <Wrapper className="bg-white h-36 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-100">
      <Link
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={locale === "kr" ? `${sponsorName} 홈페이지 (새 창)` : `${sponsorName} website (opens in new tab)`}
        className="flex w-full h-full justify-center items-center p-4"
      >
        <Image
          src={sponsor.image}
          alt={locale === "kr" ? `${sponsorName} 로고` : `${sponsorName} logo`}
          width={200}
          height={80}
          className="w-auto h-auto max-h-24 max-w-[80%] object-contain"
          style={sponsor.scale ? { transform: `scale(${sponsor.scale})` } : undefined}
          priority
        />
      </Link>
    </Wrapper>
  );
}

export default function SponsorPage({ locale = "kr" }: { locale?: Locale }) {
  const [isMobile, setIsMobile] = useState(false);
  const t = content[locale].sponsorPage;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1079);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <h2 className="heading02b mb-10 max-[1079px]:text-[24px] max-[767px]:text-[18px]">
        {t.title}
      </h2>

      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="sponsor-swiper pb-8 did-swiper"
        >
          {[...Array(9)].map((_, index) => (
            <SwiperSlide key={index}>
              <SponsorItem index={index} locale={locale} asListItem={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul
          className="grid w-full gap-2"
          style={{
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(400px,100%), 1fr))",
          }}
        >
          {[...Array(9)].map((_, index) => (
            <SponsorItem key={index} index={index} locale={locale} />
          ))}
        </ul>
      )}

      {/* <div className="h-100 max-[1079px]:h-60 max-[767px]:h-44 bg-white w-full mt-6 border border-gray-200 rounded-xl flex justify-center items-center flex-col gap-y-2">
        <h2 className="heading01b text-[clamp(18px,3dvw,40px)]">
          {t.inquiryTitle}
        </h2>
        <a href="#none">
          <GradientText
            colors={[
              "#0052CC",
              "#1A1A1A",
              "#E31E24",
              "#0056D2",
              "#000000",
              "#ED1C24",
            ]}
            animationSpeed={3}
            showBorder={false}
            className="heading01b text-[clamp(24px,3dvw,40px)]"
          >
            wyd2027@naver.com
          </GradientText>
        </a>
      </div> */}
    </>
  );
}
