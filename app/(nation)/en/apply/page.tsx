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
    name: "Diocese of Andong",
    image: "/apply/andong.webp",
    alt: "Diocese of Andong",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 10,
    total: 50,
  },
  {
    name: "Diocese of Busan",
    image: "/apply/busan.webp",
    alt: "Diocese of Busan",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 90,
    total: 170,
  },
  {
    name: "Diocese of Cheongju",
    image: "/apply/cheongju.webp",
    alt: "Diocese of Cheongju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 25,
    total: 90,
  },
  {
    name: "Diocese of Chuncheon",
    image: "/apply/chuncheon.webp",
    alt: "Diocese of Chuncheon",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 20,
    total: 80,
  },
  {
    name: "Archdiocese of Daegu",
    image: "/apply/daegu.webp",
    alt: "Archdiocese of Daegu",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 70,
    total: 160,
  },
  {
    name: "Diocese of Daejeon",
    image: "/apply/daejeon.webp",
    alt: "Diocese of Daejeon",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 55,
    total: 130,
  },
  {
    name: "Archdiocese of Gwangju",
    image: "/apply/gwangju.webp",
    alt: "Archdiocese of Gwangju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 60,
    total: 140,
  },
  {
    name: "Diocese of Incheon",
    image: "/apply/incheon.jpg",
    alt: "Diocese of Incheon",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 45,
    total: 120,
  },
  {
    name: "Diocese of Jeju",
    image: "/apply/jeju.webp",
    alt: "Diocese of Jeju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 12,
    total: 40,
  },
  {
    name: "Diocese of Jeonju",
    image: "/apply/jeonju.webp",
    alt: "Diocese of Jeonju",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 35,
    total: 110,
  },
  {
    name: "Diocese of Masan",
    image: "/apply/masan.webp",
    alt: "Diocese of Masan",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 18,
    total: 70,
  },
  {
    name: "Military Ordinariate",
    image: "/apply/gun.webp",
    alt: "Military Ordinariate",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 40,
    total: 100,
  },
  {
    name: "Diocese of Suwon",
    image: "/apply/suwon.webp",
    alt: "Diocese of Suwon",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 80,
    total: 150,
  },
  {
    name: "Diocese of Uijeongbu",
    image: "/apply/uijeongbu.webp",
    alt: "Diocese of Uijeongbu",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973",
    applied: 30,
    total: 100,
  },
  {
    name: "Diocese of Wonju",
    image: "/apply/wonju.webp",
    alt: "Diocese of Wonju",
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
            {
              label: "Application Status",
              href: "/en/status",
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
            {data.map(({ alt, href, image, name, applied, total }) => {
              const rate = Math.round((applied / total) * 100);
              const key = name.replace(/\s/g, "");
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
                      <CardTitle title={`${name} DID Application`}>
                        {name} DID Application
                      </CardTitle>
                      <CardDescription
                        className="truncate"
                        title={`Click the button to apply for ${name} DID.`}
                      >
                        Click the button to apply for {name} DID.
                      </CardDescription>
                      <div className="mt-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-gray-600">
                            Application Rate
                          </span>
                          <span className="text-xs font-semibold text-gray-800">
                            {rate}% ({applied}/{total})
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                          <style>{`
                            @keyframes fill-${key} {
                              from { width: 0%; }
                              to { width: ${rate}%; }
                            }
                          `}</style>
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              backgroundColor: "#0047BB",
                              animation: `fill-${key} 1s ease-out forwards`,
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
