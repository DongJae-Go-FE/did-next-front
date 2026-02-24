"use client";

import Map from "../map";
import { content, type Locale } from "@/app/(nation)/_lib/content";

export default function MapPage({ locale = "kr" }: { locale?: Locale }) {
  const t = content[locale].mapPage;

  return (
    <div className="w-full h-full">
      <h2 className="heading02b mb-8 max-[1079px]:text-[24px] max-[767px]:text-[18px]">
        {t.title}<span className="body02m">{t.subtitle}</span>
      </h2>
      <div className="flex h-[calc(100%-64px)] max-[767px]:h-full gap-x-4 max-[767px]:flex-col max-[767px]:gap-y-4">
        <Map locale={locale} />
      </div>
    </div>
  );
}
