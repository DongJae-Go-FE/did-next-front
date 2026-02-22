import Image from "next/image";

export default function SliderItem000() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#94DDFE]">
      <Image
        src="/main/main00-0.jpeg"
        className="w-full h-full object-contain aspect-video"
        fill
        sizes="100vw"
        alt="WYD 2027 DID 메인 이미지 첫번째 추가 이미지"
      />
    </div>
  );
}
