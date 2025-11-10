"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type MenusType = {
  label: string;
  href: string;
};

export default function LeftMenu(props: { title: string; menus: MenusType[] }) {
  const pathName = usePathname();

  return (
    <div className="relative border-r border-gray-200">
      <div className="w-60 text-gray-900 pt-4 max-[767px]:hidden sticky top-30">
        <h3 className="pl-8 h-14 flex items-center heading04b">
          {props.title}
        </h3>
        <nav>
          <ul className="w-full">
            {props.menus.map((items) => {
              return (
                <li key={items.label}>
                  <Link
                    href={items.href}
                    className={cn(
                      "block pl-8 py-3",
                      pathName === items.href ? "body01b" : "body01m"
                    )}
                  >
                    {items.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
