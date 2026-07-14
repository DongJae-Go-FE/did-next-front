import type { Locale } from "@/app/(nation)/_lib/content";
import type { DioceseChartDatum } from "@/lib/notion-status";
import CollectionChart from "../collection-chart";

interface ChartPageProps {
  data: DioceseChartDatum[];
  locale: Locale;
}

export default function ChartPage({ data, locale }: ChartPageProps) {
  const totalCurrent = data.reduce((sum, item) => sum + item.현재인원, 0);
  const totalTarget = data.reduce((sum, item) => sum + item.목표인원, 0);
  const totalRate = totalTarget > 0 ? Math.round((totalCurrent / totalTarget) * 100) : 0;
  const isKr = locale === "kr";

  return (
    <div className="w-full h-full">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-3">
        <p className="text-sm text-gray-600">
          {isKr ? "총 신청 현황" : "Overall Application Status"}:{" "}
          <span className="font-semibold text-gray-900">
            {totalRate}%
          </span>
        </p>
        <p className="text-xs text-gray-500">
          {isKr ? `교구 수 ${data.length}개` : `${data.length} dioceses`}
        </p>
      </div>
      <div className="flex h-[calc(100%-64px)] max-[767px]:h-full gap-x-4 max-[767px]:flex-col max-[767px]:gap-y-4">
        <CollectionChart data={data} />
      </div>
    </div>
  );
}
