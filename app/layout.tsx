import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wyd2027did.org"),
  title: "WYD DID | 2027 서울 세계청년대회 교구대회 공식 홈페이지",
  description:
    "WYD DID 공식 홈페이지. 2027 서울 세계청년대회 교구대회 일정, 신청, 공지사항을 확인하세요.",
  alternates: {
    types: {
      "application/rss+xml": "https://wyd2027did.org/rss.xml",
    },
  },
  verification: {
    google: "1NdUck-rAwlfvjPBoje9zV7mPKhKZW3_hOKadqP0fIE",
    other: {
      "naver-site-verification": "388cc9a0438eea2cc6d95cd1e6d5d235ce15ddcb",
    },
  },
};

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-pretendard",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

const SUPPORTED_LANGS = [
  "ko",
  "en",
  "es",
  "fr",
  "pt",
  "it",
  "pl",
  "de",
  "zh-Hans",
  "zh-Hant",
  "fil",
  "ja",
  "vi",
] as const;
type SupportedLang = (typeof SUPPORTED_LANGS)[number];

function getRequestLang(locale: string | null): SupportedLang {
  return SUPPORTED_LANGS.includes(locale as SupportedLang)
    ? (locale as SupportedLang)
    : "ko";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const lang = getRequestLang(headersList.get("x-site-locale"));

  return (
    <html lang={lang} className="lenis lenis-smooth">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
