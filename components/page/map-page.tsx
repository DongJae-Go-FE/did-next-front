"use client";

import { useState, useEffect } from "react";
import Map from "../map";
import DioceseCardSlider from "../diocese-card-slider";
import { content, type Locale } from "@/app/(nation)/_lib/content";

export default function MapPage({ locale = "kr" }: { locale?: Locale }) {
  const t = content[locale].mapPage;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1280);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full">
      <h2 className="heading02b mb-8 max-[1079px]:text-[24px] max-[767px]:text-[18px]">
        {t.title}
        {!isMobile && (
          <span className="body02m">{t.subtitle}</span>
        )}
      </h2>
      {isMobile ? (
        <DioceseCardSlider locale={locale} />
      ) : (
        <div className="flex h-[calc(100%-64px)] gap-x-4">
          <Map locale={locale} />
        </div>
      )}
    </div>
  );
}
