import { NextResponse, type NextRequest } from "next/server";

const LANG_BY_LOCALE: Record<string, string> = {
  kr: "ko",
  en: "en",
  es: "es",
  fr: "fr",
  pt: "pt",
  it: "it",
  pl: "pl",
  de: "de",
  zh: "zh-Hans",
  "zh-tw": "zh-Hant",
  fil: "fil",
  ja: "ja",
  vi: "vi",
};

function getLocale(pathname: string): string {
  const firstSegment = pathname.split("/")[1];
  return LANG_BY_LOCALE[firstSegment] ?? "ko";
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-locale", getLocale(request.nextUrl.pathname));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml|opengraph-image|twitter-image).*)",
  ],
};
