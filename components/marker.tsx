import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";

import { MapPin, ExternalLink, Map } from "lucide-react";
import dioceseData from "@/public/data";

const dioceseImageMap: Record<string, string> = {
  서울대교구: "/apply/seoul.webp",
  인천교구: "/apply/incheon.webp",
  수원교구: "/apply/suwon.webp",
  의정부교구: "/apply/uijeongbu.webp",
  춘천교구: "/apply/chuncheon.webp",
  원주교구: "/apply/wonju.webp",
  대전교구: "/apply/daejeon.webp",
  청주교구: "/apply/cheongju.webp",
  대구대교구: "/apply/daegu.webp",
  부산교구: "/apply/busan.webp",
  마산교구: "/apply/masan.webp",
  안동교구: "/apply/andong.webp",
  광주대교구: "/apply/gwangju.webp",
  전주교구: "/apply/jeonju.webp",
  제주교구: "/apply/jeju.webp",
  군종교구: "/apply/gun.webp",
};

const dioceseUrlMap: Record<string, string> = {
  부산교구: "https://www.wyd2027did-busan.org",
  안동교구: "https://www.wyd2027did-andong.org",
  춘천교구: "https://www.wyd2027did-cccatholic.org",
  대구대교구: "https://www.wyd2027did-daegu.org",
  군종교구: "https://www.wyd2027did-gunjong.org",
  광주대교구: "https://www.wyd2027did-gwangju.org",
  제주교구: "https://www.wyd2027did-jeju.org",
  전주교구: "https://www.wyd2027did-jeonju.org",
  마산교구: "https://www.wyd2027did-masan.org",
  의정부교구: "https://www.wyd2027did-uijeongbu.org",
  원주교구: "https://www.wyd2027did-wonju.org",
  청주교구: "https://www.wyd2027did-cdcj.org",
  수원교구: "https://www.wyd2027did-suwon.org",
  인천교구: "https://www.wyd2027did-incheon.org",
};

export default function Marker({
  onClick,
  name,
}: {
  onClick?: () => void;
  name: string;
}) {
  const diocese = dioceseData.find((d) => d.name === name);
  const address = diocese?.address || "";
  const url = dioceseUrlMap[name];
  const lat = diocese?.latitude2;
  const lng = diocese?.longitude2;
  const googleMapsUrl = lat && lng
    ? `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const appleMapsUrl = lat && lng
    ? `https://maps.apple.com/?ll=${lat},${lng}&q=${encodeURIComponent(name)}`
    : `https://maps.apple.com/?q=${encodeURIComponent(address)}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="h-[30px] relative cursor-pointer flex z-2000 rounded-full items-center gap-x-1 px-2 top-0.5"
          style={{ backgroundColor: "#0047BB" }}
          onClick={onClick}
        >
          <div className="w-5.5 h-5.5 bg-white rounded-full flex items-center justify-center relative">
            <MapPin width={18} height={18} fill="#fff" />
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "#0047BB" }} />
          </div>
          <div className="body03m text-white whitespace-nowrap">{name}</div>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[min(92vw,520px)] bg-white p-0 overflow-hidden rounded-2xl shadow-2xl border-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{name} 소개</DialogDescription>
        </DialogHeader>

        <div className="w-full flex flex-col">
          {/* 이미지 */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={dioceseImageMap[name] || "/apply/seoul.webp"}
              fill
              className="object-cover scale-105"
              priority
              alt={`${name} 이미지`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* 교구명 */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h2 className="text-white text-xl font-bold leading-tight">
                {name}
              </h2>
            </div>
          </div>

          {/* 본문 */}
          <div className="px-5 pt-4 pb-5 flex flex-col gap-y-4">
            {/* 주소 */}
            {address && (
              <div className="flex items-start gap-x-2.5 bg-gray-50 rounded-xl px-3.5 py-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0047BB" }} />
                <span className="text-sm text-gray-600 leading-relaxed flex-1">
                  {address}
                </span>
                <div className="flex items-center gap-x-1.5 flex-shrink-0 ml-1">
                  <Link
                    href={googleMapsUrl}
                    target="_blank"
                    title="구글맵으로 보기"
                    className="flex items-center gap-x-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors shadow-sm"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Google Map
                  </Link>
                  <Link
                    href={appleMapsUrl}
                    target="_blank"
                    title="애플맵으로 보기"
                    className="flex items-center gap-x-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors shadow-sm"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Apple Map
                  </Link>
                </div>
              </div>
            )}

            {/* 버튼 */}
            {url ? (
              <Link
                href={url}
                target="_blank"
                className="group flex items-center justify-center gap-x-2 px-4 py-3 transition-colors rounded-xl text-white text-sm font-semibold w-full"
                style={{ backgroundColor: "#0047BB" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#003899")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0047BB")}
              >
                교구 DID 홈페이지 바로가기
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ) : (
              <div className="flex items-center justify-center px-4 py-3 bg-gray-100 rounded-xl text-gray-400 text-sm w-full">
                홈페이지 준비 중입니다
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
