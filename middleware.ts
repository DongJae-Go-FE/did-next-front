import { NextResponse, type NextRequest } from "next/server";

function getLocale(pathname: string): "ko" | "en" {
  return pathname.startsWith("/en") ? "en" : "ko";
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
