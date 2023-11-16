"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

function SelectItemCheckbox({ label, options }) {
  const { theme } = useTheme();
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
      <Listbox value={selectedOptions} onChange={setSelectedOptions} multiple>
        {({ open }) => (
          <>
            <Listbox.Label className="text-sm">{label}</Listbox.Label>
            <div className="relative">
              <Listbox.Button className="flex w-full items-center justify-between rounded-lg border border-transparent bg-custom-gray-100 py-3 pl-5 pr-3 text-base text-custom-gray-700 transition-all  hover:border-custom-gray-500 dark:bg-custom-black-500 dark:hover:border-custom-gray-900 lg:w-[492px]">
                <span>
                  {label}{" "}
                  {selectedOptions.length > 0
                    ? `(${selectedOptions.length})`
                    : ``}
                </span>
                <span className="inline-block h-6 w-6">
                  <Image
                    src={
                      open
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
              </Listbox.Button>
              {open && (
                <Listbox.Options className="select-options-card-type absolute z-50 mt-1 w-full">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option}
                      className="flex items-center gap-2 transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300"
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span className="ml-6 inline-block h-6 w-6 cursor-pointer">
                            <Image
                              src={
                                selected
                                  ? theme === "light"
                                    ? "/checked_box-light.svg"
                                    : "/checked_box-dark.svg"
                                  : theme === "light"
                                  ? "/box-light.svg"
                                  : "/box-dark.svg"
                              }
                              alt="Checkbox Icon"
                              width={50}
                              height={50}
                            />
                          </span>
                          <span className="w-full cursor-pointer py-3 text-base">
                            {option}
                          </span>
                        </>
                      )}
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

export default SelectItemCheckbox;
