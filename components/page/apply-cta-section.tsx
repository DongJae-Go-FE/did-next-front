import Link from "next/link";

const content = {
  kr: {
    label: "DID APPLY",
    title: "DiD 신청하기",
    desc: "교구별 신청 페이지에서 참여 가능한 교구를 확인하고 바로 신청할 수 있습니다.",
    cta: "신청 페이지 이동",
    href: "/kr/apply",
  },
  en: {
    label: "DID APPLY",
    title: "Apply for DiD",
    desc: "Check available dioceses on the application page and apply right away.",
    cta: "Go to Application",
    href: "/en/apply",
  },
};

export default function ApplyCtaSection({ locale = "kr" }: { locale?: "kr" | "en" }) {
  const t = content[locale];

  return (
    <section className="w-screen bg-[#F3F4F6] px-8 py-14 max-[767px]:px-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 border-y border-[#D9DEE7] py-8 max-[1079px]:flex-col max-[1079px]:items-start">
        <div className="flex items-start gap-4 max-[767px]:gap-3">
          <div className="mt-1 h-12 w-1 rounded-full bg-[#0047BB] max-[767px]:h-10" />
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2D63C8]">
              {t.label}
            </p>
            <h2 className="mt-2 heading02b text-[clamp(24px,4vw,40px)] leading-tight text-[#111827]">
              {t.title}
            </h2>
            <p className="mt-3 body01m text-[clamp(14px,1.7vw,18px)] text-[#4B5563]">
              {t.desc}
            </p>
          </div>
        </div>
        <Link
          href={t.href}
          className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-[#C7D2E5] bg-white pl-6 pr-4 text-base font-semibold text-[#111827] transition-all duration-200 hover:border-[#0047BB] hover:text-[#0047BB] max-[767px]:ml-auto"
        >
          {t.cta}
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0047BB] text-white transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
