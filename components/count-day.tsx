import CountUp from "@/components/count-up";
import type { Locale } from "@/app/(nation)/_lib/content";

const COUNTDOWN_COPY: Record<Locale, { prefix: string; suffix: string }> = {
  kr: { prefix: "행사까지 D-", suffix: "" },
  en: { prefix: "D-", suffix: " until the event" },
  es: { prefix: "D-", suffix: " para el evento" },
  fr: { prefix: "J-", suffix: " avant l'événement" },
  pt: { prefix: "D-", suffix: " para o evento" },
  it: { prefix: "D-", suffix: " all'evento" },
  pl: { prefix: "D-", suffix: " do wydarzenia" },
  de: { prefix: "D-", suffix: " bis zur Veranstaltung" },
  zh: { prefix: "距活动还有 ", suffix: " 天" },
  "zh-tw": { prefix: "距活動還有 ", suffix: " 天" },
  fil: { prefix: "D-", suffix: " bago ang kaganapan" },
  ja: { prefix: "開催まであと", suffix: "日" },
  vi: { prefix: "Còn ", suffix: " ngày đến sự kiện" },
};

export default function CountDay({ locale = "kr" }: { locale?: Locale }) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(2027, 6, 29);
  const t = COUNTDOWN_COPY[locale];
  const diff = Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="text-black heading01b text-[clamp(28px,6vw,96px)] text-center leading-tight">
      {t.prefix}
      <CountUp
        from={0}
        to={diff}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
      {t.suffix}
    </div>
  );
}
