"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BackDrop } from "../ui/common";

import "swiper/css";
import "swiper/css/pagination";

import { content, type Locale } from "@/app/(nation)/_lib/content";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

type ItemType =
  | {
      type: "link";
      href: string;
      src: string;
      alt: string;
      imageClassName: string;
      mobileImageClassName?: string;
      label: string[];
      labelClassName?: string;
      labelClassNameEn?: string;
      singleLineLabelEn?: boolean;
    }
  | { type: "coming"; src: string; alt: string };

const LABEL_BASE_KR =
  "absolute z-30 heading03b text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] leading-[1.25] max-[1279px]:text-[clamp(22px,2vw,32px)] max-[1079px]:text-[20px] max-[1079px]:leading-[1.15] whitespace-nowrap";

const LABEL_BASE_EN =
  "absolute z-30 heading03b text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] leading-[1.25] max-[1279px]:text-[clamp(22px,2vw,32px)] max-[1079px]:text-[20px] max-[1079px]:leading-[1.15] whitespace-normal break-words";

const LABEL_BASE_EN_SINGLE_LINE =
  "absolute z-30 heading03b text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] leading-[1.25] max-[1279px]:text-[clamp(22px,2vw,32px)] max-[1079px]:text-[20px] max-[1079px]:leading-[1.15] whitespace-nowrap";

const LABEL_MOBILE_KR =
  "max-[767px]:top-1/2 max-[767px]:bottom-auto max-[767px]:left-1/2 max-[767px]:right-auto max-[767px]:w-auto max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2 max-[767px]:text-center max-[767px]:text-[26px]";

const LABEL_MOBILE_EN =
  "max-[767px]:top-1/2 max-[767px]:bottom-auto max-[767px]:left-1/2 max-[767px]:right-auto max-[767px]:w-[calc(100%-2rem)] max-[767px]:max-w-[320px] max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2 max-[767px]:text-center max-[767px]:text-[26px]";

const LABEL_DEFAULT =
  "top-1/2 right-[8%] w-[30%] -translate-y-1/2 text-left max-[1279px]:w-[34%] max-[1079px]:right-[3.5%] max-[1079px]:w-[40%]";

const LABEL_DEFAULT_EN =
  "top-1/2 right-[5%] w-[38%] -translate-y-1/2 text-left max-[1279px]:w-[42%] max-[1079px]:right-[3.5%] max-[1079px]:w-[46%]";

const LABEL_RIGHT =
  "top-1/2 right-0 w-[30%] -translate-y-1/2 text-left max-[1279px]:w-[34%] max-[1079px]:w-[40%]";

const LABEL_RIGHT_EN =
  "top-1/2 right-[5%] w-[38%] -translate-y-1/2 text-left max-[1279px]:w-[42%] max-[1079px]:right-[3.5%] max-[1079px]:w-[46%]";

const LABEL_RIGHT_NUDGED_EN =
  "top-1/2 right-0 w-[38%] -translate-y-1/2 text-left max-[1279px]:w-[42%] max-[1079px]:w-[46%]";

const LABEL_BOTTOM_CENTER =
  "bottom-[8%] left-1/2 w-auto -translate-x-1/2 text-center";

const LABEL_BOTTOM_CENTER_EN =
  "bottom-[8%] left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 text-center";

function getLabelClassName(
  locale: Locale,
  labelClassName?: string,
  labelClassNameEn?: string,
  singleLineLabelEn?: boolean
) {
  if (locale !== "en") {
    return `${LABEL_BASE_KR} ${labelClassName ?? LABEL_DEFAULT} ${LABEL_MOBILE_KR}`;
  }

  const desktopClassName = labelClassNameEn
    ? labelClassNameEn
    : labelClassName === LABEL_RIGHT
      ? LABEL_RIGHT_EN
      : labelClassName === LABEL_BOTTOM_CENTER
        ? LABEL_BOTTOM_CENTER_EN
        : LABEL_DEFAULT_EN;

  const baseClassName = singleLineLabelEn
    ? LABEL_BASE_EN_SINGLE_LINE
    : LABEL_BASE_EN;

  return `${baseClassName} ${desktopClassName} ${LABEL_MOBILE_EN}`;
}

function CardItem({
  item,
  isMobile = false,
  locale,
}: {
  item: ItemType;
  isMobile?: boolean;
  locale: Locale;
}) {
  if (item.type === "link") {
    const imageClassName =
      isMobile && item.mobileImageClassName
        ? item.mobileImageClassName
        : item.imageClassName;
    const label =
      locale === "en" && item.singleLineLabelEn
        ? [item.label.join(" ")]
        : item.label;

    return (
      <Link
        href={item.href}
        className="group block h-full w-full relative"
        target="_blank"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 767px) 90vw, 33vw"
          className={`object-cover transition-transform duration-300 group-hover:scale-[1.02] ${imageClassName}`}
        />
        <span
          className={getLabelClassName(
            locale,
            item.labelClassName,
            item.labelClassNameEn,
            item.singleLineLabelEn
          )}
        >
          {label.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </span>
      </Link>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 767px) 90vw, 33vw"
        className="object-cover object-center"
      />
      <span className="absolute inset-0 z-30 flex items-center justify-center text-center heading02b leading-[0.95] text-white max-[767px]:text-[28px]">
        COMING
        <br />
        SOON
      </span>
      <BackDrop />
    </div>
  );
}

