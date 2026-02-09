import CollectionChart from "../../collection-chart";

export default function ChartPageEn() {
  return (
    <div className="w-full h-full">
      <h2 className="heading02b mb-8 max-[1079px]:text-[24px] max-[767px]:text-[18px] flex justify-between items-end">
        Application Status by Diocese
        <span className="body01b text-black mb-2">Status (%)</span>
      </h2>
      <div className="flex h-[calc(100%-64px)] max-[767px]:h-full gap-x-4 max-[767px]:flex-col max-[767px]:gap-y-4">
        <CollectionChart />
      </div>
    </div>
  );
}
