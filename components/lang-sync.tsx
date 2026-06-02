"use client";

import { useEffect } from "react";

// 서버 첫 응답은 middleware 헤더로 lang을 맞추고, 클라이언트 라우팅 전환은 여기서 보정한다.
export default function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return null;
}
