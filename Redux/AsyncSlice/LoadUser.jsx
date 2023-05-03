import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const LoadUser = createAsyncThunk("Loaduser", async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:4001/user/me",{
        withCredentials:true
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });