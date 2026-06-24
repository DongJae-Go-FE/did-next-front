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
import {
  getDioceseAddress,
  getDioceseDisplayName,
  getDioceseImageUrl,
  getDioceseWebsiteUrl,
} from "@/lib/diocese-display";

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
  const address = getDioceseAddress(diocese, locale);
  const displayName = getDioceseDisplayName(name, locale);
  const imageUrl = getDioceseImageUrl(name, locale);
  const url = getDioceseWebsiteUrl(name, locale);

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
              src={imageUrl}
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
