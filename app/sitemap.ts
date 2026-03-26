import type { MetadataRoute } from "next";
import { getNoticeList } from "@/lib/notion-notice";

const SITE_URL = "https://wyd2027did.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 정적 페이지
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/kr`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kr/apply`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/en/apply`,
      lastModified: now,
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
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/introduce`,
      lastModified: now,
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
