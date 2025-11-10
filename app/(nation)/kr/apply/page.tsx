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

export default function Page() {
  return (
    <SubLayout>
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
        <ul className="w-full">
          <li>
            <Card className="w-full max-w-sm">
              <CardContent>
                <Image
                  src="/incheon-bg.webp"
                  width={400}
                  height={300}
                  priority
                  alt="인천교구 이미지"
                />
              </CardContent>
              <CardHeader>
                <CardTitle>인천 교구 WYD 신청</CardTitle>
                <CardDescription>
                  아래 버튼을 누르면 인천교구 WYD 신청을 합니다.
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex-col gap-2">
                <Link
                  className="h-12 bg-gray-900 text-white w-full flex justify-center items-center body01m rounded-md hover:bg-gray-800"
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973"
                >
                  신청하기
                </Link>
              </CardFooter>
            </Card>
          </li>
        </ul>
      </SubContentContainer>
    </SubLayout>
  );
}
