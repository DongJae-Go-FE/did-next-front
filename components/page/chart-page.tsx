import CollectionChart from "../collection-chart";

export default function ChartPage() {
  return (
    <div className="w-full h-full">
      <h2 className="heading02b mb-8 max-[1079px]:text-[24px] max-[767px]:text-[18px] flex justify-between items-end">
        교부별 신청 현황
        <span className="body01b text-black mb-2">신청 현황 (%)</span>
      </h2>
      <div className="flex h-[calc(100%-64px)] max-[767px]:h-full gap-x-4 max-[767px]:flex-col max-[767px]:gap-y-4">
        <CollectionChart />
      </div>
    </div>
  );
}
