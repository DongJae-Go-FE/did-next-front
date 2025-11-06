import { cn } from "@/lib/utils";

import SliderBackdrop from "../ui/slider-backdrop";

import {
  SlideSmallText,
  SlideSmallTextContainer,
  SlideText,
  SlideTextContainer,
} from "../ui/slide-text";

export default function SliderItem01() {
  return (
    <div
      className={cn(
        "max-[727px]:px-[8dvw] max-[727px]:py-[30dvh] max-[1080px]:px-[10dvw] max-[1080px]:py-[20dvh] px-[120px]",
        "pb-40 flex h-screen w-screen flex-col justify-end bg-cover bg-no-repeat relative p-0 overflow-hidden bg-center"
      )}
      style={{
        backgroundImage: "url('/main/main01.jpeg')",
      }}
    >
      <div className="text-white heading01b absolute top-[30dvh] z-40 pl-8 flex flex-col gap-y-1">
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
      <div className="w-[200vw] h-[200vh] bg-black z-30 absolute animate-fade-out-up-left rounded-full -right-[25dvw] -bottom-[25dvw] max-[1080px]:-bottom-[50dvw]" />
      <h2
        className="absolute right-0 pr-5 z-40 bottom-[3.5dvw] heading02b text-white text-[clamp(30px,7dvw,130px)] animate-fadeIn opacity-0 max-[1079px]:hidden"
        style={{ animationDelay: "3s" }}
      >
        DAYS IN DIOCESE
      </h2>
      <SliderBackdrop />
    </div>
  );
}
