"use client";

import { useSelector } from "react-redux";

import InputItem from "@/components/UI/CustomElements/InputItem";
import TextareaItem from "@/components/UI/CustomElements/TextareaItem";
import SelectItem from "@/components/UI/CustomElements/SelectItem";
import SelectItemCheckbox from "@/components/UI/CustomElements/SelectItemCheckbox";
import TagsSelectItem from "@/components/UI/CustomElements/TagsSelectItem";
import CreateItemFormButtons from "@/components/UI/CreateItem-Buttons/CreateItemFormButtons";
import SelectPriceItem from "@/components/UI/CustomElements/SelectPriceItem";

function CreateFileForm() {
  const categories = useSelector((state) => state.categories);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="mb-6 flex flex-col gap-6 border-y border-custom-gray-300 py-6 dark:border-custom-black-300">
        <InputItem id="title" label="Title" type="text" placeholder="Title" />
        <TextareaItem
          id="descriptions"
          label="Descriptions"
          placeholder="Descriptions"
        />
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <label htmlFor="images" className="text-sm lg:pt-3">
            Images
          </label>
          <input
            type="file"
            multiple
            id="images"
            className="w-full rounded-lg border border-custom-gray-500 bg-white px-5 py-3 placeholder:text-base dark:border-custom-gray-700 dark:bg-custom-black-500 lg:w-[492px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <label htmlFor="files" className="text-sm lg:pt-3">
            Files
          </label>
          <input
            type="file"
            multiple
            id="files"
            className="w-full rounded-lg border border-custom-gray-500 bg-white px-5 py-3 placeholder:text-base dark:border-custom-gray-700 dark:bg-custom-black-500 lg:w-[492px]"
          />
        </div>
        <SelectItem
          label="File type"
          options={["Item 1", "Item 2", "Item 3", "Item 4"]}
        />
        <SelectItemCheckbox
          label="Tools"
          options={["Item 1", "Item 2", "Item 3", "Item 4"]}
        />
        <SelectItemCheckbox label="Categories" options={categories} />
        <InputItem id="link" label="Link" type="text" placeholder="Link" />
        <TagsSelectItem />
        <SelectPriceItem />
      </div>
      <CreateItemFormButtons />
    </form>
  );
}

export default CreateFileForm;
