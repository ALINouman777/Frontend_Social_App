import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Allpost = createAsyncThunk(
  "AllPost",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://backend-todo-app-pby6.onrender.com/post/all", {
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
        `https://backend-todo-app-pby6.onrender.com/post/LikeandUnlike/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log(data)
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
        `https://backend-todo-app-pby6.onrender.com/post/CreatComment/${id}`,
        { comment },
        {
          withCredentials: true,
        }
      );
      console.log(data)
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
        `https://backend-todo-app-pby6.onrender.com/post/viewcomment/${id}`,
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
        `https://backend-todo-app-pby6.onrender.com/post/deleteComment/${id}`,
        {
          data: { commentId },
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
        `https://backend-todo-app-pby6.onrender.com/post/delete/${id}`,
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


export const AsyncCreatePost = createAsyncThunk("AsyncCreatePost", async ({image, caption}, {rejectWithValue}) => {
  try {

    const { data: res } = await axios.post("https://backend-todo-app-pby6.onrender.com/post/upload", {image,caption}, {
      withCredentials: true
    });
    return res;
  } catch (error) {
    console.log(error)
    return rejectWithValue(error);
  }
});
