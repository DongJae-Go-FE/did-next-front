import { notFound } from "next/navigation";
import { locales, type Locale } from "../_lib/content";

import MainSlider from "@/components/main-slider";
import ApplyCtaSection from "@/components/page/apply-cta-section";
import FightPage from "@/components/page/fight-page";
import IntroPage from "@/components/page/intro-page";
import MapPage from "@/components/page/map-page";
import SponsorPage from "@/components/page/sponsor-page";
import PrayPage from "@/components/page/pray-page";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeStr } = await params;

  if (!locales.includes(localeStr as Locale)) {
    notFound();
  }

  const locale = localeStr as Locale;

  return (
    <main className="w-full">
      <div className="relative bg-black">
        <MainSlider locale={locale} />
      </div>
      {/* <FightPage locale={locale} /> */}

      <div
        className="w-full min-h-[80dvh] max-[767px]:min-h-0 bg-white px-12 py-24 max-[1079px]:px-8 max-[1079px]:py-16 max-[767px]:px-5 max-[767px]:py-8"
        id="section"
      >
        <div className="max-w-[1400px] mx-auto">
          <IntroPage locale={locale} />
        </div>
      </div>
      {/* <ApplyCtaSection locale={locale} /> */}
      <div
        className="w-full bg-white px-12 py-24 max-[1079px]:px-8 max-[1079px]:py-16 max-[767px]:px-5 max-[767px]:py-12"
        id="map"
      >
        <div className="max-w-[1400px] mx-auto">
          <MapPage locale={locale} />
        </div>
      </div>
      {/* <div
        className="w-full h-fit bg-gray-100 px-12 py-24 max-[1079px]:px-8 max-[1079px]:py-16 max-[767px]:px-5 max-[767px]:py-12 scroll-mt-20"
        id="sponsor"
      >
        <div className="max-w-[1400px] mx-auto">
          <SponsorPage locale={locale} />
        </div>
      </div> */}
      {/* <div
        className="w-full h-[70dvh] max-[1079px]:h-auto bg-white px-12 py-24 max-[1079px]:px-8 max-[1079px]:py-16 max-[767px]:px-5 max-[767px]:py-12 bg-fixed bg-center bg-cover relative flex justify-center items-center gap-y-8 flex-col"
        style={{ backgroundImage: `url('${IMAGE_BASE}/did/main/main05.jpeg')` }}
      >
        <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center gap-y-8">
          <PrayPage locale={locale} />
        </div>
      </div> */}
    </main>
  );
}
