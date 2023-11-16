"use client";

import Link from "next/link";

import UserBlockModalLanguages from "./UserBlockModalLanguages";
import SwitchThemeButton from "@/theme/SwitchThemeButton";

function UserBlockModal({ onCloseUserModal }) {
  return (
    <div className="modal-item-card-type absolute right-0 top-12 z-[888] w-[132px]">
      <div className="mb-4 flex items-center justify-center gap-2">
        <UserBlockModalLanguages onCloseUserModal={onCloseUserModal} />
        <SwitchThemeButton onCloseUserModal={onCloseUserModal} />
      </div>
      <div className="mb-6 flex flex-col border-y border-custom-gray-300 py-3 dark:border-custom-black-300">
        <Link
          href="/profile"
          className="select-option-item-type"
          onClick={onCloseUserModal}
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className="select-option-item-type"
          onClick={onCloseUserModal}
        >
          Settings
        </Link>
      </div>
      <button className="w-full justify-start px-6 text-base text-custom-gray-700 transition-all hover:font-semibold hover:text-custom-gray-900">
        Log Out
      </button>
    </div>
  );
}

export default UserBlockModal;
