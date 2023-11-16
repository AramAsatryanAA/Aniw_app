"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

import SelectItem from "./SelectItem";

const currencySelectOptions = ["Item 1", "Item 2", "Item 3", "Item 4"];

function SelectPriceItem() {
  const { theme } = useTheme();
  const [selected, setSelected] = useState("Currency");

  const [selectedPriceOption, setSelectedPriceOption] = useState("Premium");

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <SelectItem
        label="Price"
        placeholder="Premium"
        options={["Premium", "Free"]}
        onChangeSelected={(option) => setSelectedPriceOption(option)}
      />
      {selectedPriceOption === "Premium" && (
        <div className="ml-auto flex w-full rounded-lg lg:w-[492px]">
          <input
            type="number"
            placeholder="0.00"
            min={0}
            className="input-type"
          />
          <div className="flex w-full flex-col justify-between gap-2 lg:flex-row lg:items-center">
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <div className="relative w-full">
                  <Listbox.Button className="flex w-full items-center justify-between rounded-lg border border-transparent bg-custom-gray-100 py-3 pl-5 pr-3 text-base text-custom-gray-700 transition-all  hover:border-custom-gray-500 dark:bg-custom-black-500 dark:hover:border-custom-gray-900">
                    <span>{selected}</span>
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
                      {currencySelectOptions.map((option) => (
                        <Listbox.Option
                          key={option}
                          className="select-option-item-type"
                          value={option}
                        >
                          {option}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  )}
                </div>
              )}
            </Listbox>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectPriceItem;
