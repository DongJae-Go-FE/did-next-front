import Image from "next/image";

import {
  SubLayout,
  SubContentContainer,
  SubContentTitle,
} from "@/components/ui/common";

import LeftMenu from "@/components/ui/left-menu";
import SliderBackdrop from "@/components/ui/slider-backdrop";
import ChartPage from "@/components/page/chart-page";

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
          <h2 className="heading02b">교구별 신청 현황</h2>
          <ul className="flex gap-x-1 justify-center body01b">
            <li>참여 /</li>
            <li>신청 현황</li>
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
          <SubContentTitle>교구별 신청 현황</SubContentTitle>
          <ChartPage />
        </SubContentContainer>
      </SubLayout>
    </div>
  );
}
