import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import SmoothScrolling from "@/components/smooth-scroll";

const pretendard = localFont({
  src: [
    {
      path: "fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-pretendard",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wyd2027did.org"),
  title: "2027 WYD SEOUL DID",
  description: "2027 WYD SEOUL DID 공식 웹사이트",
  keywords:
    "가톨릭, 천주교, 세계 청년 대회, 인천교구, 서울교구, 서울대 교구, 성당, 서울, 청년, WYD, DID, 2027, WYD2027, Seoul, Korea, 한국, 대한민국, 2027 서울 세계청년대회, 세계청년대회, 2027 세계청년대회, WYD, World Youth Day, 2027 WYD, 서울 WYD, GMG, JMJ, WYD Seoul 2027, GMG Seul 2027, JMJ Seúl 2027, JMJ Séoul 2027",
  applicationName: "2027 WYD SEOUL DID",
  generator: "Next.js",

  creator: "clemens",
  publisher: "clemens",
  referrer: "origin-when-cross-origin",
  robots: "ALL",
  openGraph: {
    title: "2027 WYD SEOUL DID",
    description: "2027 WYD SEOUL DID 공식 웹사이트",
    siteName: "2027 WYD SEOUL DID",
    images: ["/logo.svg"],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2027 WYD SEOUL DID",
    description: "2027 WYD SEOUL DID 공식 웹사이트",
    images: ["/logo.svg"],
  },
  other: {
    "Content-Script-Type": "Text/javascript",
    Subject: "2027 WYD SEOUL DID 공식 웹사이트",
    "Other Agent": "clemens",
    Date: "2025-11-07T12:17:00+09:00",
    Build: "20251107",
    "Last-Modified": "Thu, 20 Feb 2025 12:17:00",
    Copyright: "2027 WYD SEOUL DID 공식 웹사이트",
    "geo.region": "KR-41",
    "geo.placename": "Seoul",
    "geo.position": "37.3884;126.8350",
    ICBM: "37.3884, 126.8350",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body className={pretendard.className}>
        <Header />
        <SmoothScrolling>{children}</SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
