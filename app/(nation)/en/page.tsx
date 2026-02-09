import MainSliderEn from "@/components/main-slider-en";
import FightPageEn from "@/components/page/en/fight-page";
import IntroPageEn from "@/components/page/en/intro-page";
import MapPageEn from "@/components/page/en/map-page";
import ChartPageEn from "@/components/page/en/chart-page";
import SponsorPageEn from "@/components/page/en/sponsor-page";
import PrayPageEn from "@/components/page/en/pray-page";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative bg-black">
        <MainSliderEn />
      </div>
      <FightPageEn />
      <div className="w-screen min-h-[80dvh] bg-white px-8 py-16" id="section">
        <IntroPageEn />
      </div>
      <div className="w-screen min-h-screen bg-white px-8 py-16">
        <MapPageEn />
      </div>
      <div className="w-screen h-fit bg-white px-8 py-16 max-[767]:hidden">
        <ChartPageEn />
      </div>
      <div className="w-screen h-fit bg-gray-100 px-8 py-16">
        <SponsorPageEn />
      </div>
      <div
        className="w-screen h-[70dvh] max-[1079px]:h-auto bg-white px-8 py-16 bg-fixed bg-center bg-cover relative flex justify-center items-center gap-y-8 flex-col"
        style={{ backgroundImage: "url('/main/main05.jpeg')" }}
      >
        <PrayPageEn />
      </div>
    </main>
  );
}
