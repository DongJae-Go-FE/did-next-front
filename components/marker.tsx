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

import {
  Table,
  TableCaption,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

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
        <DialogHeader className="sr-only">
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{name} 소개</DialogDescription>
        </DialogHeader>

        <div className="w-full flex gap-y-4 flex-col">
          <h2 className="heading03b">{name}</h2>
          <div className="flex h-[calc(100%-52px)] gap-x-8">
            <Image
              src="/incheon.svg"
              width={360}
              height={110}
              priority
              alt={`${name} 로고 사진`}
            />
            <div className="w-[calc(100%-393px)] [&_>_div]:h-full">
              <Table type="description" className="h-full table-auto">
                <TableCaption>{name} 테이블</TableCaption>
                <TableBody>
                  <TableRow>
                    <TableHead className="w-50 text-center">교구명</TableHead>
                    <TableCell>인천교구</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="w-50 text-center">전화번호</TableHead>
                    <TableCell>032-765-6960</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="w-50 text-center">주소</TableHead>
                    <TableCell>
                      인천광역시 동구 박문로1 (송림동 103-25)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="w-50 text-center">홈페이지</TableHead>
                    <TableCell>
                      <Link
                        href="http://www.caincheon.or.kr/"
                        target="_blank"
                        className="hover:underline hover:underline-offset-4 text-blue-600"
                      >
                        http://www.caincheon.or.kr/
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="w-50 text-center">
                      접수 홈페이지
                    </TableHead>
                    <TableCell>
                      <Link
                        href="https://did-incheon.vercel.app/"
                        target="_blank"
                        className="hover:underline hover:underline-offset-4 text-blue-600"
                      >
                        https://did-incheon.vercel.app/
                      </Link>
                    </TableCell>
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
