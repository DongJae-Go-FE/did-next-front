"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ApplyButtonProps {
  href: string;
  label: string;
  dialogTitle: string;
  dialogDesc: string;
  dialogDetail: string;
  dialogWarning?: string;
  agreeLabel: string;
  confirmBtn: string;
  cancelBtn: string;
}

export default function ApplyButton({
  href,
  label,
  dialogTitle,
  dialogDesc,
  dialogDetail,
  dialogWarning,
  agreeLabel,
  confirmBtn,
  cancelBtn,
}: ApplyButtonProps) {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const lenis = window.__lenis;
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setAgreed(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="h-12 text-white w-full flex justify-center items-center body01m rounded-md transition-colors cursor-pointer"
        style={{ backgroundColor: "#0047BB" }}
      >
        {label}
      </button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-md max-h-[85vh] flex flex-col">
          <DialogHeader className="shrink-0">
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDesc}</DialogDescription>
          </DialogHeader>

          <div className="rounded-md bg-gray-50 p-3 text-sm text-gray-700 min-h-0 flex-1 overflow-y-auto border whitespace-pre-line">
            {dialogDetail}
          </div>

          {dialogWarning && (
            <div className="rounded-md bg-red-50 border-2 border-red-500 p-4 text-sm text-red-700 font-bold">
              {dialogWarning}
            </div>
          )}

          <label className="flex items-start gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 size-4 accent-[#0047BB] shrink-0"
            />
            <span className="text-sm">{agreeLabel}</span>
          </label>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {cancelBtn}
            </button>
            <button
              type="button"
              disabled={!agreed}
              onClick={() => {
                window.open(href, "_blank", "noopener,noreferrer");
                handleOpenChange(false);
              }}
              className={`px-4 py-2 text-sm rounded-md text-white transition-colors ${
                agreed
                  ? "bg-[#0047BB] hover:bg-[#003a9e] cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {confirmBtn}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
