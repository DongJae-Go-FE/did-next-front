import Image from "next/image";

import { cn } from "@/lib/utils";

import SliderBackdrop from "../../ui/slider-backdrop";

import {
  SlideSmallText,
  SlideText,
} from "../../ui/slide-text";

import { content, type Locale } from "@/app/(nation)/_lib/content";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export default function SliderItem01En({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = content[locale].mainVerse;

  return (
    <div
      className={cn(
        "max-[727px]:px-[8dvw] max-[727px]:py-[30dvh] max-[1080px]:px-[10dvw] max-[1080px]:py-[20dvh] px-[120px] relative",
        "pb-40 flex h-screen w-full flex-col justify-end bg-cover bg-no-repeat relative p-0 overflow-hidden bg-center"
      )}
    >
      <Image
        src={`${IMAGE_BASE}/did/main/main01.jpeg`}
        alt={t.alt1}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
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
      <div className="w-[200vw] h-[200vh] bg-black z-30 absolute animate-fade-out-up-left rounded-full -right-[25dvw] -bottom-[15dvw] max-[1080px]:-bottom-[50dvw]" />
      <h2
        className="absolute right-0 pr-5 z-40 bottom-[8dvw] heading02b text-white text-[clamp(30px,7dvw,130px)] animate-fadeIn opacity-0 max-[1079px]:hidden"
        style={{ animationDelay: "3s" }}
      >
        DAYS IN DIOCESE
      </h2>
      <SliderBackdrop />
    </div>
  );
}
