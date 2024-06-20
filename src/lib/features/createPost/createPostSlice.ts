import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import actCreatePost from "./act/actCreatePost";

interface ICreatePost {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  records: {
    userId: number;
    title: string;
    body: string;
  } | null;
}
const initialState: ICreatePost = {
  loading: "idle",
  error: null,
  records: null,
};
const createPostSlice = createSlice({
  name: "createpost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actCreatePost.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actCreatePost.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actCreatePost.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { actCreatePost };
export default createPostSlice.reducer;
