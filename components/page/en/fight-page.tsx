"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BackDrop } from "../../ui/common";

import "swiper/css";
import "swiper/css/pagination";

const items = [
  {
    type: "link" as const,
    href: "/",
    src: "/main/fight/f1.jpg",
    alt: "WYD 2027 Support Video",
    label: (
      <>
        Watch 2027 WYD
        <br />
        Support Video
      </>
    ),
  },
  { type: "coming" as const, src: "/main/main04.png", alt: "ComingSoon" },
  { type: "coming" as const, src: "/main/main04.png", alt: "ComingSoon" },
  { type: "coming" as const, src: "/main/main04.png", alt: "ComingSoon" },
];

function CardItem({ item }: { item: (typeof items)[number] }) {
  if (item.type === "link") {
    return (
      <Link href={item.href} className="h-40 block relative">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="absolute -top-4 object-cover"
        />
        <span className="absolute z-30 w-full h-full flex justify-center items-center text-center body01b text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          {item.label}
        </span>
        <BackDrop className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      </Link>
    );
  }

  return (
    <div className="h-40 relative">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="absolute -top-4 object-cover"
      />
      <span className="absolute z-100 w-full h-full flex justify-center items-center text-center heading02b text-white">
        COMING
        <br />
        SOON
      </span>
      <BackDrop />
    </div>
  );
}

export default function FightPageEn() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-80 px-8 py-8 max-[767px]:px-4">
      <h2 className="heading02b mb-8 max-[1079px]:text-[24px] max-[767px]:text-[18px] flex justify-between items-end">
        We Support You
      </h2>

      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          spaceBetween={8}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          className="fight-swiper"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative overflow-hidden group rounded-md">
                <CardItem item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className="flex gap-x-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex-1 relative max-w-1/4 overflow-hidden group rounded-md"
            >
              <CardItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
