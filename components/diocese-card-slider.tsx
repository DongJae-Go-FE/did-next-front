"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import dioceseData from "@/public/data";
import type { Locale } from "@/app/(nation)/_lib/content";

import "swiper/css";
import "swiper/css/pagination";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

const dioceseImageMap: Record<string, string> = {
  서울대교구: `${IMAGE_BASE}/did/apply/seoul.webp`,
  인천교구: `${IMAGE_BASE}/did/apply/incheon.jpg`,
  수원교구: `${IMAGE_BASE}/did/apply/suwon.png`,
  의정부교구: `${IMAGE_BASE}/did/apply/uijeongbu.png`,
  춘천교구: `${IMAGE_BASE}/did/apply/chuncheon.webp`,
  원주교구: `${IMAGE_BASE}/did/apply/wonju.jpg`,
  대전교구: `${IMAGE_BASE}/did/apply/daejeon.png`,
  청주교구: `${IMAGE_BASE}/did/apply/cheongju.webp`,
  대구대교구: `${IMAGE_BASE}/did/apply/daegu.jpg`,
  부산교구: `${IMAGE_BASE}/did/apply/busan.jpg`,
  마산교구: `${IMAGE_BASE}/did/apply/masan.jpg`,
  안동교구: `${IMAGE_BASE}/did/apply/andong.jpg`,
  광주대교구: `${IMAGE_BASE}/did/apply/gwangju.png`,
  전주교구: `${IMAGE_BASE}/did/apply/jeonju.jpg`,
  제주교구: `${IMAGE_BASE}/did/apply/jeju.png`,
  군종교구: `${IMAGE_BASE}/did/apply/gun.png`,
};

const dioceseNameMap: Record<string, string> = {
  서울대교구: "Archdiocese of Seoul",
  인천교구: "Diocese of Incheon",
  수원교구: "Diocese of Suwon",
  의정부교구: "Diocese of Uijeongbu",
  춘천교구: "Diocese of Chuncheon",
  원주교구: "Diocese of Wonju",
  대전교구: "Diocese of Daejeon",
  청주교구: "Diocese of Cheongju",
  대구대교구: "Archdiocese of Daegu",
  부산교구: "Diocese of Busan",
  마산교구: "Diocese of Masan",
  안동교구: "Diocese of Andong",
  광주대교구: "Archdiocese of Gwangju",
  전주교구: "Diocese of Jeonju",
  제주교구: "Diocese of Jeju",
  군종교구: "Military Ordinariate",
};

const dioceseUrlMap: Record<string, string> = {
  서울대교구: "https://wydseoul.org",
  부산교구: "https://www.wyd2027did-busan.org",
  안동교구: "https://www.wyd2027did-andong.org",
  춘천교구: "https://www.wyd2027did-cccatholic.org",
  대구대교구: "https://www.wyd2027did-daegu.org",
  군종교구: "https://www.wyd2027did-gunjong.org",
  광주대교구: "https://www.wyd2027did-gwangju.org",
  제주교구: "https://www.wyd2027did-jeju.org",
  전주교구: "https://www.wyd2027did-jeonju.org",
  마산교구: "https://www.wyd2027did-masan.org",
  의정부교구: "https://www.wyd2027did-uijeongbu.org",
  원주교구: "https://www.wyd2027did-wonju.org",
  청주교구: "https://www.wyd2027did-cdcj.org",
  수원교구: "https://www.wyd2027did-suwon.org",
  인천교구: "https://www.wyd2027did-incheon.org",
  대전교구: "https://www.wyd2027did-daejeon.org",
};

function DioceseCard({ name, locale }: { name: string; locale: Locale }) {
  const isEn = locale !== "kr";
  const diocese = dioceseData.find((d) => d.name === name);
  const address = diocese?.address || "";
  const displayName = isEn ? dioceseNameMap[name] || name : name;
  const baseUrl = dioceseUrlMap[name];
  const url = baseUrl
    ? name === "서울대교구"
      ? baseUrl
      : `${baseUrl}/${isEn ? "en" : "kr"}`
    : undefined;

  return (
    <div className="flex h-full flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={dioceseImageMap[name] || `${IMAGE_BASE}/apply/seoul.webp`}
          fill
          className="object-cover"
          alt={isEn ? `${displayName} image` : `${displayName} 이미지`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-bold">{displayName}</h3>
        </div>
      </div>

      <div className="flex-1 px-4 pt-3 pb-4 flex flex-col gap-y-3">
        {address && (
          <div className="flex items-start gap-x-2 text-sm text-gray-600">
            <MapPin
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              style={{ color: "#0047BB" }}
            />
            <span className="leading-relaxed">{address}</span>
          </div>
        )}

        {url ? (
          <Link
            href={url}
            target="_blank"
            className="mt-auto flex items-center justify-center gap-x-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold w-full transition-colors"
            style={{ backgroundColor: "#0047BB" }}
          >
            {isEn ? "Visit Diocese DID Website" : "교구 DID 홈페이지 바로가기"}
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <div className="mt-auto flex items-center justify-center px-4 py-2.5 bg-gray-100 rounded-xl text-gray-400 text-sm w-full">
            {isEn ? "Website coming soon" : "홈페이지 준비 중입니다"}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DioceseCardSlider({
  locale = "kr",
}: {
  locale?: Locale;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === dioceseData.length - 1;
  const prevLabel = locale === "kr" ? "이전 교구" : "Previous diocese";
  const nextLabel = locale === "kr" ? "다음 교구" : "Next diocese";

  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={1.15}
        centeredSlides
        pagination={{
          type: "fraction",
          el: ".diocese-pagination",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="diocese-swiper did-swiper !overflow-visible"
        style={{ padding: "8px 0" }}
      >
        {dioceseData.map((diocese) => (
          <SwiperSlide key={diocese.name} className="!h-auto">
            <DioceseCard name={diocese.name} locale={locale} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-5 flex items-center justify-between gap-3 rounded-full border border-[#D8E0EE] bg-white/90 p-1.5 shadow-sm">
        <span className="diocese-pagination min-w-16 pl-3 text-sm font-bold text-[#0047BB]" />
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label={prevLabel}
            title={prevLabel}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isFirst}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C7D2E5] bg-white text-[#0047BB] transition-colors hover:border-[#0047BB] hover:bg-[#0047BB] hover:text-white disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="size-5" strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label={nextLabel}
            title={nextLabel}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isLast}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C7D2E5] bg-white text-[#0047BB] transition-colors hover:border-[#0047BB] hover:bg-[#0047BB] hover:text-white disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronRight className="size-5" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
}
