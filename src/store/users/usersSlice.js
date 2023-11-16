import { createSlice } from "@reduxjs/toolkit";

import UserAvatar_1 from "@@@/users_page/avatar_user_1.png";
import UserAvatar_2 from "@@@/users_page/avatar_user_2.png";
import UserAvatar_3 from "@@@/users_page/avatar_user_3.png";
import UserAvatar_4 from "@@@/users_page/avatar_user_4.png";
import UserAvatar_5 from "@@@/users_page/avatar_user_5.png";
import UserAvatar_6 from "@@@/users_page/avatar_user_6.png";
import UserAvatar_7 from "@@@/users_page/avatar_user_7.png";
import UserAvatar_8 from "@@@/users_page/avatar_user_8.png";
import UserAvatar_9 from "@@@/users_page/avatar_user_9.png";
import UserAvatar_10 from "@@@/users_page/avatar_user_10.png";
import UserAvatar_11 from "@@@/users_page/avatar_user_11.png";
import UserAvatar_12 from "@@@/users_page/avatar_user_12.png";
import UserAvatar_13 from "@@@/users_page/avatar_user_13.png";
import UserAvatar_14 from "@@@/users_page/avatar_user_14.png";
import UserAvatar_15 from "@@@/users_page/avatar_user_15.png";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      {
        id: "user_1",
        avatar: UserAvatar_1,
        isAdmin: false,
        nickName: "Marama",
        fullName: "Jaquon Hart",
        createdAt: "2023, 08, 19",
        country: "Georgia",
      },
      {
        id: "user_2",
        avatar: UserAvatar_2,
        isAdmin: false,
        nickName: "Ekene",
        fullName: "Karlien Nijhuis",
        createdAt: "2023, 08, 19",
        country: "Germany",
      },
      {
        id: "user_3",
        avatar: UserAvatar_3,
        isAdmin: false,
        nickName: "Karl",
        fullName: "Homura Yunosuke",
        createdAt: "2023, 08, 19",
        country: "United Kingdom",
      },
      {
        id: "user_4",
        avatar: UserAvatar_4,
        isAdmin: true,
        nickName: "Nghiêm",
        fullName: "Christopher Walker",
        createdAt: "2023, 08, 19",
        country: "China",
      },
      {
        id: "user_5",
        avatar: UserAvatar_5,
        isAdmin: false,
        nickName: "Fabiana",
        fullName: "Lucas Pacheco",
        createdAt: "2023, 08, 19",
        country: "United Kingdom",
      },
      {
        id: "user_6",
        avatar: UserAvatar_6,
        isAdmin: false,
        nickName: "Jaroslav",
        fullName: "Morganne Flaherty",
        createdAt: "2023, 08, 19",
        country: "Japan",
      },
      {
        id: "user_7",
        avatar: UserAvatar_7,
        isAdmin: false,
        nickName: "Tan",
        fullName: "Lacara Jones",
        createdAt: "2023, 08, 19",
        country: "North Korea",
      },
      {
        id: "user_8",
        avatar: UserAvatar_8,
        isAdmin: true,
        nickName: "Valdemar",
        fullName: "Sara Scholz",
        createdAt: "2023, 08, 19",
        country: "China",
      },
      {
        id: "user_9",
        avatar: UserAvatar_9,
        isAdmin: false,
        nickName: "Kung",
        fullName: "Jaquon Hart",
        createdAt: "2023, 08, 19",
        country: "Georgia",
      },
      {
        id: "user_10",
        avatar: UserAvatar_10,
        isAdmin: false,
        nickName: "Karlien Nijhuis",
        fullName: "Morganne Flaherty",
        createdAt: "2023, 08, 19",
        country: "Germany",
      },
      {
        id: "user_11",
        avatar: UserAvatar_11,
        isAdmin: false,
        nickName: "Chuwon",
        fullName: "Homura Yunosuke",
        createdAt: "2023, 08, 19",
        country: "United Kindom",
      },
      {
        id: "user_12",
        avatar: UserAvatar_12,
        isAdmin: false,
        nickName: "Indu",
        fullName: "Christopher Walker",
        createdAt: "2023, 08, 19",
        country: "China",
      },
      {
        id: "user_13",
        avatar: UserAvatar_13,
        isAdmin: false,
        nickName: "Meysam",
        fullName: "Pan He",
        createdAt: "2023, 08, 19",
        country: "North Korea",
      },
      {
        id: "user_14",
        avatar: UserAvatar_14,
        isAdmin: true,
        nickName: "Nghiêm",
        fullName: "Christopher Walker",
        createdAt: "2023, 08, 19",
        country: "China",
      },
      {
        id: "user_15",
        avatar: UserAvatar_15,
        isAdmin: false,
        nickName: "Fabiana",
        fullName: "Lucas Pacheco",
        createdAt: "2023, 08, 19",
        country: "United Kingdom",
      },
    ],
    usersPerPage: 10,
    currentPage: 1,
    searchQuery: "",
    searchedUsers: [],
  },
  reducers: {
    searchUsers(state, action) {
      const searchQuery = action.payload;

      const searchResult = state.users.filter((user) => {
        return (
          user.fullName.toLowerCase().includes(searchQuery) ||
          user.nickName.toLowerCase().includes(searchQuery)
        );
      });

      state.currentPage = 1;
      state.searchQuery = searchQuery;
      state.searchedUsers = searchResult;
    },

    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },

    removeUsersSearchQuery(state) {
      state.searchQuery = "";
    },
  },
});

export const searchUsers = usersSlice.actions.searchUsers;
export const changeCurrentPage = usersSlice.actions.changeCurrentPage;
export const removeUsersSearchQuery = usersSlice.actions.removeUsersSearchQuery;

export default usersSlice.reducer;
