import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

import { MapPin } from "lucide-react";

export default function Marker({
  onClick,
  name,
}: {
  onClick?: () => void;
  name: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="h-[30px] bg-blue-500 relative cursor-pointer flex z-2000 rounded-full items-center gap-x-1 px-2 top-0.5"
          onClick={onClick}
        >
          <div className="w-5.5 h-5.5 bg-white rounded-full flex items-center justify-center relative">
            <MapPin width={18} height={18} fill="#fff" />
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75" />
          </div>
          <div className="body03m text-white whitespace-nowrap">{name}</div>
        </button>
      </DialogTrigger>
      <DialogContent className="min-h-[50dvh] w-full max-w-3/4 bg-white p-8 sm:min-w-3/4">
        <DialogTitle className="heading03B">테스트</DialogTitle>
        <DialogDescription className="sr-only">마커</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
