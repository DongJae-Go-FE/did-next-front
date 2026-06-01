import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="lenis lenis-smooth">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
