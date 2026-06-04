import { getNoticeList } from "@/lib/notion-notice";
import { SITE_TITLE_BY_LOCALE, SITE_URL } from "@/lib/seo";

export const revalidate = 3600;

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return char;
    }
  });
}

function toRssDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return new Date().toUTCString();
  return parsed.toUTCString();
}

export async function GET() {
  const [krNotices, enNotices] = await Promise.all([
    getNoticeList(1, "kr"),
    getNoticeList(1, "en"),
  ]);

  const items = [
    ...krNotices.items.map((notice) => ({ ...notice, locale: "kr" })),
    ...enNotices.items.map((notice) => ({ ...notice, locale: "en" })),
  ].sort((a, b) => {
    const aDate = new Date(a.date).getTime();
    const bDate = new Date(b.date).getTime();
    return (Number.isNaN(bDate) ? 0 : bDate) - (Number.isNaN(aDate) ? 0 : aDate);
  });

  const rssItems = items
    .map((item) => {
      const url = `${SITE_URL}/${item.locale}/notice/${item.id}`;
      const description =
        item.locale === "kr"
          ? `WYD 2027 서울 교구대회 공지사항: ${item.title}`
          : `WYD 2027 Seoul DID announcement: ${item.title}`;

      return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(description)}</description>
      <pubDate>${toRssDate(item.date)}</pubDate>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE_BY_LOCALE.kr)} 공지사항</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Official notices for WYD 2027 Seoul Days in Diocese.</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${rssItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
