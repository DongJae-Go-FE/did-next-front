import type { MetadataRoute } from "next";
import { getNoticeList } from "@/lib/notion-notice";

const SITE_URL = "https://wyd2027did.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  // 콘텐츠가 실제로 갱신된 시점(고정). 정적 페이지가 매 요청마다
  // "방금 수정됨"으로 보이지 않도록 안정적인 날짜를 사용한다.
  const contentUpdated = new Date("2026-02-24T12:00:00+09:00");

  // 정적 페이지
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/kr`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kr/apply`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/en/apply`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kr/status`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/en/status`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kr/introduce`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/introduce`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kr/notice`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/en/notice`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // 공지사항 동적 페이지
  const noticePages: MetadataRoute.Sitemap = [];

  try {
    const [krNotices, enNotices] = await Promise.all([
      getNoticeList(1, "kr"),
      getNoticeList(1, "en"),
    ]);

    for (const notice of krNotices.items) {
      noticePages.push({
        url: `${SITE_URL}/kr/notice/${notice.id}`,
        lastModified: notice.date ? new Date(notice.date) : now,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }

    for (const notice of enNotices.items) {
      noticePages.push({
        url: `${SITE_URL}/en/notice/${notice.id}`,
        lastModified: notice.date ? new Date(notice.date) : now,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  } catch {
    // 공지사항 로드 실패 시 정적 페이지만 반환
  }

  return [...staticPages, ...noticePages];
}
