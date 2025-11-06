import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function PrayPage() {
  return (
    <>
      <h2 className="heading02b text-[clamp(24px,6dvw,60px)] text-white relative z-50 w-full text-center">
        2027 서울 세계청년대회
        <br />
        묵주기도 10억단 바치기
      </h2>
      <div className="w-full h-auto flex items-center justify-center gap-x-2 relative z-50 max-[1079px]:flex-col max-[1079px]:gap-y-2">
        <Link
          href=""
          target="_blank"
          className="flex-1 w-full block border border-gray-100 rounded-sm p-6 text-white h-50 transition-all hover:bg-white hover:text-black duration-300 relative group"
        >
          <h3 className="heading03b text-[clamp(24px,3dvw,36px)] mb-2">단체 참여</h3>
          <p className="body01B text-[clamp(16px,2dvw,24px)]">
            단체 소속으로 WYD 홈페이지를 통해
            <br />
            봉헌 운동에 참여할 수 있습니다.
          </p>
          <ArrowRight
            width={70}
            height={40}
            className="bottom-6 right-6 absolute -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 max-[1079px]:bottom-auto max-[1079px]:top-6"
          />
        </Link>
        <Link
          href=""
          target="_blank"
          className="flex-1 w-full block border border-gray-100 rounded-sm p-6 text-white h-50 transition-all hover:bg-white hover:text-black duration-300 relative group"
        >
          <h3 className="heading03b text-[clamp(24px,3dvw,36px)] mb-2">개인 참여</h3>
          <p className="body01B text-[clamp(16px,2dvw,24px)]">
            개인 누구나 쉽게
            <br />
            봉헌 운동에 참여할 수 있습니다.
          </p>
          <ArrowRight
            width={70}
            height={40}
            className="bottom-6 right-6 absolute -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 max-[1079px]:bottom-auto max-[1079px]:top-6"
          />
        </Link>
      </div>
      <div className="bg-backdrop" />
    </>
  );
}
