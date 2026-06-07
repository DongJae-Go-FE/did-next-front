import Image from "next/image";

import SliderBackdrop from "../../ui/slider-backdrop";

import {
  SlideSmallText,
  SlideText,
} from "../../ui/slide-text";

import { content, type Locale } from "@/app/(nation)/_lib/content";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export default function SliderItem02En({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = content[locale].mainVerse;

  return (
    <div className="w-full h-full bg-gray-900 overflow-hidden relative">
      <Image
        src={`${IMAGE_BASE}/did/main/main02.jpeg`}
        className="w-full h-full animate-pan-zoom bg-cover bg-left-bottom object-cover object-center"
        fill
        sizes="100vw"
        alt={t.alt2}
      />
      <div className="text-white heading01b absolute top-[30dvh] z-40 pl-12 max-[767px]:pl-5 pr-4 flex flex-col gap-y-1 w-full max-w-[1400px] left-1/2 -translate-x-1/2">
        {t.lines.map((line, i) => (
          <div key={line} className="h-[clamp(48px,9dvw,90px)] overflow-hidden">
            <SlideText
              style={{ animationDelay: `${1.2 + i * 0.5}s` }}
              className="text-[clamp(20px,6dvw,60px)]"
            >
              {line}
            </SlideText>
          </div>
        ))}
        <div className="h-[clamp(40px,7.5dvw,81px)] overflow-hidden">
          <SlideSmallText
            style={{ animationDelay: `${1.2 + t.lines.length * 0.5}s` }}
            className="text-[clamp(16px,3dvw,36px)]"
          >
            {t.ref}
          </SlideSmallText>
        </div>
      </div>
      <SliderBackdrop />
    </div>
  );
}
