"use client";

import SelectItem from "@/components/UI/CustomElements/SelectItem";

function SettingsLocationPageContent() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-col gap-6 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
        <SelectItem
          label="Language"
          placeholder="English"
          options={["Item 1", "Item 2", "Item 3", "Item 4"]}
        />
        <SelectItem
          label="Country"
          placeholder="Russia"
          options={["Item 1", "Item 2", "Item 3", "Item 4"]}
        />
        <SelectItem
          label="State"
          placeholder="Moscow"
          options={["Item 1", "Item 2", "Item 3", "Item 4"]}
        />
        <SelectItem
          label="City"
          placeholder="Moscow"
          options={["Item 1", "Item 2", "Item 3", "Item 4"]}
        />
      </div>
    </form>
  );
}

export default SettingsLocationPageContent;
