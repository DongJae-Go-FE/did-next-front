import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Table,
  TableCaption,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import { MapPin } from "lucide-react";
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

export default function MarkerEn({
  onClick,
  name,
}: {
  onClick?: () => void;
  name: string;
}) {
  const diocese = dioceseData.find((d) => d.name === name);
  const address = diocese?.address || "";
  const englishName = dioceseNameMap[name] || name;

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
          <div className="body03m text-white whitespace-nowrap">
            {englishName}
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="min-h-[50dvh] w-full max-w-3/4 bg-white p-0 overflow-hidden sm:min-w-3/4">
        <DialogHeader className="sr-only">
          <DialogTitle>{englishName}</DialogTitle>
          <DialogDescription>About {englishName}</DialogDescription>
        </DialogHeader>

        <div className="w-full flex flex-col">
          <div className="relative w-full aspect-[16/7]">
            <Image
              src={dioceseImageMap[name] || "/apply/seoul.webp"}
              fill
              className="object-cover"
              priority
              alt={`${englishName} image`}
            />
          </div>
          <div className="p-8 flex flex-col gap-y-4">
            <h2 className="heading03b">{englishName}</h2>
            <div className="w-full">
              <Table
                type="description"
                className="table-auto max-[1079px]:table-fixed"
              >
                <TableCaption>{englishName} Details</TableCaption>
                <TableBody>
                  <TableRow>
                    <TableHead className="w-50 max-[767px]:w-20 text-center">
                      Diocese
                    </TableHead>
                    <TableCell>{englishName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="w-50 max-[767px]:w-20 text-center">
                      Address
                    </TableHead>
                    <TableCell>{address}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
