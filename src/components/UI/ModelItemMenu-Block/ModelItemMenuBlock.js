"use client";

import { useState } from "react";
import Image from "next/image";

function ModelItemMenuBlock({ theme }) {
  const [showMenuModal, setShowMenuModal] = useState(false);

  return (
    <div className="relative">
      <button
        className={`h-8 w-8 rounded-full p-1 transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300  ${
          showMenuModal && "bg-custom-gray-100 dark:bg-custom-black-300"
        }`}
        onClick={() => setShowMenuModal((prevState) => !prevState)}
      >
        <Image
          src={theme === "dark" ? "/dots-dark.svg" : "/dots-light.svg"}
          alt="Dots Icon"
          width={50}
          height={50}
        />
      </button>
      {showMenuModal && (
        <div className="absolute right-0 top-10 z-[888] whitespace-nowrap">
          <div className="select-options-card-type">
            <button
              className="select-option-item-type justify-start"
              onClick={() => setShowMenuModal(false)}
            >
              Rename
            </button>
            <button
              className="select-option-item-type justify-start"
              onClick={() => setShowMenuModal(false)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModelItemMenuBlock;
