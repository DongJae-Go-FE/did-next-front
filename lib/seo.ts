export type SiteLocale =
  | "kr"
  | "en"
  | "es"
  | "fr"
  | "pt"
  | "it"
  | "pl"
  | "de"
  | "zh"
  | "zh-tw"
  | "fil"
  | "ja"
  | "vi";

export const SITE_URL = "https://wyd2027did.org";

// 공유(OG) 이미지 — R2 이미지 서버에 올려둔 로고 PNG.
// 사이트 배포 상태와 무관하게 항상 같은 이미지가 노출되도록 외부 CDN URL 을 쓴다.
const IMAGE_BASE =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
  "https://r2-image-server.masterforce999.workers.dev";

export const OG_IMAGE = {
  url: `${IMAGE_BASE}/opengraph-image.png`,
  width: 1200,
  height: 630,
  alt: "WYD2027 서울 세계청년대회 교구대회 DID 공식 홈페이지",
} as const;

export const OG_IMAGES = [OG_IMAGE];

export const SITE_NAME_BY_LOCALE = {
  kr: "WYD DID | 2027 서울 세계청년대회 교구대회 공식 홈페이지",
  en: "WYD DID | 2027 Seoul Days in Diocese",
  es: "Sitio web oficial del DID de la JMJ 2027 Seúl",
  fr: "Site officiel du DID des JMJ 2027 Séoul",
  pt: "Site oficial do DID da JMJ 2027 Seul",
  it: "Sito ufficiale del DID della GMG 2027 Seoul",
  pl: "Oficjalna strona DID ŚDM 2027 w Seulu",
  de: "Offizielle Website des DID zum WJT 2027 in Seoul",
  zh: "2027首尔世界青年日教区日（DID）官方网站",
  "zh-tw": "2027首爾世界青年日教區日（DID）官方網站",
  fil: "Opisyal na Website ng DID ng WYD 2027 Seoul",
  ja: "WYD2027ソウル教区大会（DID）公式サイト",
  vi: "Trang web chính thức DID của ĐHGTTG 2027 Seoul",
} as const satisfies Record<SiteLocale, string>;

export const SITE_TITLE_BY_LOCALE = {
  kr: "WYD DID | 2027 서울 세계청년대회 교구대회 공식 홈페이지",
  en: "WYD DID | 2027 Seoul Days in Diocese",
  es: "Sitio web oficial del DID de la JMJ 2027 Seúl",
  fr: "Site officiel du DID des JMJ 2027 Séoul",
  pt: "Site oficial do DID da JMJ 2027 Seul",
  it: "Sito ufficiale del DID della GMG 2027 Seoul",
  pl: "Oficjalna strona DID ŚDM 2027 w Seulu",
  de: "Offizielle Website des DID zum WJT 2027 in Seoul",
  zh: "2027首尔世界青年日教区日（DID）官方网站",
  "zh-tw": "2027首爾世界青年日教區日（DID）官方網站",
  fil: "Opisyal na Website ng DID ng WYD 2027 Seoul",
  ja: "WYD2027ソウル教区大会（DID）公式サイト",
  vi: "Trang web chính thức DID của ĐHGTTG 2027 Seoul",
} as const satisfies Record<SiteLocale, string>;

export const EVENT_NAME_BY_LOCALE = {
  kr: "WYD2027 서울 세계청년대회 교구대회(DID)",
  en: "WYD2027 Seoul Days in Diocese",
  es: "JMJ 2027 Seúl — Days in Diocese (DID)",
  fr: "JMJ 2027 Séoul — Days in Diocese (DID)",
  pt: "JMJ 2027 Seul — Days in Diocese (DID)",
  it: "GMG 2027 Seoul — Days in Diocese (DID)",
  pl: "ŚDM 2027 Seul — Days in Diocese (DID)",
  de: "WJT 2027 Seoul — Days in Diocese (DID)",
  zh: "2027首尔世青 — 教区日（DID）",
  "zh-tw": "2027首爾世青 — 教區日（DID）",
  fil: "WYD 2027 Seoul — Days in Diocese (DID)",
  ja: "WYD 2027 ソウル — Days in Diocese（DID）",
  vi: "ĐHGTTG 2027 Seoul — Days in Diocese (DID)",
} as const satisfies Record<SiteLocale, string>;

