import Link from "next/link";
import Image from "next/image";
import { content, type Locale } from "@/app/(nation)/_lib/content";

export default function Footer({ locale = "kr" }: { locale?: Locale }) {
  const t = content[locale].footer;

  return (
    <footer className="w-dvw flex h-[296px] justify-between bg-[#222] px-8 py-[30px] text-white max-[1079px]:flex-wrap max-[1079px]:h-auto max-[1079px]:gap-y-8">
      <div className="flex flex-col">
        <h3 className="mb-6">
          <Link href={t.homeHref} className="flex items-center gap-x-1">
            <Image
              src="/logo-white.svg"
              className="w-auto h-auto"
              width={104}
              height={120}
              alt={t.logoAlt}
              priority
            />
          </Link>
        </h3>
        <address className="not-italic">
          <ul className="flex flex-col gap-y-2 body02R">
            <li>{t.address}</li>
            {t.address2 && <li>{t.address2}</li>}
            <li>{t.email}</li>
          </ul>
        </address>
      </div>
      <div>
        <h3 className="heading03B">{t.phone}</h3>
        <p className="body02R">{t.hours}</p>
        <ul className="mt-4 mb-12 flex gap-x-4">
          {t.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="body02R underline underline-offset-4"
                target="_blank"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="body02R">{t.copyright}</p>
      </div>
    </footer>
  );
}
