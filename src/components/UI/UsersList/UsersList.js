"use client";

import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage } from "@/store/users/usersSlice";

import UsersListMobile from "./UsersListMobile";
import UsersListDesktop from "./UsersListDesktop";
import UserListNavigationButton from "./UserListNavigationButton";

function UsersList() {
  const { theme } = useTheme();

  const { users, usersPerPage, currentPage, searchQuery, searchedUsers } =
    useSelector((state) => state.users);

  const currentUsers = searchQuery === "" ? users : searchedUsers;

  const usersTotalNumber = currentUsers.length;
  const totalPages = Math.ceil(usersTotalNumber / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage + 1;
  const endIndex = Math.min(startIndex + usersPerPage - 1, usersTotalNumber);

  const usersToShow = currentUsers.slice(startIndex - 1, endIndex);

  const dispatch = useDispatch();

  function goToPageHandler(page) {
    if (page >= 1 && page <= totalPages) {
      dispatch(changeCurrentPage(page));
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="xl:hidden">
        <UsersListMobile users={usersToShow} />
      </div>
      <div className="max-xl:hidden">
        <UsersListDesktop users={usersToShow} />
      </div>
      <div className="flex items-center justify-center gap-5">
        <UserListNavigationButton
          disabled={currentPage === 1}
          onGoToPage={() => goToPageHandler(currentPage - 1)}
          theme={theme}
          imageSrc="arrow_left"
        />
        <div className="text-base">
          {startIndex}-{endIndex} of {usersTotalNumber}
        </div>
        <UserListNavigationButton
          disabled={currentPage === totalPages}
          onGoToPage={() => goToPageHandler(currentPage + 1)}
          theme={theme}
          imageSrc="arrow_right"
        />
      </div>
    </div>
  );
}

export default UsersList;
