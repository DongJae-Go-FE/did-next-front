import MainSlider from "@/components/main-slider";
import IntroPage from "@/components/page/intro-page";
import MapPage from "@/components/page/map-page";
import SponsorPage from "@/components/page/sponsor-page";
import PrayPage from "@/components/page/pray-page";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative bg-black">
        <MainSlider />
      </div>
      <div className="w-screen min-h-[80dvh] bg-white px-8 py-16" id="section">
        <IntroPage />
      </div>
      <div className="w-screen min-h-screen bg-white px-8 py-16">
        <MapPage />
      </div>
      <div className="w-screen min-h-screen bg-gray-100 px-8 py-16">
        <SponsorPage />
      </div>
      <div
        className="w-screen h-[70dvh] max-[1079px]:h-auto bg-white px-8 py-16 bg-fixed bg-center bg-cover relative flex justify-center items-center gap-y-8 flex-col"
        style={{ backgroundImage: "url('/main/main05.jpeg')" }}
      >
        <PrayPage />
      </div>
    </main>
  );
}
