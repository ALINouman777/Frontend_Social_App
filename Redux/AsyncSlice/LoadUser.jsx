import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const LoadUser = createAsyncThunk("Loaduser", async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://backend-todo-app-pby6.onrender.com/user/me",{
        withCredentials:true
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });