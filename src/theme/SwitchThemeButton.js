"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

function SwitchThemeButton({ onCloseUserModal }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="h-8 w-8 rounded-full bg-custom-gray-100 p-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        onCloseUserModal();
      }}
    >
      <Image
        src={theme === "dark" ? "/light_mode.svg" : "/dark_mode.svg"}
        alt="Theme Icon"
        width={100}
        height={100}
        className="rounded-full"
      />
    </button>
  );
}

export default SwitchThemeButton;
