"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { NoticeItem } from "@/lib/notion-notice";

interface NoticeListProps {
  items: NoticeItem[];
  totalPages: number;
  currentPage: number;
  locale: string;
  labels: {
    noItems: string;
    prevPage: string;
    nextPage: string;
    orderLabel: string;
    titleLabel: string;
    authorLabel: string;
    dateLabel: string;
  };
}

function formatDate(dateStr: string, locale: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (locale === "kr") {
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  }
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function NoticeList({
  items,
  totalPages,
  currentPage,
  locale,
  labels,
}: NoticeListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`/${locale}/notice?${params.toString()}`);
  };

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-500 body01m">
        {labels.noItems}
      </div>
    );
  }

  // Generate page numbers
  const pages: number[] = [];
  const maxVisible = 5;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const end = Math.min(totalPages, start + maxVisible - 1);
  start = Math.max(1, end - maxVisible + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div>
      {/* Desktop table */}
      <table className="w-full max-[767px]:hidden">
        <thead>
          <tr className="border-t-2 border-t-gray-800 border-b border-b-gray-200 bg-gray-50">
            <th className="py-3 px-4 text-center text-xs font-semibold text-gray-600 uppercase w-16">
              {labels.orderLabel}
            </th>
            <th className="py-3 px-4 text-center text-xs font-semibold text-gray-600 uppercase">
              {labels.titleLabel}
            </th>
            <th className="py-3 px-4 text-center text-xs font-semibold text-gray-600 uppercase w-28">
              {labels.authorLabel}
            </th>
            <th className="py-3 px-4 text-center text-xs font-semibold text-gray-600 uppercase w-32">
              {labels.dateLabel}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {items.map((item, idx) => (
            <tr
              key={item.id}
              className={`hover:bg-blue-50/50 transition-colors ${idx % 2 === 1 ? "bg-gray-50/50" : ""}`}
            >
              <td className="py-4 px-4 text-center text-sm text-gray-500 font-medium">
                {item.order || "-"}
              </td>
              <td className="py-4 px-4 text-center">
                <Link
                  href={`/${locale}/notice/${item.id}`}
                  className="text-gray-800 hover:text-[#0047BB] transition-colors font-medium line-clamp-1"
                >
                  {item.title}
                </Link>
              </td>
              <td className="py-4 px-4 text-center text-sm text-gray-500">
                {item.author || "-"}
              </td>
              <td className="py-4 px-4 text-center text-sm text-gray-400">
                {formatDate(item.date, locale)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile card list */}
      <div className="hidden max-[767px]:block divide-y divide-gray-100 border-t-2 border-t-gray-800">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/${locale}/notice/${item.id}`}
            className="block px-4 py-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-gray-800 font-medium line-clamp-2 mb-1.5">
              {item.title}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              {item.author && <span>{item.author}</span>}
              {item.author && <span>·</span>}
              <span>{formatDate(item.date, locale)}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-1 mt-10">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-3 py-2 text-sm text-gray-600 hover:text-[#0047BB] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {labels.prevPage}
          </button>
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`w-9 h-9 rounded-md text-sm font-medium transition-colors ${
                p === currentPage
                  ? "bg-[#0047BB] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="px-3 py-2 text-sm text-gray-600 hover:text-[#0047BB] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {labels.nextPage}
          </button>
        </div>
      )}
    </div>
  );
}
