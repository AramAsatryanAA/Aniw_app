import Image from "next/image";
import Link from "next/link";

import SideNavigationBar from "UI/SideNavigationBar/SideNavigationBar";

function MobileMenu({ theme, onCloseMobileMenu }) {
  return (
    <div className="absolute left-0 top-0 z-[999] min-h-screen w-full bg-white dark:bg-custom-black-500 lg:hidden">
      <div className="flex items-center justify-between border-b border-custom-gray-300 px-5 py-4 dark:border-none dark:bg-custom-black-100">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-block h-10 w-10">
            <Image src="/logo.png" alt="Page Logo" width={200} height={200} />
          </Link>
          <Link href="/" className="text-base font-medium">
            Aniw
          </Link>
        </div>
        <button className="h-8 w-8" onClick={onCloseMobileMenu}>
          <Image
            src={theme === "dark" ? "/close-dark.svg" : "/close-light.svg"}
            alt="Close Icon"
            width={70}
            height={70}
          />
        </button>
      </div>
      <SideNavigationBar onCloseMobileMenu={onCloseMobileMenu} />
    </div>
  );
}

export default MobileMenu;
