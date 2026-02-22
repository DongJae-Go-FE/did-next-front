import Image from "next/image";

export default function SliderItem00() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#94DDFE]">
      <Image
        src="/main/main00.jpeg"
        className="w-full h-full object-contain"
        fill
        sizes="100vw"
        priority
        alt="WYD 2027 DID 메인 이미지 첫번째"
      />
    </div>
  );
}
