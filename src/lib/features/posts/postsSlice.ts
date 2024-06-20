import { createSlice } from "@reduxjs/toolkit";
import actGetPosts from "./act/actGetPosts";
type TPosts = {
  records: {
    id: number;
    title: string;
    body: string;
  }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};
const initialState: TPosts = {
  records: [],
  loading: "idle",
  error: null,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetPosts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetPosts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetPosts.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { actGetPosts };
export default postsSlice.reducer;
