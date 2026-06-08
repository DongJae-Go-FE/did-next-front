"use client";

import Image from "next/image";

import LogoLoop from "@/components/logo-loop";
import SplitText from "@/components/split-text";

import CountDay from "../count-day";
import { content, type Locale } from "@/app/(nation)/_lib/content";

const dioceseLogo = [
  { src: "/logo/logo-andong.svg", krName: "안동교구", enName: "Diocese of Andong", href: "https://www.wyd2027did-andong.org", w: 0, h: 0 },
  { src: "/logo/logo-busan.svg", krName: "부산교구", enName: "Diocese of Busan", href: "https://www.wyd2027did-busan.org", w: 0, h: 0 },
  { src: "/logo/logo-cheongju.svg", krName: "청주교구", enName: "Diocese of Cheongju", href: "https://www.wyd2027did-cdcj.org", w: 0, h: 0 },
  { src: "/logo/logo-chuncheon.svg", krName: "춘천교구", enName: "Diocese of Chuncheon", href: "https://www.wyd2027did-cccatholic.org", w: 0, h: 0 },
  { src: "/logo/logo-daegu.svg", krName: "대구교구", enName: "Archdiocese of Daegu", href: "https://www.wyd2027did-daegu.org", w: 0, h: 0 },
  { src: "/logo/logo-daejeon.svg", krName: "대전교구", enName: "Diocese of Daejeon", href: "https://www.wyd2027did-daejeon.org", w: 0, h: 0 },
  { src: "/logo/logo-gwangju.svg", krName: "광주교구", enName: "Archdiocese of Gwangju", href: "https://www.wyd2027did-gwangju.org", w: 0, h: 0 },
  { src: "/logo/logo-incheon.svg", krName: "인천교구", enName: "Diocese of Incheon", href: "https://www.wyd2027did-incheon.org", w: 0, h: 0 },
  { src: "/logo/logo-jeju.svg", krName: "제주교구", enName: "Diocese of Jeju", href: "https://www.wyd2027did-jeju.org", w: 0, h: 0 },
  { src: "/logo/logo-jeonju.svg", krName: "전주교구", enName: "Diocese of Jeonju", href: "https://www.wyd2027did-jeonju.org", w: 0, h: 0 },
  { src: "/logo/logo-masan.svg", krName: "마산교구", enName: "Diocese of Masan", href: "https://www.wyd2027did-masan.org", w: 0, h: 0 },
  { src: "/logo/logo-militury.svg", krName: "군종교구", enName: "Military Ordinariate", href: "https://www.wyd2027did-gunjong.org", w: 200, h: 120 },
  { src: "/logo/logo-suwon.svg", krName: "수원교구", enName: "Diocese of Suwon", href: "https://www.wyd2027did-suwon.org", w: 0, h: 0 },
  { src: "/logo/logo-uijeongbu.svg", krName: "의정부교구", enName: "Diocese of Uijeongbu", href: "https://www.wyd2027did-uijeongbu.org", w: 0, h: 0 },
  { src: "/logo/logo-wonju.svg", krName: "원주교구", enName: "Diocese of Wonju", href: "https://www.wyd2027did-wonju.org", w: 0, h: 0 },
];

export default function IntroPage({ locale = "kr" }: { locale?: Locale }) {
  const t = content[locale].intro;

  const techLogos = dioceseLogo.map((d) => ({
    node: (
      <Image
        src={d.src}
        width={d.w}
        height={d.h}
        className="w-auto h-10 cursor-pointer"
        priority
        alt={locale === "kr" ? d.krName : d.enName}
      />
    ),
    title: locale === "kr" ? d.krName : d.enName,
    href: d.href,
  }));

  return (
    <>
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className="flex items-center h-[60px] md:h-[100px]"
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={28}
          gap={20}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel={t.logoAriaLabel}
        />
      </div>
      <div className="flex justify-center items-center w-full h-auto md:h-[calc(80dvh-200px)] flex-col gap-y-2 py-10 md:py-0">
        <SplitText
          text={t.welcomeText}
          className="heading01b text-[clamp(14px,4vw,40px)] text-center font-black px-4"
          tag="h2"
          delay={100}
          duration={1}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <CountDay locale={locale} />
      </div>
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className="flex items-center h-[60px] md:h-[100px]"
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="right"
          logoHeight={28}
          gap={20}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel={t.logoAriaLabel}
        />
      </div>
    </>
  );
}