export default function FightPage({ locale = "kr" }: { locale?: Locale }) {
  const [isMobile, setIsMobile] = useState(false);
  const t = content[locale].fightPage;

  // 최신순 정렬: 새로 추가하는 항목은 이 배열의 맨 앞에 넣으면 됩니다.
  const items: ItemType[] = [
    {
      type: "link",
      href: "https://www.youtube.com/watch?v=92YTmsDam_c",
      src: `${IMAGE_BASE}/did/main/fight/f9.png`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      mobileImageClassName: "object-[50%_50%]",
      label: t.personLabel9 as unknown as string[],
      labelClassName: LABEL_RIGHT,
      labelClassNameEn: LABEL_BOTTOM_CENTER_EN,
      singleLineLabelEn: true,
    },
    {
      type: "link",
      href: "https://www.youtube.com/watch?v=ajIQN5gMrFw",
      src: `${IMAGE_BASE}/did/main/fight/f8-v2.png`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      label: t.personLabel8 as unknown as string[],
      labelClassName: LABEL_RIGHT,
      labelClassNameEn: LABEL_RIGHT_NUDGED_EN,
    },
    {
      type: "link",
      href: "https://www.youtube.com/watch?v=j71e-K_NukE",
      src: `${IMAGE_BASE}/did/main/fight/f7-v2.png`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      mobileImageClassName: "object-[50%_50%]",
      label: t.personLabel7 as unknown as string[],
      labelClassName: LABEL_RIGHT,
      labelClassNameEn: LABEL_BOTTOM_CENTER_EN,
      singleLineLabelEn: true,
    },
    {
      type: "link",
      href: "https://www.youtube.com/watch?v=5fCIKQvKkSA",
      src: `${IMAGE_BASE}/did/main/fight/f6-v2.png`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      label: t.personLabel6 as unknown as string[],
      labelClassName: LABEL_RIGHT,
      labelClassNameEn: LABEL_RIGHT_NUDGED_EN,
    },
    {
      type: "link",
      href: "https://www.youtube.com/watch?v=FqiCdbjvuVM",
      src: `${IMAGE_BASE}/did/main/fight/f5-v2.png`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      label: t.personLabel5 as unknown as string[],
      labelClassName: LABEL_RIGHT,
    },
    {
      type: "link",
      href: "https://www.youtube.com/watch?v=6YkrDOfUQXw",
      src: `${IMAGE_BASE}/did/main/fight/f4.jpeg`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      label: t.personLabel4 as unknown as string[],
      labelClassName: LABEL_BOTTOM_CENTER,
    },
    {
      type: "link",
      href: "https://www.youtube.com/watch?v=H2x_ZZFW5so",
      src: `${IMAGE_BASE}/did/main/fight/f3.jpeg`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      label: t.personLabel3 as unknown as string[],
      labelClassName: LABEL_RIGHT,
    },
    {
      type: "link",
      href: "https://www.youtube.com/watch?v=oZFuDfvdoIs",
      src: `${IMAGE_BASE}/did/main/fight/f2.png`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      label: t.personLabel2 as unknown as string[],
      labelClassName: LABEL_RIGHT,
      labelClassNameEn: LABEL_BOTTOM_CENTER_EN,
      singleLineLabelEn: true,
    },
    {
      type: "link",
      href: "https://youtu.be/imkFMm4ZbBc",
      src: `${IMAGE_BASE}/did/main/fight/f1.png`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      label: t.personLabel as unknown as string[],
    },
  ];

  const desktopItems = items;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full px-12 py-10 max-[767px]:px-5 bg-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="mb-8 font-bold tracking-tight text-[clamp(18px,2.35vw,34px)]">
          {t.titleParts.map((part, i) => (
            <span key={i} style={{ color: part.color }}>
              {part.text}
            </span>
          ))}
        </h2>

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides
            pagination={{ clickable: true }}
            className="fight-swiper did-swiper"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-200">
                  <CardItem item={item} isMobile locale={locale} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul className="grid grid-cols-3 gap-6">
            {desktopItems.map((item, i) => (
              <li
                key={i}
                className="relative aspect-[16/5.45] rounded-xl overflow-hidden bg-neutral-200"
              >
                <CardItem item={item} locale={locale} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
