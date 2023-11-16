"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MobileMenu from "UI/Header/MobileMenu";
import SearchBlock from "UI/Search-Block/SearchBlock";

function HeaderAuthentication() {
  const { theme } = useTheme();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBlock, setShowSearchBlock] = useState(false);

  return (
    <header className="h-[72px] bg-white dark:bg-custom-black-100">
      {!showSearchBlock ? (
        <div className="container px-4 py-4 lg:px-10 lg:py-3">
          <nav className="flex items-center justify-between gap-2 lg:gap-16">
            <div className="flex items-center gap-2 lg:w-[200px] xl:w-[280px]">
              <button
                className="h-6 w-6 lg:hidden"
                onClick={() => setShowMobileMenu(true)}
              >
                <Image
                  src={theme === "dark" ? "/menu-dark.svg" : "/menu-light.svg"}
                  alt="Menu Icon"
                  width={50}
                  height={50}
                />
              </button>
              <Link href="/" className="inline-block h-10 w-10">
                <Image src="/logo.png" alt="Page Logo" width={50} height={50} />
              </Link>
              <Link
                href="/"
                className="hidden text-base font-medium lg:inline-block"
              >
                Aniw
              </Link>
              <button
                className="button-card-type h-10 w-10 rounded-full p-2 lg:hidden"
                onClick={() => setShowSearchBlock(true)}
              >
                <Image
                  src={
                    theme === "dark" ? "/search-dark.svg" : "/search-light.svg"
                  }
                  alt="Search Icon"
                  width={50}
                  height={50}
                />
              </button>
            </div>
            <div className="hidden flex-1 lg:block">
              <SearchBlock />
            </div>
            <div className="flex items-center justify-end gap-2 whitespace-nowrap lg:w-[280px] lg:gap-4">
              <Link href="/login" className="button-gray-type px-3 lg:px-10">
                Log in
              </Link>
              <Link href="/sign-up" className="button-blue-type px-3 lg:px-10">
                Sign up
              </Link>
            </div>
          </nav>
          {showMobileMenu && (
            <MobileMenu
              theme={theme}
              onCloseMobileMenu={() => setShowMobileMenu(false)}
            />
          )}
        </div>
      ) : (
        <div className="px-5 py-3">
          <SearchBlock
            autoFocus={true}
            onCloseSearchBlock={() => setShowSearchBlock(false)}
          />
        </div>
      )}
    </header>
  );
}

export default HeaderAuthentication;
