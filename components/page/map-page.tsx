"use client";

import Map from "../map";

export default function MapPage() {
  return (
    <div className="w-full h-full">
      <h2 className="heading02b mb-8 max-[1079px]:text-[24px] max-[767px]:text-[18px]">
        교구 소개 및 신청 <span className="body02m">(마커를 클릭해주세요)</span>
      </h2>
      <div className="flex h-[calc(100%-64px)] max-[767px]:h-full gap-x-4 max-[767px]:flex-col max-[767px]:gap-y-4">
        <Map />
      </div>
    </div>
  );
}
