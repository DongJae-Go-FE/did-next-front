"use client";

const t = {
  kr: {
    title: "오류가 발생했습니다",
    desc: "일시적인 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    btn: "다시 시도하기",
  },
  en: {
    title: "Something Went Wrong",
    desc: "A temporary problem occurred. Please try again later.",
    btn: "Try Again",
  },
};

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  let locale: "kr" | "en" = "kr";
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    const firstSegment = path.split("/")[1];
    if (
      ["en", "es", "fr", "pt", "it", "pl", "de", "zh", "zh-tw", "fil", "ja", "vi"].includes(
        firstSegment,
      )
    ) {
      locale = "en";
    } else if (firstSegment !== "kr") {
      const lang = navigator.language || navigator.languages?.[0] || "";
      if (!lang.startsWith("ko")) locale = "en";
    }
  }
  const isEn = locale === "en";
  const c = t[locale];

  return (
    <html lang={isEn ? "en" : "ko"}>
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              background:
                "radial-gradient(circle at 30% 40%, #DC2626 0%, transparent 50%), radial-gradient(circle at 70% 60%, #0047BB 0%, transparent 50%)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href={isEn ? "/en" : "/kr"}>
              <img
                src="/logo.svg"
                alt="WYD 2027 DID"
                width={80}
                height={54}
              />
            </a>
            <h1
              style={{
                marginTop: "32px",
                fontSize: "128px",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              <span style={{ color: "#DC2626" }}>5</span>
              <span style={{ color: "#0047BB" }}>0</span>
              <span style={{ color: "#DC2626" }}>0</span>
            </h1>
            <p
              style={{ marginTop: "16px", fontSize: "20px", color: "#4B5563" }}
            >
              {c.title}
            </p>
            <p
              style={{ marginTop: "8px", fontSize: "14px", color: "#9CA3AF" }}
            >
              {c.desc}
            </p>
            <button
              onClick={reset}
              style={{
                marginTop: "32px",
                padding: "12px 24px",
                background:
                  "linear-gradient(135deg, #DC2626 0%, #0047BB 100%)",
                color: "white",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {c.btn}
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
