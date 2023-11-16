"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function PageNavigation({ navigationItems, flexWrap }) {
  const pathName = usePathname();

  return (
    <div
      className={`flex items-center gap-3 whitespace-nowrap md:gap-4 ${
        flexWrap ? "flex-wrap" : ""
      }`}
    >
      {navigationItems.map((item) => (
        <Link
          key={item.title}
          href={item.path}
          className={`rounded-lg border border-transparent px-2 py-1 text-base font-medium transition-all ${
            item.defaultPath === pathName || item.path === pathName
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "hover:border-black dark:text-white dark:hover:border-white"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default PageNavigation;
