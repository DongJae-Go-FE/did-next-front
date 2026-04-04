import Image from "next/image";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export default function SliderItem000() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={`${IMAGE_BASE}/did/main/main00.jpeg`}
        className="w-full h-full object-cover"
        fill
        sizes="100vw"
        priority
        alt="WYD 2027 DID 메인 이미지 첫번째"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center flex flex-col gap-y-4 text-white w-full">
        <h2 className="heading02b text-5xl max-[1080px]:text-4xl max-[769px]:text-3xl w-full">안내문</h2>
        <p className="whitespace-pre-line w-full body01b text-3xl max-[1080px]:text-2xl max-[769px]:text-xl">{`4월 5일 예정이었던 DID 사이트 오픈은 교구 대회 측의 요청으로 연기되었습니다.
자세한 오픈 일정은 추후 공지드리겠습니다.`}</p>
      </div>
      <div className="absolute top-0 left-0 z-10 h-full w-full backdrop-brightness-30" />
    </div>
  );
}
