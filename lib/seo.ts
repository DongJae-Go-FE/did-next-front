export type SiteLocale = "kr" | "en";

export const SITE_URL = "https://wyd2027did.org";

export const SITE_NAME_BY_LOCALE = {
  kr: "WYD2027 · WYD 2027 서울 세계청년대회 교구대회(DID) 공식 홈페이지",
  en: "WYD2027 · WYD 2027 Seoul DID Official Website",
} as const satisfies Record<SiteLocale, string>;

export const SITE_TITLE_BY_LOCALE = {
  kr: "WYD2027 · WYD 2027 서울 세계청년대회 교구대회(DID) 공식 홈페이지",
  en: "WYD2027 · WYD 2027 Seoul DID Official Website",
} as const satisfies Record<SiteLocale, string>;

export const EVENT_NAME_BY_LOCALE = {
  kr: "WYD2027 서울 세계청년대회 교구대회(DID)",
  en: "WYD2027 Seoul Days in Diocese",
} as const satisfies Record<SiteLocale, string>;

export const SITE_ALIASES_BY_LOCALE = {
  kr: [
    "WYD",
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
} as const satisfies Record<SiteLocale, readonly string[]>;

export const SEARCH_ALIASES_BY_LOCALE = {
  kr: [
    "WYD",
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

export function getLanguageAlternates(path: string = "") {
  const normalizedPath = normalizePath(path);

  return {
    "ko-KR": `${SITE_URL}/kr${normalizedPath}`,
    "en-US": `${SITE_URL}/en${normalizedPath}`,
    "x-default": `${SITE_URL}/kr${normalizedPath}`,
  };
}

export function getLocaleLanguage(locale: SiteLocale) {
  return locale === "kr" ? "ko-KR" : "en-US";
}

export function getOpenGraphLocale(locale: SiteLocale) {
  return locale === "kr" ? "ko_KR" : "en_US";
}

export function getAlternateOpenGraphLocale(locale: SiteLocale) {
  return locale === "kr" ? "en_US" : "ko_KR";
}

export function getPageTitle(locale: SiteLocale, pageTitle?: string) {
  const siteTitle = SITE_TITLE_BY_LOCALE[locale];
  return pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
}

export function getSiteName(locale: SiteLocale) {
  return SITE_NAME_BY_LOCALE[locale];
}

export function getMetaDescription(description: string, maxLength: number = 160) {
  const normalizedDescription = description.trim().replace(/\s+/g, " ");
  const chars = Array.from(normalizedDescription);

  if (chars.length <= maxLength) return normalizedDescription;

  return `${chars.slice(0, maxLength - 3).join("").trimEnd()}...`;
}
