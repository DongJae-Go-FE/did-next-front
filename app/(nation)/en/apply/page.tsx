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
    name: "Archdiocese of Seoul",
    image: "/apply/seoul.webp",
    alt: "Archdiocese of Seoul",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Incheon",
    image: "/apply/incheon.webp",
    alt: "Diocese of Incheon",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Suwon",
    image: "/apply/suwon.webp",
    alt: "Diocese of Suwon",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Uijeongbu",
    image: "/apply/uijeongbu.webp",
    alt: "Diocese of Uijeongbu",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Chuncheon",
    image: "/apply/chuncheon.webp",
    alt: "Diocese of Chuncheon",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Wonju",
    image: "/apply/wonju.webp",
    alt: "Diocese of Wonju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Daejeon",
    image: "/apply/daejeon.webp",
    alt: "Diocese of Daejeon",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Cheongju",
    image: "/apply/cheongju.webp",
    alt: "Diocese of Cheongju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Archdiocese of Daegu",
    image: "/apply/daegu.webp",
    alt: "Archdiocese of Daegu",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Busan",
    image: "/apply/busan.webp",
    alt: "Diocese of Busan",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Masan",
    image: "/apply/masan.webp",
    alt: "Diocese of Masan",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Andong",
    image: "/apply/andong.webp",
    alt: "Diocese of Andong",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Archdiocese of Gwangju",
    image: "/apply/gwangju.webp",
    alt: "Archdiocese of Gwangju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Jeonju",
    image: "/apply/jeonju.webp",
    alt: "Diocese of Jeonju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Diocese of Jeju",
    image: "/apply/jeju.webp",
    alt: "Diocese of Jeju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
  },
  {
    name: "Military Ordinariate",
    image: "/apply/gun.webp",
    alt: "Military Ordinariate",
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
          alt="Sub page background"
          priority
          className="object-cover object-center w-full h-full animate-pan-zoom-center-small"
        />
        <div className="flex flex-col gap-y-2 text-white z-40 relative justify-center animate-fadeIn2 opacity-0">
          <h2 className="heading02b">DID Application</h2>
          <ul className="flex gap-x-1 justify-center body01b">
            <li>Participate /</li>
            <li>Apply</li>
          </ul>
        </div>
        <SliderBackdrop />
      </div>
      <SubLayout className="relative">
        <LeftMenu
          title="Participate"
          menus={[
            {
              label: "DID Application",
              href: "/en/apply",
            },
          ]}
        />
        <SubContentContainer>
          <SubContentTitle>DID Application</SubContentTitle>
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
                  <Card className="w-full max-w-full px-4">
                    <CardContent className="relative h-50 overflow-hidden">
                      <Image
                        src={image}
                        fill
                        className="object-cover"
                        priority
                        alt={alt}
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle title={`${name} WYD Application`}>
                        {name} WYD Application
                      </CardTitle>
                      <CardDescription
                        className="truncate"
                        title={`Click to apply for WYD through ${name}.`}
                      >
                        Click to apply for WYD through {name}.
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="flex-col gap-2 px-0">
                      <Link
                        className="h-12 bg-gray-900 text-white w-full flex justify-center items-center body01m rounded-md hover:bg-gray-800"
                        target="_blank"
                        href={href}
                      >
                        Apply
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
