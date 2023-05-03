import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const LoginCall = createAsyncThunk("Login", async ({ email, password }, { rejectWithValue }) => {
   try {
      const { data } = await axios.post("https://nodejs-social-app.onrender.com/user/login", { email, password }, { withCredentials: true });
      return data;
   } catch (error) {
      const message = error.response.data.message;
      const status = error.response.status;
      return rejectWithValue({ message, status,success:false });
   }
});