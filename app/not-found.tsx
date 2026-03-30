"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const t = {
  kr: {
    title: "페이지를 찾을 수 없습니다",
    desc: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
    btn: "홈으로 돌아가기",
  },
  en: {
    title: "Page Not Found",
    desc: "The page you requested does not exist or has been moved.",
    btn: "Go to Home",
  },
};

function detectLocale(pathname: string | null): "kr" | "en" {
  if (pathname?.startsWith("/en")) return "en";
  if (pathname?.startsWith("/kr")) return "kr";
  if (typeof navigator !== "undefined") {
    const lang = navigator.language || navigator.languages?.[0] || "";
    if (lang.startsWith("ko")) return "kr";
    if (lang.startsWith("en")) return "en";
  }
  return "kr";
}

export default function NotFound() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const c = t[locale];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #0047BB 0%, transparent 50%), radial-gradient(circle at 70% 60%, #DC2626 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <Link href={`/${locale}`}>
          <Image src="/logo.svg" alt="WYD 2027 DID" width={80} height={54} />
        </Link>
        <h1 className="mt-8 text-9xl font-bold max-[767px]:text-7xl">
          <span style={{ color: "#0047BB" }}>4</span>
          <span style={{ color: "#DC2626" }}>0</span>
          <span style={{ color: "#0047BB" }}>4</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-[767px]:text-lg">
          {c.title}
        </p>
        <p className="mt-2 text-sm text-gray-400">{c.desc}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white text-sm font-medium transition-all hover:opacity-90 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #0047BB 0%, #DC2626 100%)",
          }}
        >
          {c.btn}
        </Link>
      </div>
    </div>
  );
}
