import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wyd2027did.org"),
  title: "WYD2027 서울 세계청년대회 교구대회(DID) 공식 홈페이지",
  description:
    "WYD2027 서울 세계청년대회 교구대회(DID) 공식 홈페이지. 일정, 교구 소개, 참가 신청과 현황, 공지사항, 후원 정보를 확인하세요.",
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

function getRequestLang(locale: string | null): "ko" | "en" {
  return locale === "en" ? "en" : "ko";
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
