import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { isAxiosError } from "axios";
const actGetPosts = createAsyncThunk(
  "posts/actGetPosts",
  async function (_, thunkAPI) {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
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
export default actGetPosts