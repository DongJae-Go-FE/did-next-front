"use client";

import Image from "next/image";

import LogoLoop from "@/components/logo-loop";
import SplitText from "@/components/split-text";

import CountDay from "../count-day";

export default function IntroPage() {
  const techLogos = [
    {
      node: (
        <Image
          src="/logo/logo-andong.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="안동교구"
        />
      ),
      title: "안동교구",
      href: "",
    },
    {
      node: (
        <Image
          src="./logo/logo-busan.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="부산교구"
        />
      ),
      title: "부산교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-cheongju.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="청주교구"
        />
      ),
      title: "청주교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-chuncheon.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="전주교구"
        />
      ),
      title: "전주교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-daegu.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="대구교구"
        />
      ),
      title: "대구교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-daejeon.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="대전교구"
        />
      ),
      title: "대전교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-gwangju.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="광주교구"
        />
      ),
      title: "광주교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-incheon.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="인천교구"
        />
      ),
      title: "인천교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-jeju.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="제주교구"
        />
      ),
      title: "제주교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-jeonju.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="전주교구"
        />
      ),
      title: "전주교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-masan.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="마산교구"
        />
      ),
      title: "마산교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-militury.svg"
          width={200}
          height={120}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="군종교구"
        />
      ),
      title: "군종교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-suwon.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="수원교구"
        />
      ),
      title: "수원교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-uijeongbu.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="의정부교구"
        />
      ),
      title: "의정부교구",
      href: "",
    },
    {
      node: (
        <Image
          src="../logo/logo-wonju.svg"
          width={200}
          height={40}
          className="w-auto h-10 cursor-pointer"
          priority
          alt="원주교구"
        />
      ),
      title: "원주교구",
      href: "",
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
          ariaLabel="Technology partners"
        />
      </div>
      <div className="flex justify-center items-center w-full h-[calc(100dvh-200px)] flex-col gap-y-2">
        <SplitText
          text="WYD 2027 SEOUL DID 페이지에 오신걸 환영합니다."
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
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
}
