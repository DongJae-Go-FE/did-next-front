import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

import { MapPin, ExternalLink, X } from "lucide-react";
import dioceseData from "@/public/data";
import type { Locale } from "@/app/(nation)/_lib/content";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

const dioceseImageMap: Record<string, string> = {
  서울대교구: `${IMAGE_BASE}/did/apply/seoul.webp`,
  인천교구: `${IMAGE_BASE}/did/apply/incheon.jpg`,
  수원교구: `${IMAGE_BASE}/did/apply/suwon.png`,
  의정부교구: `${IMAGE_BASE}/did/apply/uijeongbu.png`,
  춘천교구: `${IMAGE_BASE}/did/apply/chuncheon.webp`,
  원주교구: `${IMAGE_BASE}/did/apply/wonju.jpg`,
  대전교구: `${IMAGE_BASE}/did/apply/daejeon.png`,
  청주교구: `${IMAGE_BASE}/did/apply/cheongju.webp`,
  대구대교구: `${IMAGE_BASE}/did/apply/daegu.jpg`,
  부산교구: `${IMAGE_BASE}/did/apply/busan.jpg`,
  마산교구: `${IMAGE_BASE}/did/apply/masan.jpg`,
  안동교구: `${IMAGE_BASE}/did/apply/andong.jpg`,
  광주대교구: `${IMAGE_BASE}/did/apply/gwangju.png`,
  전주교구: `${IMAGE_BASE}/did/apply/jeonju.jpg`,
  제주교구: `${IMAGE_BASE}/did/apply/jeju.png`,
  군종교구: `${IMAGE_BASE}/did/apply/gun.png`,
};

const dioceseNameMap: Record<string, string> = {
  서울대교구: "Archdiocese of Seoul",
  인천교구: "Diocese of Incheon",
  수원교구: "Diocese of Suwon",
  의정부교구: "Diocese of Uijeongbu",
  춘천교구: "Diocese of Chuncheon",
  원주교구: "Diocese of Wonju",
  대전교구: "Diocese of Daejeon",
  청주교구: "Diocese of Cheongju",
  대구대교구: "Archdiocese of Daegu",
  부산교구: "Diocese of Busan",
  마산교구: "Diocese of Masan",
  안동교구: "Diocese of Andong",
  광주대교구: "Archdiocese of Gwangju",
  전주교구: "Diocese of Jeonju",
  제주교구: "Diocese of Jeju",
  군종교구: "Military Ordinariate",
};

const dioceseUrlMap: Record<string, string> = {
  서울대교구: "https://wydseoul.org/",
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
  대전교구: "https://www.wyd2027did-daejeon.org",
};

export default function Marker({
  onClick,
  name,
  locale = "kr",
}: {
  onClick?: () => void;
  name: string;
  locale?: Locale;
}) {
  const isEn = locale !== "kr";
  const diocese = dioceseData.find((d) => d.name === name);
  const address = diocese?.address || "";
  const displayName = isEn ? dioceseNameMap[name] || name : name;
  const url = dioceseUrlMap[name];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group h-[30px] relative cursor-pointer flex z-2000 rounded-full items-center gap-x-1 px-2 top-0.5 bg-[#0047BB] transition-colors duration-150 hover:bg-[#0A57D0]"
          onClick={onClick}
        >
          <div className="w-5.5 h-5.5 bg-white rounded-full flex items-center justify-center relative">
            <MapPin width={18} height={18} fill="#fff" />
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-[#0047BB] transition-colors duration-150 group-hover:bg-[#0A57D0]" />
          </div>
          <div className="body03m text-white whitespace-nowrap">
            {displayName}
          </div>
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="w-[min(92vw,600px)] sm:max-w-[600px] bg-white p-0 overflow-hidden rounded-2xl shadow-2xl border-0"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{displayName}</DialogTitle>
          <DialogDescription>
            {isEn ? `About ${displayName}` : `${displayName} 소개`}
          </DialogDescription>
        </DialogHeader>

        <div className="w-full flex flex-col">
          <div className="relative w-full aspect-[2/1] overflow-hidden">
            <Image
              src={dioceseImageMap[name] || `${IMAGE_BASE}/apply/seoul.webp`}
              fill
              className="object-fill"
              priority
              alt={isEn ? `${displayName} image` : `${displayName} 이미지`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <DialogClose className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer">
              <X className="w-5 h-5 text-white" />
              <span className="sr-only">닫기</span>
            </DialogClose>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h2 className="text-white text-xl font-bold leading-tight">
                {displayName}
              </h2>
            </div>
          </div>

          <div className="px-5 pt-4 pb-5 flex flex-col gap-y-4">
            {address && (
              <div className="flex items-start gap-x-2.5 bg-gray-50 rounded-xl px-3.5 py-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "#0047BB" }}
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  {address}
                </span>
              </div>
            )}

            {url ? (
              <Link
                href={url}
                target="_blank"
                className="group flex items-center justify-center gap-x-2 px-4 py-3 transition-colors rounded-xl text-white text-sm font-semibold w-full"
                style={{ backgroundColor: "#0047BB" }}
              >
                {isEn
                  ? "Visit Diocese DID Website"
                  : "교구 DID 홈페이지 바로가기"}
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ) : (
              <div className="flex items-center justify-center px-4 py-3 bg-gray-100 rounded-xl text-gray-400 text-sm w-full">
                {isEn ? "Website coming soon" : "홈페이지 준비 중입니다"}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
