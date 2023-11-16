"use client";

import { useSelector } from "react-redux";

import InputItem from "@/components/UI/CustomElements/InputItem";
import TextareaItem from "@/components/UI/CustomElements/TextareaItem";
import SelectItemCheckbox from "@/components/UI/CustomElements/SelectItemCheckbox";
import TagsSelectItem from "@/components/UI/CustomElements/TagsSelectItem";
import CreateItemFormButtons from "@/components/UI/CreateItem-Buttons/CreateItemFormButtons";

function CreatePostForm() {
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
        <SelectItemCheckbox label="Categories" options={categories} />
        <TagsSelectItem />
        <InputItem
          id="redirect"
          label="Redirect"
          type="text"
          placeholder="Redirect"
        />
      </div>
      <CreateItemFormButtons />
    </form>
  );
}

export default CreatePostForm;
