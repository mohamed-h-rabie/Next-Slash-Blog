import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import axios, { isAxiosError } from "axios";
type TFormData = {
  title: string;
  body: string;
  userId: 1;
};
const actCreatePost = createAsyncThunk(
  "createpost/actCreatePost",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );

      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || error.response?.data.message || error.message
        );
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);
export default actCreatePost;
