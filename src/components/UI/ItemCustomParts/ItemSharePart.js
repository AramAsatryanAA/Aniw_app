"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

import SocialMediaLinksBlock from "UI/SocialMediaLinks-Block/SocialMediaLinksBlock";

function ItemSharePart() {
  const { theme } = useTheme();
  const [showItemShareModal, setShowItemShareModal] = useState(false);

  return (
    <div className="relative">
      <button
        className={`h-8 w-8 rounded-full bg-custom-gray-100 p-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300  ${
          showItemShareModal && "bg-custom-gray-300 dark:bg-custom-black-300"
        }`}
        onClick={() => {
          setShowItemShareModal((prevState) => !prevState);
        }}
      >
        <Image
          src={theme === "dark" ? "/share-dark.svg" : "/share-light.svg"}
          alt="Share Icon"
          width={50}
          height={50}
        />
      </button>
      {showItemShareModal && (
        <div className="modal-item-card-type absolute -left-[267px] top-10 z-[777] flex flex-col gap-6 px-4 lg:left-0 lg:px-6">
          <button className="button-black-type">Copy link</button>
          <SocialMediaLinksBlock />
        </div>
      )}
    </div>
  );
}

export default ItemSharePart;
