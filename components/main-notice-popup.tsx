"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { content, type Locale } from "@/app/(nation)/_lib/content";

const STORAGE_KEY = "did-main-notice-hidden-date";

function getTodayKey() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export default function MainNoticePopup({
  locale = "kr",
}: {
  locale?: Locale;
}) {
  const t = content[locale].mainNoticePopup;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(STORAGE_KEY) !== getTodayKey());
    } catch {
      setOpen(true);
    }
  }, []);

  const closeForToday = () => {
    try {
      localStorage.setItem(STORAGE_KEY, getTodayKey());
    } finally {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-nosnippet
        showCloseButton={false}
        className="w-[min(calc(100%-2rem),560px)] border-0 bg-transparent p-0 shadow-none"
      >
        <div className="overflow-hidden rounded-lg border border-[#D9DEE7] bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#0047BB] px-6 py-4 text-white max-[767px]:px-5">
            <p className="text-xs font-bold tracking-[0.18em]">
              {t.brand}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              title={t.close}
              className="flex size-8 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white hover:text-[#0047BB]"
            >
              <X className="size-4" strokeWidth={2} />
            </button>
          </div>

          <div className="px-6 py-7 max-[767px]:px-5 max-[767px]:py-6">
            <DialogHeader className="items-start border-y border-[#D9DEE7] py-6 text-left">
              <div className="flex items-start gap-4 max-[767px]:gap-3">
                <div className="mt-1 h-12 w-1 shrink-0 rounded-full bg-[#0047BB] max-[767px]:h-10" />
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#2D63C8]">
                    NOTICE
                  </p>
                  <DialogTitle className="mt-2 text-[26px] leading-tight font-bold text-[#111827] max-[767px]:text-[22px]">
                    {t.title}
                  </DialogTitle>
                  <DialogDescription className="mt-4 text-[16px] leading-relaxed text-[#4B5563] max-[767px]:text-[15px]">
                    {t.description}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-[#E5EAF2] bg-[#F8FAFC] px-6 py-4 max-[767px]:px-5 max-[420px]:flex-col">
            <button
              type="button"
              onClick={closeForToday}
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#C7D2E5] bg-white px-5 text-sm font-semibold text-[#374151] transition-colors hover:border-[#0047BB] hover:text-[#0047BB] max-[420px]:w-full"
            >
              {t.hideToday}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#0047BB] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#003A98] max-[420px]:w-full"
            >
              {t.close}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
