import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [
    "Owerwatch 2",
    "Diablo 4",
    "World of Warcraft",
    "StarCraft 2",
    "Hearthstone",
  ],
});

export default categoriesSlice.reducer;
