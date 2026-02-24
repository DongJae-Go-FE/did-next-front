"use client";

import Image from "next/image";

import LogoLoop from "@/components/logo-loop";
import SplitText from "@/components/split-text";

import CountDay from "../count-day";
import { content, type Locale } from "@/app/(nation)/_lib/content";

const dioceseLogo = [
  { src: "/logo/logo-andong.svg", krName: "안동교구", enName: "Diocese of Andong", href: "https://www.acatholic.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-busan.svg", krName: "부산교구", enName: "Diocese of Busan", href: "http://www.catholicbusan.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-cheongju.svg", krName: "청주교구", enName: "Diocese of Cheongju", href: "https://www.cdcj.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-chuncheon.svg", krName: "춘천교구", enName: "Diocese of Chuncheon", href: "https://www.cccatholic.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-daegu.svg", krName: "대구교구", enName: "Archdiocese of Daegu", href: "https://www.daegu-archdiocese.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-daejeon.svg", krName: "대전교구", enName: "Diocese of Daejeon", href: "https://www.djcatholic.or.kr/home", w: 0, h: 0 },
  { src: "/logo/logo-gwangju.svg", krName: "광주교구", enName: "Archdiocese of Gwangju", href: "https://www.gjcatholic.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-incheon.svg", krName: "인천교구", enName: "Diocese of Incheon", href: "http://www.caincheon.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-jeju.svg", krName: "제주교구", enName: "Diocese of Jeju", href: "https://www.diocesejeju.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-jeonju.svg", krName: "전주교구", enName: "Diocese of Jeonju", href: "https://www.jcatholic.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-masan.svg", krName: "마산교구", enName: "Diocese of Masan", href: "https://cathms.kr", w: 0, h: 0 },
  { src: "/logo/logo-militury.svg", krName: "군종교구", enName: "Military Ordinariate", href: "https://www.gunjong.or.kr", w: 200, h: 120 },
  { src: "/logo/logo-suwon.svg", krName: "수원교구", enName: "Diocese of Suwon", href: "https://www.casuwon.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-uijeongbu.svg", krName: "의정부교구", enName: "Diocese of Uijeongbu", href: "http://ucatholic.or.kr", w: 0, h: 0 },
  { src: "/logo/logo-wonju.svg", krName: "원주교구", enName: "Diocese of Wonju", href: "http://www.wjcatholic.or.kr", w: 0, h: 0 },
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
        style={{ height: "100px", position: "relative", overflow: "hidden" }}
        className="flex items-center"
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel={t.logoAriaLabel}
        />
      </div>
      <div className="flex justify-center items-center w-full h-[calc(80dvh-200px)] flex-col gap-y-2">
        <SplitText
          text={t.welcomeText}
          className="heading01b text-[clamp(18px,3dvw,40px)] text-center font-black"
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
        <SplitText
          text="DAY OF THE EVENT"
          className="heading01b text-[clamp(18px,3dvw,40px)] text-center font-black"
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
        <CountDay />
      </div>
      <div
        style={{ height: "100px", position: "relative", overflow: "hidden" }}
        className="flex items-center"
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="right"
          logoHeight={48}
          gap={40}
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
