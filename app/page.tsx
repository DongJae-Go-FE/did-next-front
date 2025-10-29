import MainSlider from "@/components/main-slider";
import IntroPage from "@/components/page/intro-page";
import MapPage from "@/components/page/map-page";
import SponsorPage from "@/components/page/sponsor-page";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative bg-black">
        <MainSlider />
      </div>
      <div className="w-screen min-h-screen bg-white px-8 py-16" id="section">
        <IntroPage />
      </div>
      <div className="w-screen min-h-screen bg-white px-8 py-16">
        <MapPage />
      </div>
      <div className="w-screen min-h-screen bg-gray-100 px-8 py-16">
        <SponsorPage />
      </div>
      <div
        className="w-screen h-screen bg-white px-8 py-16 bg-fixed bg-center bg-cover relative"
        style={{ backgroundImage: "url('/main/main05.jpeg')" }}
      >
        <h2 className="heading02b mb-8 text-white relative z-50 max-[1079px]:text-[24px] max-[767px]:text-[18px]">
          묵주기도
        </h2>
        <div className="bg-backdrop" />
      </div>
    </main>
  );
}
