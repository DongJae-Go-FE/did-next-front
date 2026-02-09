"use client";

import MapEn from "../../map-en";

export default function MapPageEn() {
  return (
    <div className="w-full h-full">
      <h2 className="heading02b mb-8 max-[1079px]:text-[24px] max-[767px]:text-[18px]">
        Diocese Info & Application{" "}
        <span className="body02m">(Click on a marker)</span>
      </h2>
      <div className="flex h-[calc(100%-64px)] max-[767px]:h-full gap-x-4 max-[767px]:flex-col max-[767px]:gap-y-4">
        <MapEn />
      </div>
    </div>
  );
}
