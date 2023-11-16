"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function SearchPageNavigationItem({ path, title }) {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`rounded-lg border border-transparent px-2 py-1 text-base font-medium transition-all ${
        path === pathName
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "hover:border-black dark:text-white dark:hover:border-white"
      }`}
    >
      {title}
    </Link>
  );
}

export default SearchPageNavigationItem;
