import { createSlice } from "@reduxjs/toolkit";

const tagsSlice = createSlice({
  name: "tags",
  initialState: ["Blender", "3Ds max", "Maya", "Cinema 4D", "FBX", "Obj"],
});

export default tagsSlice.reducer;
