import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "./posts/postsSlice";
import filesSlice from "./files/filesSlice";
import modelsSlice from "./models/modelsSlice";
import usersSlice from "./users/usersSlice";
import notificationsSlice from "./notifications/notificationsSlice";
import categoriesSlice from "./categories/categoriesSlice";
import tagsSlice from "./tags/tagsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    files: filesSlice,
    models: modelsSlice,
    users: usersSlice,
    notifications: notificationsSlice,
    categories: categoriesSlice,
    tags: tagsSlice,
  },
});
