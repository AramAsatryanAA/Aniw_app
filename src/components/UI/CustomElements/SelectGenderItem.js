"use client";

import { useState } from "react";

const gendersToChoose = [
  { title: "Female", isActive: false },
  { title: "Male", isActive: false },
];

function SelectGenderItem() {
  const [genders, setGenders] = useState(gendersToChoose);

  function selectActiveGenderHandler(title) {
    setGenders((prevState) =>
      prevState.map((item) =>
        item.title === title
          ? { ...item, isActive: true }
          : { ...item, isActive: false },
      ),
    );
  }

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
      <label className="text-sm" htmlFor="gender">
        Gender
      </label>
      <div className="flex items-center gap-3 lg:w-[492px]">
        {genders.map((gender) => (
          <input
            key={gender.title}
            id="gender"
            type="button"
            defaultValue={gender.title}
            onClick={() => selectActiveGenderHandler(gender.title)}
            className={`w-full cursor-pointer rounded-[4px] border bg-custom-gray-100 py-3 text-center text-base transition-all dark:bg-custom-black-500 ${
              gender.isActive
                ? "border-black text-black dark:border-white dark:text-white"
                : "border-transparent text-custom-gray-700 hover:bg-custom-gray-300 dark:hover:bg-custom-black-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectGenderItem;
