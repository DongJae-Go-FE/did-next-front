"use client";

import { useEffect } from "react";

/**
 * 루트 레이아웃의 <html lang> 은 라우트 그룹 특성상 정적으로 locale 별 분기가
 * 불가능하므로(기본값 ko), 영문 등 다른 로케일에서 클라이언트에서 보정한다.
 */
export default function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return null;
}
