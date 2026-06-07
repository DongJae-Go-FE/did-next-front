import Image from "next/image";

import { content, type Locale } from "@/app/(nation)/_lib/content";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export default function SliderItem00({
  locale = "kr",
}: {
  locale?: Locale;
}) {
  const t = content[locale].mainSlide;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={`${IMAGE_BASE}/did/main/main00.jpeg`}
        className="w-full h-full object-cover animate-pan-zoom-center"
        fill
        sizes="100vw"
        priority
        alt={t.alt}
      />
      <h1 className="heading02b text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-7xl max-[1080px]:text-5xl max-[769px]:text-3xl animate-bottomUp opacity-0 w-full">
        {t.title}
      </h1>
      <div className="absolute top-0 left-0 z-10 h-full w-full backdrop-brightness-30 animate-fadeIn2 opacity-0" />
    </div>
  );
}
