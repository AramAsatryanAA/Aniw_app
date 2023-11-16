"use client";

import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

function TagsSelectItem() {
  const tags = useSelector((state) => state.tags);

  const [selectOptions, setSlelectOptions] = useState(tags);
  const [selected, setSelected] = useState([]);

  const { theme } = useTheme();

  function addSelectedTagHanler(tag) {
    setSelected((prevState) => [...prevState, tag]);
    setSlelectOptions((prevState) =>
      prevState.filter((option) => option !== tag),
    );
  }

  function removeSelectedTagHanler(tag) {
    setSelected((prevState) => prevState.filter((option) => option !== tag));
    setSlelectOptions((prevState) => [...prevState, tag]);
  }

  return (
    <div className="flex flex-col justify-between gap-2 lg:flex-row">
      <Listbox multiple>
        {({ open }) => (
          <>
            <Listbox.Label className="text-sm lg:pt-3">Tags</Listbox.Label>
            <div className="relative">
              <Listbox.Button className="flex w-full flex-wrap items-center justify-start gap-3 rounded-lg border border-transparent bg-custom-gray-100 p-3 text-sm  transition-all hover:border-custom-gray-500 dark:bg-custom-black-500 dark:hover:border-custom-gray-900 lg:w-[492px] ">
                {selected.length > 0 &&
                  selected.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-1 rounded-lg bg-white px-2 py-[2px] dark:bg-custom-black-100"
                    >
                      <span>{tag}</span>
                      <span
                        className="inline-block h-5 w-5"
                        onClick={() => removeSelectedTagHanler(tag)}
                      >
                        <Image
                          src={
                            theme === "dark"
                              ? "/close-dark.svg"
                              : "/close-light.svg"
                          }
                          alt="Arrow Icon"
                          width={50}
                          height={50}
                        />
                      </span>
                    </div>
                  ))}
                <span className="text-base text-custom-gray-700">Add tags</span>
              </Listbox.Button>
              {open && (
                <Listbox.Options className="select-options-card-type absolute z-50 mt-1 w-full">
                  {selectOptions.map((tag) => (
                    <Listbox.Option
                      key={tag}
                      className="select-option-item-type"
                      value={tag}
                      onClick={() => addSelectedTagHanler(tag)}
                    >
                      {tag}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              )}
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default TagsSelectItem;
