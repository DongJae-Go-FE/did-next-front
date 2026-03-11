"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import GradientText from "../gradient-text";
import { content, type Locale } from "@/app/(nation)/_lib/content";

import "swiper/css";
import "swiper/css/pagination";

function SponsorItem({ index, locale }: { index: number; locale: Locale }) {
  return (
    <li className="bg-white h-30 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-100">
      <Link
        href="https://www.cbck.or.kr/"
        target="_blank"
        className="flex w-full h-full justify-center items-center"
      >
        <Image
          src="sponsor-logo.svg"
          alt={locale === "kr" ? `스폰서${index + 1}` : `Sponsor ${index + 1}`}
          width={0}
          height={0}
          className="h-18 w-auto aspect-video"
          priority
        />
      </Link>
    </li>
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
              <SponsorItem index={index} locale={locale} />
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
