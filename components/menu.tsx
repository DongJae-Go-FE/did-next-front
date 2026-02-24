"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { type ComponentProps } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { X, Menu as MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { content, type Locale } from "@/app/(nation)/_lib/content";

export default function Menu({ locale = "kr" }: { locale?: Locale }) {
  const t = content[locale].menu;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="cursor-pointer">
          <MenuIcon width={40} height={40} />
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        data-lenis-prevent
        className={cn(
          "w-screen h-screen sm:max-w-full rounded-none bg-black p-0 gap-0 border-none max-w-full",
          "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up",
          "flex flex-col",
        )}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{t.dialogTitle}</DialogTitle>
          <DialogDescription>{t.dialogDescription}</DialogDescription>
        </DialogHeader>
        <div className="px-8 flex-1 overflow-y-auto">
          <div className="w-full h-30 flex justify-between items-center flex-shrink-0 max-[1079px]:border-b max-[1079px]:border-gray-800">
            <h2>
              <DialogClose asChild>
                <Link href={t.logoHref}>
                  <Image
                    src="/logo-white.svg"
                    alt="wyd logo"
                    width={60}
                    height={40}
                    className="w-auto h-18"
                    priority
                  />
                </Link>
              </DialogClose>
            </h2>
            <DialogClose asChild>
              <button type="button" className="cursor-pointer">
                <X width={40} height={40} fill="#fff" className="text-white" />
              </button>
            </DialogClose>
          </div>
          <nav className="w-full flex text-white py-8 max-[1079px]:flex-col max-[1079px]:gap-y-5 max-[1079px]:overflow-y-auto h-[calc(100dvh-120px)]">
            {t.sections.map((section, sectionIdx) => (
              <MenuContainer
                key={section.title}
                className={sectionIdx === t.sections.length - 1 ? "border-r-0" : ""}
              >
                <MenuContainerTitle>{section.title}</MenuContainerTitle>
                <MenuContainerList
                  style={{
                    animationDelay: `${1 + sectionIdx * 0.4}s`,
                  }}
                >
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <MenuContainerListItemLink href={item.href || ""}>
                        {item.label}
                      </MenuContainerListItemLink>
                    </li>
                  ))}
                </MenuContainerList>
              </MenuContainer>
            ))}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function MenuContainer({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex-1 border-r border-gray-800 px-4 max-[1079px]:border-r-0 max-[1079px]:border-b max-[1079px]:pb-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function MenuContainerTitle({
  children,
  className,
  ...props
}: ComponentProps<"h3">) {
  return (
    <h3 className={cn("heading02b mb-5", className)} {...props}>
      {children}
    </h3>
  );
}

function MenuContainerList({
  children,
  className,
  ...props
}: ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "heading03b flex gap-y-3 flex-col animate-bottomUp opacity-0 max-[1079px]:pl-4",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

function MenuContainerListItemLink({
  href,
  className,
  children,
  ...props
}: ComponentProps<"a">) {
  const pathName = usePathname();

  return (
    <DialogClose asChild>
      <Link
        href={href || ""}
        className={cn(
          "hover:text-[#0052CC] transition-colors duration-300 relative",
          "before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-1 before:bg-[#0052cc] before:transition-[width] before:delay-200 hover:before:w-full",
          pathName === href &&
            "text-[#0052CC] before:h-1 before:bg-[#0052cc] before:w-full",
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    </DialogClose>
  );
}
