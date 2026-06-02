import { content, type Locale } from "@/app/(nation)/_lib/content";
import LazyMapInteractive from "./lazy-map-interactive";

export default function MapPage({ locale = "kr" }: { locale?: Locale }) {
  const t = content[locale].mapPage;

  return (
    <div className="w-full h-full">
      <h2 className="heading02b mb-10 max-[1079px]:text-[24px] max-[767px]:text-[18px]">
        {t.title}
        <span className="body02m max-[1280px]:hidden">{t.subtitle}</span>
      </h2>
      <LazyMapInteractive locale={locale} />
    </div>
  );
}
