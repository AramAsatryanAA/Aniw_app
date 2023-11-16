"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

function CreateNewItemBlock({ itemType, pagePath }) {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between gap-3 px-4 lg:px-0">
      <span className="inline-block h-10 w-10">
        <Image
          src="/avatar_profile.png"
          alt="User Avatar"
          width={300}
          height={300}
        />
      </span>
      <Link
        href={pagePath}
        className="flex-1 rounded-xl border border-transparent bg-white px-4 py-3 text-base text-custom-gray-700 transition-all hover:border-custom-gray-500 dark:bg-custom-black-100 dark:hover:border-custom-gray-900"
      >
        {`Create new ${itemType}`}
      </Link>
      <Link
        href={pagePath}
        className="h-12 w-12 rounded-xl border border-transparent bg-white p-3 transition-all hover:border-custom-gray-500 dark:bg-custom-black-100 dark:hover:border-custom-gray-900"
      >
        <Image
          src={theme === "dark" ? "/img-dark.svg" : "/img-light.svg"}
          alt="Image Icon"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}

export default CreateNewItemBlock;
