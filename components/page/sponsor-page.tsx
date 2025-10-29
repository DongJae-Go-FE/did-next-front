import Link from "next/link";
import Image from "next/image";

import GradientText from "../gradient-text";

export default function SponsorPage() {
  return (
    <>
      <h2 className="heading02b mb-8 max-[1079px]:text-[24px] max-[767px]:text-[18px]">
        공식 후원사
      </h2>
      <ul
        className="grid w-full gap-2"
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(500px,100%), 1fr))",
        }}
      >
        {[...Array(9)].map((_, index) => {
          return (
            <li
              className="bg-white h-30 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors duration-100"
              key={index}
            >
              <Link
                href="/"
                className="flex w-full h-full justify-center items-center"
              >
                <Image
                  src="/logo/logo-andong.svg"
                  alt="스폰서1"
                  width={200}
                  height={40}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="h-100 bg-white w-full mt-2 border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-y-2">
        <h2 className="heading01b text-[clamp(18px,3dvw,40px)]">후원 문의</h2>
        <a href="#none">
          <GradientText
            colors={[
              "#0052CC",
              "#1A1A1A",
              "#E31E24",
              "#0056D2",
              "#000000",
              "#ED1C24",
            ]}
            animationSpeed={3}
            showBorder={false}
            className="heading01b text-[clamp(24px,3dvw,40px)]"
          >
            wyd2027@naver.com
          </GradientText>
        </a>
      </div>
    </>
  );
}
