import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { isAxiosError } from "axios";
const actGetPostById = createAsyncThunk(
  "post/actGetPost",
  async function (id: string, thunkAPI) {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?id=${id}`
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
export default actGetPostById;
