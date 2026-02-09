import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../globals.css"

import HeaderEn from "@/components/ui/header-en";
import FooterEn from "@/components/ui/footer-en";
import SmoothScrolling from "@/components/smooth-scroll";

const pretendard = localFont({
  src: [
    {
      path: "../../fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Pretendard-Bold.subset.woff2",
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
  description: "2027 WYD SEOUL DID Official Website",
  keywords:
    "Catholic, World Youth Day, WYD, DID, 2027, WYD2027, Seoul, Korea, Days in Diocese, WYD Seoul 2027, GMG, JMJ, GMG Seul 2027, JMJ Seúl 2027, JMJ Séoul 2027",
  applicationName: "2027 WYD SEOUL DID",
  generator: "Next.js",

  creator: "clemens",
  publisher: "clemens",
  referrer: "origin-when-cross-origin",
  robots: "ALL",
  openGraph: {
    title: "2027 WYD SEOUL DID",
    description: "2027 WYD SEOUL DID Official Website",
    siteName: "2027 WYD SEOUL DID",
    images: ["/logo.svg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2027 WYD SEOUL DID",
    description: "2027 WYD SEOUL DID Official Website",
  },
  other: {
    "Content-Script-Type": "Text/javascript",
    Subject: "2027 WYD SEOUL DID Official Website",
    "Other Agent": "clemens",
    Date: "2025-11-07T12:17:00+09:00",
    Build: "20251107",
    "Last-Modified": "Thu, 20 Feb 2025 12:17:00",
    Copyright: "2027 WYD SEOUL DID Official Website",
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
        <HeaderEn />
        <SmoothScrolling>{children}</SmoothScrolling>
        <FooterEn />
      </body>
    </html>
  );
}
