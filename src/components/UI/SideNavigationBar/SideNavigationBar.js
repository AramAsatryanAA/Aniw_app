"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

function SideNavigationBar({ onCloseMobileMenu }) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-6 px-5 py-6 lg:px-0 lg:py-0">
      <button className="button-black-type w-full max-w-[220px]">
        Create +
      </button>
      <div className="flex flex-col gap-6 border-y border-custom-gray-300 py-6 dark:border-custom-black-300">
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/post-dark.svg" : "/post-light.svg"}
              alt="Post Icon"
              width={50}
              height={50}
            />
          </span>
          <Link
            href="/posts"
            onClick={onCloseMobileMenu}
            className="text-base transition-all hover:text-custom-gray-700"
          >
            Posts
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/file-dark.svg" : "/file-light.svg"}
              alt="File Icon"
              width={50}
              height={50}
            />
          </span>
          <Link
            href="/files"
            onClick={onCloseMobileMenu}
            className="text-base transition-all hover:text-custom-gray-700"
          >
            Files
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/3d-dark.svg" : "/3d-light.svg"}
              alt="3D Model Icon"
              width={50}
              height={50}
            />
          </span>
          <Link
            href="/3d-models"
            onClick={onCloseMobileMenu}
            className="text-base transition-all hover:text-custom-gray-700"
          >
            3D Models
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="inline-block h-6 w-6">
          <Image
            src={theme === "dark" ? "/user-dark.svg" : "/user-light.svg"}
            alt="User Icon"
            width={50}
            height={50}
          />
        </span>
        <Link
          href="/users"
          onClick={onCloseMobileMenu}
          className="text-base transition-all hover:text-custom-gray-700"
        >
          Users
        </Link>
      </div>
    </div>
  );
}

export default SideNavigationBar;
