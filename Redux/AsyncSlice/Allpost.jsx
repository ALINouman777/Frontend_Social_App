import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Allpost = createAsyncThunk(
  "AllPost",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://nodejs-social-app.onrender.com/post/all", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const LikeAndUnlikePost = createAsyncThunk(
  "LikePost",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4001/post/LikeandUnlike/${id}`,
        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const AsynComment = createAsyncThunk(
  "Comment",
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4001/post/CreatComment/${id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${document.cookie}`,
          },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AsynViewComment = createAsyncThunk(
  "viewComment",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4001/post/viewcomment/${id}`,
        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AsynDeleteComment = createAsyncThunk(
  "deleteComment",
  async ({ id, commentId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4001/post/deleteComment/${id}`,
        {
          data: { commentId },
          headers: {
            Authorization: `Bearer ${document.cookie}`,
          },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AsyncDeletePost = createAsyncThunk(
  "deletePost",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4001/post/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${document.cookie}`,
          },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  
  }
);


export const AsyncCreatePost = createAsyncThunk("AsyncCreatePost", async ({image, caption}, {rejectWithValue}) => {
  try {

    const { data: res } = await axios.post("http://localhost:4001/post/upload", {image,caption}, {
      withCredentials: true
    });
    return res;
  } catch (error) {
    console.log(error)
    return rejectWithValue(error);
  }
});
