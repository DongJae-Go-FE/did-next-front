import "server-only";
import { notion } from "@/lib/notion";

const NOTICE_DATABASE_ID_KR =
  process.env.NOTION_NOTICE_DATABASE_ID?.trim() ?? "";
const NOTICE_DATABASE_ID_EN =
  process.env.NOTION_NOTICE_EN_DATABASE_ID?.trim() ?? "";

function getNoticeDatabaseId(locale: string): string {
  return locale === "en" ? NOTICE_DATABASE_ID_EN : NOTICE_DATABASE_ID_KR;
}

export interface NoticeItem {
  id: string;
  title: string;
  order: number;
  author: string;
  date: string;
}

export interface NoticeListResult {
  items: NoticeItem[];
  totalPages: number;
  currentPage: number;
}

export interface NotionBlock {
  id: string;
  type: string;
  [key: string]: unknown;
}

const PAGE_SIZE = 10;

type RichText = { plain_text?: string; href?: string | null };

function richTextToPlain(richTexts?: RichText[]): string {
  if (!richTexts?.length) return "";
  return richTexts.map((t) => t.plain_text ?? "").join("");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractProperty(prop: any): string {
  if (!prop) return "";
  if (prop.type === "title") return richTextToPlain(prop.title);
  if (prop.type === "rich_text") return richTextToPlain(prop.rich_text);
  if (prop.type === "select") return prop.select?.name ?? "";
  if (prop.type === "date") return prop.date?.start ?? "";
  if (prop.type === "created_time") return prop.created_time ?? "";
  if (prop.type === "people") {
    return (prop.people ?? [])
      .map((p: { name?: string }) => p.name ?? "")
      .filter(Boolean)
      .join(", ");
  }
  if (prop.type === "created_by") return prop.created_by?.name ?? "";
  return "";
}

const AUTHOR_KEYS = ["작성자", "author", "담당자", "writer"];
const ORDER_KEYS = ["순서", "order", "번호", "no"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractNumber(prop: any): number | undefined {
  if (!prop) return undefined;
  if (prop.type === "number" && typeof prop.number === "number") return prop.number;
  if (prop.type === "unique_id" && typeof prop.unique_id?.number === "number") return prop.unique_id.number;
  if (prop.type === "formula" && prop.formula?.type === "number" && typeof prop.formula.number === "number") return prop.formula.number;
  return undefined;
}

export async function getNoticeList(
  page: number = 1,
  locale: string = "kr"
): Promise<NoticeListResult> {
  const databaseId = getNoticeDatabaseId(locale);
  if (!databaseId) {
    return { items: [], totalPages: 0, currentPage: page };
  }

  try {
    const database = await notion.databases.retrieve({
      database_id: databaseId,
    });
    const dataSourceId =
      "data_sources" in database ? database.data_sources?.[0]?.id : undefined;

    if (!dataSourceId) {
      return { items: [], totalPages: 0, currentPage: page };
    }

    const allResponse = await notion.dataSources.query({
      data_source_id: dataSourceId,
      page_size: 100,
      result_type: "page",
    });

    const allResults = (allResponse.results ?? []) as unknown as Array<{
      id: string;
      created_time?: string;
      properties?: Record<string, unknown>;
    }>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allItems: NoticeItem[] = allResults.map((p: any) => {
      const props = p.properties ?? {};

      let title = "";
      let order: number | undefined;
      let date = "";
      let author = "";

      for (const [key, val] of Object.entries(props)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const v = val as any;
        const normKey = key.toLowerCase().replace(/\s+/g, "");
        if (v.type === "title") title = extractProperty(v);
        if (ORDER_KEYS.some((k) => normKey.includes(k))) {
          const num = extractNumber(v);
          if (num !== undefined) order = num;
        }
        if (v.type === "date") date = extractProperty(v);
        if (
          AUTHOR_KEYS.some((k) => normKey.includes(k)) ||
          v.type === "people" ||
          v.type === "created_by"
        ) {
          const extracted = extractProperty(v);
          if (extracted) author = extracted;
        }
      }

      if (!date) {
        date =
          p.created_time?.split("T")[0] ??
          new Date().toISOString().split("T")[0];
      }

      return {
        id: p.id,
        title: title || "제목 없음",
        order: order ?? 0,
        author,
        date,
      };
    });

    // Sort by order descending (highest first)
    allItems.sort((a, b) => b.order - a.order);

    const totalPages = Math.max(1, Math.ceil(allItems.length / PAGE_SIZE));
    const safePage = Math.max(1, Math.min(page, totalPages));
    const startIndex = (safePage - 1) * PAGE_SIZE;
    const items = allItems.slice(startIndex, startIndex + PAGE_SIZE);

    return { items, totalPages, currentPage: safePage };
  } catch {
    return { items: [], totalPages: 0, currentPage: page };
  }
}

export async function getNoticeDetail(
  pageId: string
): Promise<{
  title: string;
  author: string;
  date: string;
  blocks: NotionBlock[];
} | null> {
  if (!NOTICE_DATABASE_ID_KR && !NOTICE_DATABASE_ID_EN) return null;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page = (await notion.pages.retrieve({ page_id: pageId })) as any;
    const props = page.properties ?? {};

    let title = "";
    let author = "";
    let date = "";

    for (const [key, val] of Object.entries(props)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const v = val as any;
      const normKey = key.toLowerCase().replace(/\s+/g, "");
      if (v.type === "title") title = extractProperty(v);
      if (v.type === "date") date = extractProperty(v);
      if (
        AUTHOR_KEYS.some((k) => normKey.includes(k)) ||
        v.type === "people" ||
        v.type === "created_by"
      ) {
        const extracted = extractProperty(v);
        if (extracted) author = extracted;
      }
    }

    if (!date) {
      date =
        page.created_time?.split("T")[0] ??
        new Date().toISOString().split("T")[0];
    }

    const blocksResponse = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    return {
      title: title || "제목 없음",
      author,
      date,
      blocks: blocksResponse.results as unknown as NotionBlock[],
    };
  } catch {
    return null;
  }
}
