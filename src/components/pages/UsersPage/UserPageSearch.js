"use client";

import { useTheme } from "next-themes";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { searchUsers } from "@/store/users/usersSlice";

function UserPageSearch() {
  const { theme } = useTheme();

  const searchInputRef = useRef(null);

  const dispatch = useDispatch();

  function searchHandler() {
    const enteredSearchQuery = searchInputRef.current.value
      .trim()
      .toLowerCase();

    dispatch(searchUsers(enteredSearchQuery));
  }

  return (
    <div className="relative mx-4 lg:mx-0">
      <span className="absolute left-4 top-3 inline-block h-6 w-6">
        <Image
          src={theme === "dark" ? "/search-dark.svg" : "/search-light.svg"}
          alt="Search Icon"
          width={50}
          height={50}
        />
      </span>
      <input
        ref={searchInputRef}
        type="search"
        placeholder="Search user"
        className="search-input-type bg-white dark:bg-custom-black-100 dark:focus:bg-custom-black-100"
        onChange={searchHandler}
      />
    </div>
  );
}

export default UserPageSearch;
