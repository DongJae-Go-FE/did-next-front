import Link from "next/link";
import Image from "next/image";

import {
  SubLayout,
  SubContentContainer,
  SubContentTitle,
} from "@/components/ui/common";

import LeftMenu from "@/components/ui/left-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SliderBackdrop from "@/components/ui/slider-backdrop";

const data = [
  {
    name: "안동교구",
    image: "/apply/andong.webp",
    alt: "안동교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 10,
    total: 50,
  },
  {
    name: "부산교구",
    image: "/apply/busan.webp",
    alt: "부산교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 90,
    total: 170,
  },
  {
    name: "청주교구",
    image: "/apply/cheongju.webp",
    alt: "청주교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 25,
    total: 90,
  },
  {
    name: "춘천교구",
    image: "/apply/chuncheon.webp",
    alt: "춘천교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 20,
    total: 80,
  },
  {
    name: "대구대교구",
    image: "/apply/daegu.webp",
    alt: "대구대교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 70,
    total: 160,
  },
  {
    name: "대전교구",
    image: "/apply/daejeon.webp",
    alt: "대전교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 55,
    total: 130,
  },
  {
    name: "광주대교구",
    image: "/apply/gwangju.webp",
    alt: "광주대교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 60,
    total: 140,
  },
  {
    name: "인천교구",
    image: "/apply/incheon.jpg",
    alt: "인천교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 45,
    total: 120,
  },
  {
    name: "제주교구",
    image: "/apply/jeju.webp",
    alt: "제주교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 12,
    total: 40,
  },
  {
    name: "전주교구",
    image: "/apply/jeonju.webp",
    alt: "전주교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 35,
    total: 110,
  },
  {
    name: "마산교구",
    image: "/apply/masan.webp",
    alt: "마산교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 18,
    total: 70,
  },
  {
    name: "군종교구",
    image: "/apply/gun.webp",
    alt: "군종교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 40,
    total: 100,
  },
  {
    name: "수원교구",
    image: "/apply/suwon.webp",
    alt: "수원교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 80,
    total: 150,
  },
  {
    name: "의정부교구",
    image: "/apply/uijeongbu.webp",
    alt: "의정부교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 30,
    total: 100,
  },
  {
    name: "원주교구",
    image: "/apply/wonju.webp",
    alt: "원주교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 15,
    total: 60,
  },
];

export default function Page() {
  return (
    <div className="pt-30">
      <div className="w-full h-75 relative overflow-hidden flex justify-center items-center">
        <Image
          src="/visual.png"
          sizes="100vw"
          fill
          alt="서브페이지 배경"
          priority
          className="object-cover object-center w-full h-full animate-pan-zoom-center-small"
        />
        <div className="flex flex-col gap-y-2 text-white z-40 relative justify-center animate-fadeIn2 opacity-0">
          <h2 className="heading02b">DID 신청</h2>
          <ul className="flex gap-x-1 justify-center body01b">
            <li>참여 /</li>
            <li>신청</li>
          </ul>
        </div>
        <SliderBackdrop />
      </div>
      <SubLayout className="relative">
        <LeftMenu
          title="참여"
          menus={[
            {
              label: "DID 신청",
              href: "/kr/apply",
            },
            {
              label: "교구별 신청 현황",
              href: "/kr/status",
            },
          ]}
        />
        <SubContentContainer>
          <SubContentTitle>DID 신청</SubContentTitle>
          <ul
            className="w-full grid gap-4"
            style={{
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(300px,100%), 1fr))",
            }}
          >
            {data.map(({ alt, href, image, name, applied, total }) => {
              const rate = Math.round((applied / total) * 100);
              return (
                <li key={name}>
                  <Card className="w-full max-w-full px-4">
                    <CardContent className="relative h-44 overflow-hidden">
                      <Image
                        src={image}
                        fill
                        className="object-cover"
                        priority
                        alt={alt}
                      />
                    </CardContent>
                    <CardHeader className="px-0">
                      <CardTitle title={`${name} 교구 DID 신청`}>
                        {name} 교구 DID 신청
                      </CardTitle>
                      <CardDescription
                        className="truncate"
                        title={`버튼을 누르면 ${name} 교구 DID 신청을 합니다.`}
                      >
                        버튼을 누르면 {name} 교구 DID 신청을 합니다.
                      </CardDescription>
                      <div className="mt-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-gray-600">
                            신청률
                          </span>
                          <span className="text-xs font-semibold text-gray-800">
                            {rate}% ({applied}/{total})
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                          <style>{`
                            @keyframes fill-${name.replace(/\s/g, "")} {
                              from { width: 0%; }
                              to { width: ${rate}%; }
                            }
                          `}</style>
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              backgroundColor: "#0047BB",
                              animation: `fill-${name.replace(/\s/g, "")} 1s ease-out forwards`,
                            }}
                          />
                        </div>
                      </div>
                    </CardHeader>

                    <CardFooter className="flex-col gap-2 px-0">
                      <Link
                        className="h-12 text-white w-full flex justify-center items-center body01m rounded-md transition-colors"
                        style={{ backgroundColor: "#0047BB" }}
                        target="_blank"
                        href={href}
                      >
                        신청하기
                      </Link>
                    </CardFooter>
                  </Card>
                </li>
              );
            })}
          </ul>
        </SubContentContainer>
      </SubLayout>
    </div>
  );
}
