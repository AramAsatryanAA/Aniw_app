"use client";

import { useSelector } from "react-redux";

import SearchUsersList from "./SearchUsersList";

function SearchUsersPageContent() {
  const { searchedUsers, usersPerPage } = useSelector((state) => state.users);

  return (
    <SearchUsersList usersList={searchedUsers} usersPerPage={usersPerPage} />
  );
}

export default SearchUsersPageContent;
