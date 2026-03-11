import Image from "next/image";

import SliderBackdrop from "../../ui/slider-backdrop";

import {
  SlideSmallText,
  SlideText,
} from "../../ui/slide-text";

export default function SliderItem02En() {
  return (
    <div className="w-full h-full bg-gray-900 overflow-hidden relative">
      <Image
        src="/main/main02.jpeg"
        className="w-full h-full animate-pan-zoom bg-cover bg-left-bottom object-cover object-center"
        fill
        sizes="100vw"
        alt="WYD 2027 DID Main Image 2"
      />
      <div className="text-white heading01b absolute top-[30dvh] z-40 pl-8 pr-4 flex flex-col gap-y-2">
        <div className="h-[clamp(30px,9dvw,90px)] overflow-hidden">
          <SlideText style={{ animationDelay: "1.2s" }} className="text-[clamp(20px,6dvw,60px)]">
            Take courage.
          </SlideText>
        </div>
        <div className="h-[clamp(30px,9dvw,90px)] overflow-hidden">
          <SlideText style={{ animationDelay: "1.8s" }} className="text-[clamp(20px,6dvw,60px)]">
            I have conquered
          </SlideText>
        </div>
        <div className="h-[clamp(30px,9dvw,90px)] overflow-hidden">
          <SlideText style={{ animationDelay: "2.2s" }} className="text-[clamp(20px,6dvw,60px)]">
            the world.
          </SlideText>
        </div>
        <div className="h-[clamp(28px,7.5dvw,81px)] overflow-hidden">
          <SlideSmallText style={{ animationDelay: "2.7s" }} className="text-[clamp(16px,3dvw,36px)]">
            (John 16:33)
          </SlideSmallText>
        </div>
      </div>
      <SliderBackdrop />
    </div>
  );
}
