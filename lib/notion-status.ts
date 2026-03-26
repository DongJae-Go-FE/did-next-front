import "server-only";
import { DATABASE_ID, notion } from "@/lib/notion";

export interface DioceseChartDatum {
  name: string;
  현재인원: number;
  목표인원: number;
  color: string;
}

// 교구별 공식 색상
const DIOCESE_COLORS: Record<string, string> = {
  광주교구: "#D92E16",
  광주: "#D92E16",
  군종교구: "#446B33",
  군종: "#446B33",
  대구교구: "#AE0042",
  대구: "#AE0042",
  대전교구: "#870023",
  대전: "#870023",
  마산교구: "#50B14A",
  마산: "#50B14A",
  부산교구: "#6C6E72",
  부산: "#6C6E72",
  수원교구: "#0092D4",
  수원: "#0092D4",
  안동교구: "#0B76B8",
  안동: "#0B76B8",
  원주교구: "#7E1A37",
  원주: "#7E1A37",
  의정부교구: "#1D2974",
  의정부: "#1D2974",
  인천교구: "#EE7836",
  인천: "#EE7836",
  전주교구: "#AE2243",
  전주: "#AE2243",
  제주교구: "#AC995E",
  제주: "#AC995E",
  청주교구: "#005BAC",
  청주: "#005BAC",
  춘천교구: "#CE6D4E",
  춘천: "#CE6D4E",
};

const FALLBACK_DATA: DioceseChartDatum[] = [
  { name: "광주교구", 현재인원: 4450, 목표인원: 5000, color: "#D92E16" },
  { name: "군종교구", 현재인원: 1860, 목표인원: 3000, color: "#446B33" },
  { name: "대구교구", 현재인원: 5460, 목표인원: 6000, color: "#AE0042" },
  { name: "대전교구", 현재인원: 3300, 목표인원: 6000, color: "#870023" },
  { name: "마산교구", 현재인원: 2520, 목표인원: 3000, color: "#50B14A" },
  { name: "부산교구", 현재인원: 6000, 목표인원: 8000, color: "#6C6E72" },
  { name: "수원교구", 현재인원: 4600, 목표인원: 5000, color: "#0092D4" },
  { name: "안동교구", 현재인원: 1180, 목표인원: 2000, color: "#0B76B8" },
  { name: "원주교구", 현재인원: 2460, 목표인원: 3000, color: "#7E1A37" },
  { name: "의정부교구", 현재인원: 2880, 목표인원: 3000, color: "#1D2974" },
  { name: "인천교구", 현재인원: 3200, 목표인원: 5000, color: "#EE7836" },
  { name: "전주교구", 현재인원: 2130, 목표인원: 3000, color: "#AE2243" },
  { name: "제주교구", 현재인원: 860, 목표인원: 2000, color: "#AC995E" },
  { name: "청주교구", 현재인원: 2340, 목표인원: 3000, color: "#005BAC" },
  { name: "춘천교구", 현재인원: 1700, 목표인원: 2500, color: "#CE6D4E" },
];

const DEFAULT_COLORS = [
  "#0047BB",
  "#E54A47",
  "#2E8B57",
  "#FF8C42",
  "#6B5B95",
  "#17A2B8",
  "#F4B400",
  "#8E44AD",
  "#1ABC9C",
  "#E67E22",
  "#2C3E50",
  "#E91E63",
  "#16A085",
  "#D35400",
  "#7F8C8D",
  "#3498DB",
];

const NOTION_COLOR_MAP: Record<string, string> = {
  default: "#94A3B8",
  gray: "#6B7280",
  brown: "#8B5E3C",
  orange: "#F97316",
  yellow: "#EAB308",
  green: "#22C55E",
  blue: "#3B82F6",
  purple: "#A855F7",
  pink: "#EC4899",
  red: "#EF4444",
};

type NotionPropertyValue = {
  type?: string;
  title?: Array<{ plain_text?: string }>;
  rich_text?: Array<{ plain_text?: string }>;
  number?: number | null;
  formula?: { type?: string; number?: number | null; string?: string | null };
  select?: { name?: string | null; color?: string | null } | null;
  status?: { name?: string | null; color?: string | null } | null;
  unique_id?: { number?: number | null } | null;
};

type NotionPage = {
  properties?: Record<string, NotionPropertyValue>;
};

const NAME_KEYS = ["name", "이름", "교구명", "교구", "diocese", "title"];
const CURRENT_KEYS = [
  "현재등록인원",
  "현재 등록인원",
  "현재인원",
  "현재 인원",
  "등록인원",
  "신청",
  "신청인원",
  "current",
  "applied",
];
const TARGET_KEYS = [
  "총인원",
  "목표인원",
  "목표 인원",
  "목표",
  "total",
  "target",
];
const COLOR_KEYS = ["color", "색상", "컬러"];
const ORDER_KEYS = ["순서", "order", "정렬"];

function norm(value: string) {
  return value.toLowerCase().replace(/\s+/g, "");
}

