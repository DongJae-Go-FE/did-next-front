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
      label: string[];
    }
  | { type: "coming"; src: string; alt: string };

function CardItem({ item }: { item: ItemType }) {
  if (item.type === "link") {
    return (
      <Link href={item.href} className="group block h-full w-full relative">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 767px) 90vw, 33vw"
          className={`object-cover transition-transform duration-300 group-hover:scale-[1.02] ${item.imageClassName}`}
        />
        <span className="absolute top-1/2 right-[8%] z-30 w-[30%] -translate-y-1/2 text-left heading03b leading-[1.25] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] max-[1279px]:w-[34%] max-[1279px]:text-[clamp(22px,2vw,32px)] max-[1079px]:right-[3.5%] max-[1079px]:w-[40%] max-[1079px]:leading-[1.15] max-[767px]:right-[6%] max-[767px]:w-[40%] max-[767px]:text-[20px] whitespace-nowrap">
          {item.label.map((line, i) => (
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

  const items: ItemType[] = [
    {
      type: "link",
      href: "/",
      src: `${IMAGE_BASE}/did/main/fight/f1.png`,
      alt: t.personAlt,
      imageClassName:
        "object-[30%_26%] max-[1079px]:object-[26%_26%] max-[767px]:object-[24%_20%]",
      label: t.personLabel as unknown as string[],
    },
    { type: "coming", src: `${IMAGE_BASE}/did/main/main04.png`, alt: "ComingSoon" },
    { type: "coming", src: `${IMAGE_BASE}/did/main/main04.png`, alt: "ComingSoon" },
    { type: "coming", src: `${IMAGE_BASE}/did/main/main04.png`, alt: "ComingSoon" },
  ];

  const desktopItems = items.slice(0, 3);

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
                  <CardItem item={item} />
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
                <CardItem item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
