import { notFound } from "next/navigation";
import { locales, type Locale } from "../_lib/content";

import MainSlider from "@/components/main-slider";
import ApplyCtaSection from "@/components/page/apply-cta-section";
import FightPage from "@/components/page/fight-page";
import IntroPage from "@/components/page/intro-page";
import MapPage from "@/components/page/map-page";
import SponsorPage from "@/components/page/sponsor-page";
import PrayPage from "@/components/page/pray-page";

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
      <FightPage locale={locale} />

      <div className="w-screen min-h-[80dvh] bg-white px-8 py-16" id="section">
        <IntroPage locale={locale} />
      </div>
      <ApplyCtaSection locale={locale} />
      <div className="w-screen min-h-screen bg-white px-8 py-16" id="map">
        <MapPage locale={locale} />
      </div>
      <div
        className="w-screen h-fit bg-gray-100 px-8 py-16 scroll-mt-30"
        id="sponsor"
      >
        <SponsorPage locale={locale} />
      </div>
      <div
        className="w-screen h-[70dvh] max-[1079px]:h-auto bg-white px-8 py-16 bg-fixed bg-center bg-cover relative flex justify-center items-center gap-y-8 flex-col"
        style={{ backgroundImage: "url('/main/main05.jpeg')" }}
      >
        <PrayPage locale={locale} />
      </div>
    </main>
  );
}
