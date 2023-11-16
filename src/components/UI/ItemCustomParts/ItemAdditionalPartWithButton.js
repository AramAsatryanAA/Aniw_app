import React from "react";

function ItemAdditionalPartWithButton({ tools, fileType, size, btnText }) {
  return (
    <div className="flex flex-col border-y border-custom-gray-300 text-sm dark:border-custom-black-300">
      <div className="flex items-center justify-between gap-3 border-b border-custom-gray-300 py-4 dark:border-custom-black-300">
        <span className="font-semibold">Tools</span>
        <span>{tools}</span>
      </div>
      <div className="flex items-center justify-between gap-3 border-b border-custom-gray-300 py-4 dark:border-custom-black-300">
        <span className="font-semibold">File type</span>
        <span>{fileType}</span>
      </div>
      <div className="flex items-center justify-between gap-3 border-b border-custom-gray-300 py-4 dark:border-custom-black-300">
        <span className="font-semibold">Size</span>
        <span>{size} MB</span>
      </div>
      <button className="button-blue-type my-6 self-start px-5 py-3 lg:px-10">
        {btnText}
      </button>
    </div>
  );
}

export default ItemAdditionalPartWithButton;