export const SITE_ALIASES_BY_LOCALE = {
  kr: [
    "WYD",
    "WYD DID",
    "WYD 2027",
    "WYD2027",
    "WYD2027 서울 세계청년대회 교구대회(DID) 공식 홈페이지",
    "WYD2027 서울 교구대회 DID",
    "WYD 2027 세계청년대회 교구대회 공식 홈페이지",
    "WYD 2027 세계청년대회 교구대회",
    "WYD Seoul DID",
    "WYD 2027 Seoul DID",
    "WYD 서울 DID",
    "WYD 2027 서울 DID",
    "2027 서울 세계청년대회 교구대회",
    "서울 세계청년대회 교구대회",
  ],
  en: [
    "WYD",
    "WYD DID",
    "WYD 2027",
    "WYD2027",
    "WYD2027 Seoul DID Official Website",
    "WYD2027 Seoul Days in Diocese",
    "WYD 2027 Seoul DID Official Website",
    "WYD 2027 Seoul DID Official Site",
    "WYD 2027 Seoul DID",
    "WYD Seoul 2027 DID",
    "World Youth Day Seoul DID",
    "World Youth Day Seoul 2027",
    "2027 World Youth Day Seoul",
  ],
  es: [
    "WYD",
    "WYD DID",
    "WYD 2027",
    "WYD2027",
    "JMJ 2027",
    "JMJ Seúl 2027",
    "JMJ 2027 Seúl DID",
    "Jornada Mundial de la Juventud Seúl 2027",
    "Days in Diocese",
    "DID",
  ],
  fr: [
    "WYD",
    "WYD DID",
    "WYD 2027",
    "WYD2027",
    "JMJ 2027",
    "JMJ Séoul 2027",
    "JMJ 2027 Séoul DID",
    "Journées Mondiales de la Jeunesse Séoul 2027",
    "Days in Diocese",
    "DID",
  ],
  pt: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "JMJ 2027",
    "JMJ Seul 2027",
    "JMJ 2027 Seul DID",
    "Jornada Mundial da Juventude Seul 2027",
    "Days in Diocese",
    "DID",
  ],
  it: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "GMG 2027",
    "GMG Seoul 2027",
    "GMG 2027 Seoul DID",
    "Giornata Mondiale della Gioventù Seoul 2027",
    "Days in Diocese",
    "DID",
  ],
  pl: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "ŚDM 2027",
    "ŚDM Seul 2027",
    "ŚDM 2027 Seul DID",
    "Światowe Dni Młodzieży Seul 2027",
    "Days in Diocese",
    "DID",
  ],
  de: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WJT 2027",
    "WJT Seoul 2027",
    "WJT 2027 Seoul DID",
    "Weltjugendtag Seoul 2027",
    "Days in Diocese",
    "DID",
  ],
  zh: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "世界青年日",
    "2027首尔世界青年日",
    "2027世青教区日",
    "教区日",
    "Days in Diocese",
    "DID",
  ],
  "zh-tw": [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "世界青年日",
    "2027首爾世界青年日",
    "2027世青教區日",
    "教區日",
    "Days in Diocese",
    "DID",
  ],
  fil: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD 2027 Seoul DID",
    "World Youth Day Seoul 2027",
    "Days in Diocese",
    "DID",
  ],
  ja: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "ワールドユースデー 2027",
    "2027ソウル世界青年の日",
    "WYD 2027 ソウル DID",
    "教区大会",
    "Days in Diocese",
    "DID",
  ],
  vi: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "ĐHGTTG 2027",
    "Đại hội Giới trẻ Thế giới 2027",
    "ĐHGTTG 2027 Seoul DID",
    "Days in Diocese",
    "DID",
  ],
} as const satisfies Record<SiteLocale, readonly string[]>;

