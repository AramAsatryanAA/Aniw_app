"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

function CreateItemLanguageButtons() {
  const { theme } = useTheme();

  const [languageIsEnglish, setLanguageIsEnglish] = useState(true);
  const [russianLanguageIsAdded, setRussianLanguageIsAdded] = useState(false);

  return (
    <div className="flex items-center gap-6">
      <button
        className={`rounded-lg border border-transparent px-2 py-1 text-base font-medium transition-all ${
          languageIsEnglish
            ? "bg-black text-white dark:bg-white dark:text-black dark:hover:border-black"
            : "text-black hover:border-custom-gray-900 dark:text-white "
        }`}
        onClick={() => {
          setLanguageIsEnglish(true);
        }}
      >
        English
      </button>
      {russianLanguageIsAdded ? (
        <div
          className={`flex items-center gap-1 rounded-lg border border-transparent px-2 py-1 text-base font-medium transition-all ${
            languageIsEnglish
              ? "text-black hover:border-black dark:text-white dark:hover:border-white "
              : "bg-black text-white dark:bg-white dark:text-black"
          }`}
        >
          <button
            onClick={() => {
              setLanguageIsEnglish(false);
              setRussianLanguageIsAdded(true);
            }}
          >
            Russian
          </button>
          <button
            className="h-6 w-6"
            onClick={() => {
              setLanguageIsEnglish(true);
              setRussianLanguageIsAdded(false);
            }}
          >
            <Image
              src={
                theme === "dark"
                  ? languageIsEnglish
                    ? "/close-dark.svg"
                    : "/close-light.svg"
                  : languageIsEnglish
                  ? "/close-light.svg"
                  : "/close-dark.svg"
              }
              alt="Close Icon"
              width={50}
              height={50}
            />
          </button>
        </div>
      ) : (
        <button
          className="rounded-lg border border-transparent px-2 py-1 text-base text-custom-gray-700 transition-all hover:border-custom-gray-900  dark:hover:border-custom-gray-700"
          onClick={() => {
            setLanguageIsEnglish(false);
            setRussianLanguageIsAdded(true);
          }}
        >
          + Add Russian
        </button>
      )}
    </div>
  );
}

export default CreateItemLanguageButtons;
