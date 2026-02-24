import Image from "next/image";
import SliderBackdrop from "../ui/slider-backdrop";

export default function SliderItem00() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/main/main00.jpeg"
        className="w-full h-full object-cover animate-pan-zoom-center"
        fill
        sizes="100vw"
        priority
        alt="WYD 2027 DID 메인 이미지 첫번째"
      />
      <h2 className="heading02b text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-7xl max-[1080px]:text-5xl max-[769px]:text-3xl animate-bottomUp opacity-0 w-full">
        2027 WYD 교구대회 <br />
        COMING SOON
      </h2>
      <div className="absolute top-0 left-0 z-10 h-full w-full backdrop-brightness-30 animate-fadeIn2 opacity-0" />
    </div>
  );
}
