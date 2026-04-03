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
        <p className="whitespace-pre-line w-full body01b text-3xl max-[1080px]:text-2xl max-[769px]:text-xl">{`본 페이지는 교구대회 참가 신청을 위한 전용 페이지로, 
        교구대회 신청은 본 페이지를 통해서만 가능하며 
        개별 신청은 받지 않습니다.
신청 접수는 6월 1일부터 시작될 예정이며,
세부 일정은 추후 공지드릴 예정입니다.`}</p>
      </div>
      <div className="absolute top-0 left-0 z-10 h-full w-full backdrop-brightness-30" />
    </div>
  );
}
