import Link from "next/link";
import { content, type Locale } from "@/app/(nation)/_lib/content";

export default function ApplyCtaSection({ locale = "kr" }: { locale?: Locale }) {
  const t = content[locale].applyCta;

  return (
    <section className="w-full bg-[#F3F4F6] px-12 py-20 max-[767px]:px-5">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-8 border-y border-[#D9DEE7] py-8 max-[1079px]:flex-col max-[1079px]:items-start">
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
