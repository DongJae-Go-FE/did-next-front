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
    name: "서울대교구",
    image: "/incheon-bg.webp",
    alt: "서울대교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "인천교구",
    image: "/incheon-bg.webp",
    alt: "인천교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "수원교구",
    image: "/incheon-bg.webp",
    alt: "수원교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "의정부교구",
    image: "/incheon-bg.webp",
    alt: "의정부교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "춘천교구",
    image: "/incheon-bg.webp",
    alt: "춘천교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "원주교구",
    image: "/incheon-bg.webp",
    alt: "원주교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "대전교구",
    image: "/incheon-bg.webp",
    alt: "대전교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "청주교구",
    image: "/incheon-bg.webp",
    alt: "청주교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "대구대교구",
    image: "/incheon-bg.webp",
    alt: "대구대교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "부산교구",
    image: "/incheon-bg.webp",
    alt: "부산교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "마산교구",
    image: "/incheon-bg.webp",
    alt: "마산교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "안동교구",
    image: "/incheon-bg.webp",
    alt: "안동교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "광주대교구",
    image: "/incheon-bg.webp",
    alt: "광주대교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "전주교구",
    image: "/incheon-bg.webp",
    alt: "전주교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "제주교구",
    image: "/incheon-bg.webp",
    alt: "제주교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "군종교구",
    image: "/incheon-bg.webp",
    alt: "군종교구 이미지",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
];

export default function Page() {
  return (
    <div className="pt-30">
      <div className="w-full h-75 relative overflow-hidden flex justify-center items-center">
        <Image
          src="/visual.jpg"
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
              label: "묵주기도 10억단 봉헌 운동",
              href: "/",
            },
            {
              label: "WYD 십자가 순례",
              href: "/",
            },
            {
              label: "참여 신청",
              href: "/",
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
            {data.map(({ alt, href, image, name }) => {
              return (
                <li key={name}>
                  <Card className="w-full max-w-full">
                    <CardContent>
                      <Image
                        src={image}
                        className="w-full"
                        width={400}
                        height={300}
                        priority
                        alt={alt}
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle title={`${name} 교구 WYD 신청`}>
                        {name} 교구 WYD 신청
                      </CardTitle>
                      <CardDescription
                        className="truncate"
                        title={`버튼을 누르면 ${name} 교구 WYD 신청을 합니다.`}
                      >
                        버튼을 누르면 {name} 교구 WYD 신청을 합니다.
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="flex-col gap-2">
                      <Link
                        className="h-12 bg-gray-900 text-white w-full flex justify-center items-center body01m rounded-md hover:bg-gray-800"
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