function textFromProperty(prop?: NotionPropertyValue): string | undefined {
  if (!prop) return undefined;

  if (prop.type === "title" && prop.title?.length) {
    return prop.title.map((t) => t.plain_text ?? "").join("").trim() || undefined;
  }

  if (prop.type === "rich_text" && prop.rich_text?.length) {
    return prop.rich_text.map((t) => t.plain_text ?? "").join("").trim() || undefined;
  }

  if (prop.type === "select") return prop.select?.name ?? undefined;
  if (prop.type === "status") return prop.status?.name ?? undefined;
  if (prop.type === "formula" && prop.formula?.type === "string") {
    return prop.formula.string ?? undefined;
  }

  return undefined;
}

function numberFromProperty(prop?: NotionPropertyValue): number | undefined {
  if (!prop) return undefined;
  if (prop.type === "number" && typeof prop.number === "number") return prop.number;
  if (prop.type === "formula" && prop.formula?.type === "number" && typeof prop.formula.number === "number") {
    return prop.formula.number;
  }
  if (prop.type === "unique_id" && typeof prop.unique_id?.number === "number") {
    return prop.unique_id.number;
  }
  return undefined;
}

function colorFromProperty(prop?: NotionPropertyValue): string | undefined {
  if (!prop) return undefined;
  if (prop.type === "rich_text") {
    const value = textFromProperty(prop);
    if (value?.startsWith("#")) return value;
  }
  if (prop.type === "select") {
    const { name, color } = prop.select ?? {};
    if (name?.startsWith("#")) return name;
    if (color && NOTION_COLOR_MAP[color]) return NOTION_COLOR_MAP[color];
  }
  if (prop.type === "status") {
    const { name, color } = prop.status ?? {};
    if (name?.startsWith("#")) return name;
    if (color && NOTION_COLOR_MAP[color]) return NOTION_COLOR_MAP[color];
  }
  return undefined;
}

function pickByKeys<T>(
  props: Record<string, NotionPropertyValue>,
  keys: string[],
  picker: (prop?: NotionPropertyValue) => T | undefined
): T | undefined {
  const entries = Object.entries(props);

  for (const key of keys) {
    const hit = entries.find(([propName]) => norm(propName) === norm(key));
    if (hit) {
      const value = picker(hit[1]);
      if (value !== undefined) return value;
    }
  }

  for (const key of keys) {
    const hit = entries.find(([propName]) => norm(propName).includes(norm(key)));
    if (hit) {
      const value = picker(hit[1]);
      if (value !== undefined) return value;
    }
  }

  return undefined;
}

function getDioceseColor(name: string): string | undefined {
  // 정확히 일치하는 경우
  if (DIOCESE_COLORS[name]) return DIOCESE_COLORS[name];

  // 교구명에서 "교구" 제거하고 매칭
  const shortName = name.replace("교구", "");
  if (DIOCESE_COLORS[shortName]) return DIOCESE_COLORS[shortName];

  // 교구명에 "교구" 추가하고 매칭
  const fullName = name + "교구";
  if (DIOCESE_COLORS[fullName]) return DIOCESE_COLORS[fullName];

  return undefined;
}

function parsePage(page: NotionPage, index: number): (DioceseChartDatum & { order: number }) | null {
  const props = page.properties ?? {};
  const name =
    pickByKeys(props, NAME_KEYS, textFromProperty) ??
    Object.values(props).map(textFromProperty).find(Boolean);
  const current =
    pickByKeys(props, CURRENT_KEYS, numberFromProperty) ??
    0;
  const target =
    pickByKeys(props, TARGET_KEYS, numberFromProperty) ??
    0;
  const order =
    pickByKeys(props, ORDER_KEYS, numberFromProperty) ??
    index;

  // 교구명 기반 색상 우선, 그 다음 Notion 색상, 마지막으로 기본 색상
  const color =
    (name ? getDioceseColor(name) : undefined) ??
    pickByKeys(props, COLOR_KEYS, colorFromProperty) ??
    DEFAULT_COLORS[index % DEFAULT_COLORS.length];

  if (!name || target <= 0) return null;

  return {
    name,
    현재인원: Math.max(0, Math.round(current)),
    목표인원: Math.max(1, Math.round(target)),
    color,
    order,
  };
}

export async function getDioceseChartData(): Promise<DioceseChartDatum[]> {
  if (!process.env.NOTION_API_KEY?.trim() || !DATABASE_ID) {
    return FALLBACK_DATA;
  }

  try {
    const database = await notion.databases.retrieve({
      database_id: DATABASE_ID,
    });
    const dataSourceId =
      "data_sources" in database ? database.data_sources?.[0]?.id : undefined;

    if (!dataSourceId) {
      return FALLBACK_DATA;
    }

    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      page_size: 100,
      result_type: "page",
    });

    const rows = ((response.results ?? []) as unknown as NotionPage[])
      .map((page, idx) => parsePage(page, idx))
      .filter((row): row is DioceseChartDatum & { order: number } => Boolean(row))
      .sort((a, b) => a.order - b.order)
      .map((row) => ({
        name: row.name,
        현재인원: row.현재인원,
        목표인원: row.목표인원,
        color: row.color,
      }));

    return rows.length ? rows : FALLBACK_DATA;
  } catch {
    return FALLBACK_DATA;
  }
}
