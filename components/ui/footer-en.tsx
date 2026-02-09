import Link from "next/link";
import Image from "next/image";

export default function FooterEn() {
  return (
    <footer className="w-dvw flex h-[296px] justify-between bg-[#222] px-8 py-[30px] text-white max-[1079px]:flex-wrap max-[1079px]:h-auto max-[1079px]:gap-y-8">
      <div className="flex flex-col">
        <h3 className="mb-6">
          <Link href="/en" className="flex items-center gap-x-1">
            <Image
              src="/logo-white.svg"
              className="w-auto h-auto"
              width={104}
              height={120}
              alt="DID Logo"
              priority
            />
          </Link>
        </h3>
        <address className="not-italic">
          <ul className="flex flex-col gap-y-2 body02R">
            <li>Address: 1 Bakmun-ro, Dong-gu, Incheon, Republic of Korea</li>
            <li>Email: masterforce999@naver.com</li>
          </ul>
        </address>
      </div>
      <div>
        <h3 className="heading03B">+82-32-765-6960</h3>
        <p className="body02R">Hours: 10:00 AM ~ 6:00 PM (KST)</p>
        <ul className="mt-4 mb-12 flex gap-x-4">
          <li>
            <Link
              href="http://www.caincheon.or.kr/"
              className="body02R underline underline-offset-4"
              target="_blank"
            >
              Diocese of Incheon
            </Link>
          </li>
          <li>
            <Link
              href="https://youth.caincheon.or.kr/"
              className="body02R underline underline-offset-4"
              target="_blank"
            >
              Incheon Youth Ministry
            </Link>
          </li>
        </ul>
        <p className="body02R">Copyright ⓒ WYD2027 SEOUL DID All rights reserved</p>
      </div>
    </footer>
  );
}
