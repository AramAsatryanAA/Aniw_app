import { useState } from "react";

const languageOptions = ["English", "Russian"];

function UserBlockModalLanguages({ onCloseUserModal }) {
  const [showUserBlockModalLanguages, setShowUserBlockModalLanguages] =
    useState(false);

  return (
    <div className="relative">
      <button
        className={`rounded-3xl bg-custom-gray-100 px-3 py-1 text-base transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-500 ${
          showUserBlockModalLanguages &&
          "bg-custom-gray-300 dark:bg-custom-black-500"
        }`}
        onClick={() =>
          setShowUserBlockModalLanguages((prevState) => !prevState)
        }
      >
        EN
      </button>
      {showUserBlockModalLanguages && (
        <div className="select-options-card-type absolute left-0 top-10 z-[888]">
          {languageOptions.map((language) => (
            <button
              key={language}
              className="select-option-item-type"
              onClick={onCloseUserModal}
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserBlockModalLanguages;
