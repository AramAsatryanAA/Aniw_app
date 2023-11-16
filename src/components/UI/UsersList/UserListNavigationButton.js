"use client";

import Image from "next/image";

function UserListNavigationButton({ disabled, onGoToPage, theme, imageSrc }) {
  const imagePath =
    theme === "dark" ? `/${imageSrc}-dark.svg` : `/${imageSrc}-light.svg`;

  return (
    <button
      className="h-8 w-8 rounded-full bg-white p-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-100 dark:hover:bg-custom-black-300"
      disabled={disabled}
      onClick={onGoToPage}
    >
      <Image src={imagePath} alt={`${imageSrc} Icon`} width={70} height={70} />
    </button>
  );
}

export default UserListNavigationButton;
