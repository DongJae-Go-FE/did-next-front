"use client";

import Image from "next/image";
import LogoLoop from "@/components/logo-loop";
import type { Locale } from "@/app/(nation)/_lib/content";

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

export default function IntroduceDioceseBanner({ locale = "kr" }: { locale?: Locale }) {
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

  const ariaLabel = locale === "kr" ? "교구 로고 모음" : "Diocese logos";

  return (
    <div className="w-full mt-12 mb-8">
      <div
        style={{ height: "80px", position: "relative", overflow: "hidden" }}
        className="flex items-center"
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={40}
          gap={36}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel={ariaLabel}
        />
      </div>

      <div className="w-full mt-8 flex justify-center">
        <Image
          src="/logo.svg"
          alt="WYD SEOUL 2027"
          width={120}
          height={80}
          className="object-contain"
        />
      </div>

      <div
        style={{ height: "80px", position: "relative", overflow: "hidden" }}
        className="flex items-center mt-8"
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="right"
          logoHeight={40}
          gap={36}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel={ariaLabel}
        />
      </div>
    </div>
  );
}
