import { ImageResponse } from "next/og";

// 루트 세그먼트에 두면 모든 하위 라우트에 og:image 가 자동 주입됩니다.
export const alt = "WYD2027 서울 세계청년대회 교구대회 DID 공식 홈페이지";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background:
            "linear-gradient(135deg, #0047BB 0%, #00307E 60%, #001A4D 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 8,
            opacity: 0.85,
            marginBottom: 24,
          }}
        >
          WORLD YOUTH DAY · DAYS IN DIOCESE
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 700,
            lineHeight: 1.05,
            textAlign: "center",
          }}
        >
          WYD2027 · WYD 2027 SEOUL
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: 14,
            marginTop: 8,
            color: "#BFD3FF",
          }}
        >
          D · I · D
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 40,
            opacity: 0.9,
          }}
        >
          2027.07.29 – 08.02 · Seoul, Korea
        </div>
      </div>
    ),
    { ...size }
  );
}
