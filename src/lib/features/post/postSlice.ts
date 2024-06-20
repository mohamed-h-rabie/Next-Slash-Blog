import { createSlice } from "@reduxjs/toolkit";
import actGetPostById from "./act/actGetPostById";
type TPost = {
  records: {
    id?: number;
    title: string;
    body: string;
  }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};
const initialState: TPost = {
  records: [],
  loading: "idle",
  error: null,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postCleanUp(state) {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetPostById.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetPostById.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetPostById.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { actGetPostById };
export const { postCleanUp } = postSlice.actions;
export default postSlice.reducer;
