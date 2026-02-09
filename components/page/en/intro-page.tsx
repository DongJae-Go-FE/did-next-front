"use client";

import Image from "next/image";

import LogoLoop from "@/components/logo-loop";
import SplitText from "@/components/split-text";

import CountDay from "../../count-day";

export default function IntroPageEn() {
  const techLogos = [
    {
      node: (
        <Image
          src="/logo/logo-andong.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Andong"
        />
      ),
      title: "Diocese of Andong",
      href: "https://www.acatholic.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-busan.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Busan"
        />
      ),
      title: "Diocese of Busan",
      href: "http://www.catholicbusan.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-cheongju.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Cheongju"
        />
      ),
      title: "Diocese of Cheongju",
      href: "https://www.cdcj.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-chuncheon.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Chuncheon"
        />
      ),
      title: "Diocese of Chuncheon",
      href: "https://www.cccatholic.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-daegu.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Archdiocese of Daegu"
        />
      ),
      title: "Archdiocese of Daegu",
      href: "https://www.daegu-archdiocese.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-daejeon.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Daejeon"
        />
      ),
      title: "Diocese of Daejeon",
      href: "https://www.djcatholic.or.kr/home",
    },
    {
      node: (
        <Image
          src="/logo/logo-gwangju.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Archdiocese of Gwangju"
        />
      ),
      title: "Archdiocese of Gwangju",
      href: "https://www.gjcatholic.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-incheon.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Incheon"
        />
      ),
      title: "Diocese of Incheon",
      href: "http://www.caincheon.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-jeju.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Jeju"
        />
      ),
      title: "Diocese of Jeju",
      href: "https://www.diocesejeju.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-jeonju.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Jeonju"
        />
      ),
      title: "Diocese of Jeonju",
      href: "https://www.jcatholic.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-masan.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Masan"
        />
      ),
      title: "Diocese of Masan",
      href: "https://cathms.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-militury.svg"
          width={200}
          height={120}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Military Ordinariate"
        />
      ),
      title: "Military Ordinariate",
      href: "https://www.gunjong.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-suwon.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Suwon"
        />
      ),
      title: "Diocese of Suwon",
      href: "https://www.casuwon.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-uijeongbu.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Uijeongbu"
        />
      ),
      title: "Diocese of Uijeongbu",
      href: "http://ucatholic.or.kr",
    },
    {
      node: (
        <Image
          src="/logo/logo-wonju.svg"
          width={0}
          height={0}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="Diocese of Wonju"
        />
      ),
      title: "Diocese of Wonju",
      href: "http://www.wjcatholic.or.kr",
    },
  ];

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
          ariaLabel="Diocese logos"
        />
      </div>
      <div className="flex justify-center items-center w-full h-[calc(80dvh-200px)] flex-col gap-y-2">
        <SplitText
          text="Welcome to WYD 2027 SEOUL DID."
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
          ariaLabel="Diocese logos"
        />
      </div>
    </>
  );
}
