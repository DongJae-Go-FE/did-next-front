import Image from "next/image";

import SliderBackdrop from "../ui/slider-backdrop";

import {
  SlideSmallText,
  SlideSmallTextContainer,
  SlideText,
  SlideTextContainer,
} from "../ui/slide-text";

export default function SliderItem04() {
  return (
    <div className="w-full h-full bg-gray-900 overflow-hidden relative">
      <Image
        src="/main/main04.jpeg"
        className="w-full h-full animate-pan-zoom bg-cover bg-left-bottom object-cover object-center"
        fill
        priority
        sizes="100vw"
        alt="WYD 2027 DID 메인 이미지 네번째"
      />
      <div className="text-white heading03b absolute top-[30dvh] z-40 pl-8 flex flex-col gap-y-1 right-[5dvw]">
        <SlideTextContainer>
          <SlideText style={{ animationDelay: "1.2s" }}>
            용기를 내어라.
          </SlideText>
        </SlideTextContainer>
        <SlideTextContainer>
          <SlideText style={{ animationDelay: "1.8s" }}>
            내가 세상을 이겼다.
          </SlideText>
        </SlideTextContainer>
        <SlideSmallTextContainer>
          <SlideSmallText style={{ animationDelay: "2.3s" }}>
            (요한 16,33)
          </SlideSmallText>
        </SlideSmallTextContainer>
      </div>
      <SliderBackdrop />
    </div>
  );
}