export const SEARCH_ALIASES_BY_LOCALE = {
  kr: [
    "WYD",
    "WYD DID",
    "WYD 2027",
    "WYD2027",
    "WYD2027 교구대회",
    "WYD2027 DID",
    "WYD2027 서울 DID",
    "WYD2027 서울 교구대회",
    "WYD2027 세계청년대회 교구대회",
    "2027 서울 세계청년대회",
    "서울 세계청년대회",
    "교구대회",
    "DID",
    "Days in Diocese",
    "WYD 2027 Seoul DID",
  ],
  en: [
    "WYD",
    "WYD DID",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "WYD2027 Seoul DID",
    "WYD2027 Days in Diocese",
    "WYD Seoul 2027",
    "WYD 2027 Seoul DID",
    "2027 World Youth Day Seoul",
    "World Youth Day Seoul 2027",
    "Days in Diocese",
    "DID",
  ],
  es: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "JMJ 2027",
    "JMJ Seúl 2027",
    "JMJ 2027 Seúl",
    "Jornada Mundial de la Juventud 2027",
    "Days in Diocese",
    "DID",
  ],
  fr: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "JMJ 2027",
    "JMJ Séoul 2027",
    "JMJ 2027 Séoul",
    "Journées Mondiales de la Jeunesse 2027",
    "Days in Diocese",
    "DID",
  ],
  pt: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "JMJ 2027",
    "JMJ Seul 2027",
    "JMJ 2027 Seul",
    "Jornada Mundial da Juventude 2027",
    "Days in Diocese",
    "DID",
  ],
  it: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "GMG 2027",
    "GMG Seoul 2027",
    "GMG 2027 Seoul",
    "Giornata Mondiale della Gioventù 2027",
    "Days in Diocese",
    "DID",
  ],
  pl: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "ŚDM 2027",
    "ŚDM Seul 2027",
    "Światowe Dni Młodzieży 2027",
    "Days in Diocese",
    "DID",
  ],
  de: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "WJT 2027",
    "WJT Seoul 2027",
    "Weltjugendtag 2027",
    "Days in Diocese",
    "DID",
  ],
  zh: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "世界青年日",
    "2027世青",
    "2027首尔世界青年日",
    "教区日",
    "Days in Diocese",
    "DID",
  ],
  "zh-tw": [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "世界青年日",
    "2027世青",
    "2027首爾世界青年日",
    "教區日",
    "Days in Diocese",
    "DID",
  ],
  fil: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "WYD Seoul 2027",
    "World Youth Day 2027",
    "Days in Diocese",
    "DID",
  ],
  ja: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "ワールドユースデー 2027",
    "世界青年の日 2027",
    "教区大会",
    "Days in Diocese",
    "DID",
  ],
  vi: [
    "WYD",
    "WYD 2027",
    "WYD2027",
    "WYD2027 DID",
    "ĐHGTTG 2027",
    "Đại hội Giới trẻ Thế giới 2027",
    "Days in Diocese",
    "DID",
  ],
} as const satisfies Record<SiteLocale, readonly string[]>;

export const SEARCH_ALIASES = Array.from(
  new Set(Object.values(SEARCH_ALIASES_BY_LOCALE).flat()),
);

function normalizePath(path: string = "") {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function getCanonicalUrl(locale: SiteLocale, path: string = "") {
  return `${SITE_URL}/${locale}${normalizePath(path)}`;
}

const LOCALE_LANGUAGE_BY_LOCALE = {
  kr: "ko-KR",
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  pt: "pt-PT",
  it: "it-IT",
  pl: "pl-PL",
  de: "de-DE",
  zh: "zh-Hans",
  "zh-tw": "zh-Hant",
  fil: "fil-PH",
  ja: "ja-JP",
  vi: "vi-VN",
} as const satisfies Record<SiteLocale, string>;

const OG_LOCALE_BY_LOCALE = {
  kr: "ko_KR",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  pt: "pt_PT",
  it: "it_IT",
  pl: "pl_PL",
  de: "de_DE",
  zh: "zh_CN",
  "zh-tw": "zh_TW",
  fil: "tl_PH",
  ja: "ja_JP",
  vi: "vi_VN",
} as const satisfies Record<SiteLocale, string>;

export function getLanguageAlternates(path: string = "") {
  const normalizedPath = normalizePath(path);

  const alternates = Object.fromEntries(
    Object.entries(LOCALE_LANGUAGE_BY_LOCALE).map(([locale, hreflang]) => [
      hreflang,
      `${SITE_URL}/${locale}${normalizedPath}`,
    ]),
  );

  return {
    ...alternates,
    "x-default": `${SITE_URL}/kr${normalizedPath}`,
  };
}

export function getLocaleLanguage(locale: SiteLocale) {
  return LOCALE_LANGUAGE_BY_LOCALE[locale];
}

export function getOpenGraphLocale(locale: SiteLocale) {
  return OG_LOCALE_BY_LOCALE[locale];
}

export function getAlternateOpenGraphLocale(locale: SiteLocale) {
  return Object.entries(OG_LOCALE_BY_LOCALE)
    .filter(([key]) => key !== locale)
    .map(([, value]) => value);
}

export function getPageTitle(locale: SiteLocale, pageTitle?: string) {
  const siteTitle = SITE_TITLE_BY_LOCALE[locale];
  return pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
}

export function getSiteName(locale: SiteLocale) {
  return SITE_NAME_BY_LOCALE[locale];
}

export function getMetaDescription(
  description: string,
  maxLength: number = 160,
) {
  const normalizedDescription = description.trim().replace(/\s+/g, " ");
  const chars = Array.from(normalizedDescription);

  if (chars.length <= maxLength) return normalizedDescription;

  return `${chars
    .slice(0, maxLength - 3)
    .join("")
    .trimEnd()}...`;
}
