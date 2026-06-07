import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// 루트 세그먼트에 두면 모든 하위 라우트에 og:image 가 자동 주입됩니다.
// 카카오/네이버 등은 SVG og:image 를 지원하지 않으므로
// public/logo.svg 를 ImageResponse 로 PNG 렌더링해서 내보냅니다.
export const alt = "WYD2027 서울 세계청년대회 교구대회 DID 공식 홈페이지";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoSvg = await readFile(join(process.cwd(), "public", "logo.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={334} height={380} alt="" />
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            marginTop: 52,
            color: "#0047BB",
            fontWeight: 700,
          }}
        >
          WORLD YOUTH DAY 2027 SEOUL · DAYS IN DIOCESE
        </div>
      </div>
    ),
    { ...size }
  );
}
