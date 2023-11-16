"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

const sortOptions = ["Item 1", "Item 2", "Item 3", "Item 4"];

function SortItems() {
  const { theme } = useTheme();
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Voites");

  function selectSortOptionHandler(option) {
    setSelectedSortOption(option);
    setShowSortOptions(false);
  }

  return (
    <div className="flex flex-col gap-1">
      <div
        className="group flex cursor-pointer items-center justify-between rounded-xl border border-transparent bg-white px-6 py-4 transition-all dark:bg-custom-black-100 dark:hover:border-custom-gray-900 lg:py-5"
        onClick={() => setShowSortOptions((prevState) => !prevState)}
      >
        <span className="text-sm font-semibold">Sort</span>
        <div className="flex items-center gap-2">
          <span
            className={`text-base transition-all group-hover:text-custom-gray-900 ${
              showSortOptions && "text-custom-gray-900"
            }`}
          >
            {selectedSortOption}
          </span>
          <span className="inline-block h-6 w-6">
            <Image
              src={
                showSortOptions
                  ? theme === "dark"
                    ? "/arrow_close-dark.svg"
                    : "/arrow_close-light.svg"
                  : theme === "dark"
                  ? "/arrow_open-dark.svg"
                  : "/arrow_open-light.svg"
              }
              alt="Arrow Icon"
              width={50}
              height={50}
            />
          </span>
        </div>
      </div>
      {showSortOptions && (
        <ul className="select-options-card-type">
          {sortOptions.map((option) => (
            <li
              key={option}
              className="select-option-item-type"
              onClick={() => selectSortOptionHandler(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortItems;
