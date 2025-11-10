"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { useState, useEffect, useMemo } from "react";

import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Menu from "../menu";

export default function Header() {
  const { push } = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState("kr");
  const [isScrolled, setIsScrolled] = useState(false);

  const supportedLangs = useMemo(() => {
    return ["kr", "en", "jp", "cn"];
  }, []);

  const isRootPage = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.length === 1 && supportedLangs.includes(segments[0]);
  }, [pathname, supportedLangs]);

  useEffect(() => {
    const targetElement = document.querySelector("#section");

    if (!targetElement) return;

    const handleScroll = () => {
      const rect = targetElement.getBoundingClientRect();
      const headerHeight = 120;

      setIsScrolled(rect.top <= headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isRootPage) {
      setIsScrolled(false);
    }
  }, [isRootPage]);

  useEffect(() => {
    const firstSegment = pathname.split("/")[1];
    if (supportedLangs.includes(firstSegment)) {
      setValue(firstSegment);
    } else {
      setValue("kr");
    }
  }, [pathname, supportedLangs]);

  const handleLanguageChange = (lang: string) => {
    setValue(lang);

    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];

    let newPath = "";

    if (supportedLangs.includes(firstSegment)) {
      segments[0] = lang;
      newPath = "/" + segments.join("/");
    } else {
      newPath = `/${lang}/${segments.join("/")}`;
    }

    push(newPath || `/${lang}`);
  };

  const shouldShowWhiteBg = !isRootPage || isScrolled;

  return (
    <header
      className={cn(
        "w-full h-30 flex items-center px-8 fixed top-0 left-0 z-5000 justify-between transition-colors duration-300",

        isRootPage && !isScrolled && "bg-transparent text-white border-none",
        isRootPage &&
          isScrolled &&
          "bg-white text-black border-b border-gray-200 shadow-sm",

        !isRootPage && "bg-white text-black border-b border-gray-200"
      )}
    >
      <h1>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="wyd logo"
            width={60}
            height={40}
            className="w-auto h-18"
            priority
          />
        </Link>
      </h1>

      <ul className="flex items-center gap-x-1">
        <li>
          <Select value={value} onValueChange={handleLanguageChange}>
            <SelectTrigger className="border-none font-black text-lg" size="lg">
              <SelectValue className="placeholder:text-white data-[placeholder]:text-white" />
            </SelectTrigger>
            <SelectContent size="lg" className="font-black">
              <SelectItem value="kr" size="lg">
                KR
              </SelectItem>
              <SelectItem value="en" size="lg">
                ENG
              </SelectItem>
              <SelectItem value="jp" size="lg">
                JP
              </SelectItem>
              <SelectItem value="cn" size="lg">
                CN
              </SelectItem>
            </SelectContent>
          </Select>
        </li>

        <li
          className={cn(
            "transition-colors duration-500",
            shouldShowWhiteBg
              ? "[&_svg_path]:fill-black"
              : "[&_svg_path]:fill-white"
          )}
        >
          <Menu />
        </li>
      </ul>
    </header>
  );
}
