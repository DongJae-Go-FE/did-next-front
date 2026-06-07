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
  es: {
    title: "Página no encontrada",
    desc: "La página solicitada no existe o ha sido movida.",
    btn: "Volver al inicio",
  },
  fr: {
    title: "Page introuvable",
    desc: "La page demandée n'existe pas ou a été déplacée.",
    btn: "Retour à l'accueil",
  },
  pt: {
    title: "Página não encontrada",
    desc: "A página solicitada não existe ou foi movida.",
    btn: "Voltar ao início",
  },
  it: {
    title: "Pagina non trovata",
    desc: "La pagina richiesta non esiste o è stata spostata.",
    btn: "Torna alla home",
  },
  pl: {
    title: "Nie znaleziono strony",
    desc: "Żądana strona nie istnieje lub została przeniesiona.",
    btn: "Wróć do strony głównej",
  },
  de: {
    title: "Seite nicht gefunden",
    desc: "Die angeforderte Seite existiert nicht oder wurde verschoben.",
    btn: "Zur Startseite",
  },
  zh: {
    title: "找不到页面",
    desc: "您请求的页面不存在或已被移动。",
    btn: "返回首页",
  },
  "zh-tw": {
    title: "找不到頁面",
    desc: "您請求的頁面不存在或已被移動。",
    btn: "返回首頁",
  },
  fil: {
    title: "Hindi Mahanap ang Pahina",
    desc: "Ang hiniling na pahina ay hindi umiiral o inilipat na.",
    btn: "Bumalik sa Home",
  },
  ja: {
    title: "ページが見つかりません",
    desc: "お探しのページは存在しないか、移動しました。",
    btn: "ホームへ戻る",
  },
  vi: {
    title: "Không tìm thấy trang",
    desc: "Trang bạn yêu cầu không tồn tại hoặc đã được di chuyển.",
    btn: "Về trang chủ",
  },
};

type NotFoundLocale = keyof typeof t;

const NOT_FOUND_LOCALES = Object.keys(t) as NotFoundLocale[];

function detectLocale(pathname: string | null): NotFoundLocale {
  const firstSegment = pathname?.split("/")[1] ?? "";
  if (NOT_FOUND_LOCALES.includes(firstSegment as NotFoundLocale)) {
    return firstSegment as NotFoundLocale;
  }
  if (typeof navigator !== "undefined") {
    const lang = navigator.language || navigator.languages?.[0] || "";
    if (lang.startsWith("ko")) return "kr";
    if (lang.startsWith("es")) return "es";
    if (lang.startsWith("fr")) return "fr";
    if (lang.startsWith("pt")) return "pt";
    if (lang.startsWith("it")) return "it";
    if (lang.startsWith("pl")) return "pl";
    if (lang.startsWith("de")) return "de";
    if (lang.startsWith("zh"))
      return /TW|HK|MO|Hant/i.test(lang) ? "zh-tw" : "zh";
    if (lang.startsWith("fil") || lang.startsWith("tl")) return "fil";
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("vi")) return "vi";
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
