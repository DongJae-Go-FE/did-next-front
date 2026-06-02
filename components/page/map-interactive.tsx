"use client";

import { useEffect, useState } from "react";
import Map from "../map";
import DioceseCardSlider from "../diocese-card-slider";
import type { Locale } from "@/app/(nation)/_lib/content";

function MapPlaceholder() {
  return (
    <div className="flex min-h-[460px] items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-400 max-[767px]:min-h-[360px]">
      Loading...
    </div>
  );
}

export default function MapInteractive({ locale = "kr" }: { locale?: Locale }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1280);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) {
    return <MapPlaceholder />;
  }

  return isMobile ? (
    <DioceseCardSlider locale={locale} />
  ) : (
    <div className="flex h-[calc(100%-64px)] gap-x-4">
      <Map locale={locale} />
    </div>
  );
}
