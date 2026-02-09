import Link from "next/link";

import { BackDrop } from "../../ui/common";

import { ArrowRight } from "lucide-react";

export default function PrayPageEn() {
  return (
    <>
      <h2 className="heading02b text-[clamp(24px,6dvw,60px)] text-white relative z-50 w-full text-center">
        2027 Seoul World Youth Day
        <br />
        1 Billion Rosary Offering
      </h2>
      <div className="w-full h-auto flex items-center justify-center gap-x-2 relative z-50 max-[1079px]:flex-col max-[1079px]:gap-y-2">
        <Link
          href=""
          target="_blank"
          className="flex-1 w-full block border border-gray-100 rounded-sm p-6 text-white h-50 transition-all hover:bg-white hover:text-black duration-300 relative group"
        >
          <h3 className="heading03b text-[clamp(24px,3dvw,36px)] mb-2">
            Group Participation
          </h3>
          <p className="body01B text-[clamp(16px,2dvw,24px)]">
            Join the offering campaign
            <br />
            as a group through the WYD website.
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
          <h3 className="heading03b text-[clamp(24px,3dvw,36px)] mb-2">
            Individual Participation
          </h3>
          <p className="body01B text-[clamp(16px,2dvw,24px)]">
            Anyone can easily participate
            <br />
            in the offering campaign.
          </p>
          <ArrowRight
            width={70}
            height={40}
            className="bottom-6 right-6 absolute -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 max-[1079px]:bottom-auto max-[1079px]:top-6"
          />
        </Link>
      </div>
      <BackDrop />
    </>
  );
}
