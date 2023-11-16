"use client";

import InputItem from "@/components/UI/CustomElements/InputItem";
import SelectGenderItem from "@/components/UI/CustomElements/SelectGenderItem";

function SettingsPageContent() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-col gap-6 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
        <InputItem
          id="full-name"
          label="Fullname"
          type="text"
          placeholder="Lucas Pacheco"
        />
        <InputItem id="birthday" label="Birthday" type="date" placeholder="" />
        <SelectGenderItem />
        <InputItem id="about" label="About" type="text" placeholder="About" />
        <InputItem
          id="signature"
          label="Signature"
          type="text"
          placeholder="Signature"
        />
      </div>
    </form>
  );
}

export default SettingsPageContent;
