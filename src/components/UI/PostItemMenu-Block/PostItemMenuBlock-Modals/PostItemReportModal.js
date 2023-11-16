"use client";

import { useState } from "react";
import Image from "next/image";

const reportOptions = ["Spam", "Hate", "Harassment", "Other"];

function PostItemReportModal({ theme, onCloseReportModal }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function formSubmitHandler(event) {
    event.preventDefault();

    setSelectedOption(null);
    onCloseReportModal();
  }

  return (
    <div className="w-[320px] rounded-xl border border-custom-gray-300 bg-white px-6 py-6 dark:border-custom-black-300 dark:bg-custom-black-100">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Report</h1>
        <button
          className="h-8 w-8 transition-all hover:scale-110"
          onClick={onCloseReportModal}
        >
          <Image
            src={theme === "dark" ? "/close-dark.svg" : "/close-light.svg"}
            alt="Close Icon"
            width={50}
            height={50}
          />
        </button>
      </div>
      <form
        className="flex flex-col gap-3"
        onSubmit={(event) => formSubmitHandler(event)}
      >
        {reportOptions.map((option) => (
          <div key={option} className="flex items-center gap-2">
            <input
              type="radio"
              name="report-option"
              id={option}
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="h-4 w-4 cursor-pointer"
            />
            <label htmlFor={option} className="cursor-pointer text-base">
              {option}
            </label>
          </div>
        ))}
        <textarea
          name="report-message"
          placeholder="Report"
          rows={3}
          className="input-type mb-3 mt-1"
        />
        <button type="submit" className="button-blue-type">
          Send
        </button>
      </form>
    </div>
  );
}

export default PostItemReportModal;
