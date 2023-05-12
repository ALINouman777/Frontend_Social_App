import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AllUser=createAsyncThunk("AllUser",async(_,{rejectWithValue})=>{
   try {
    const {data}=await axios.get("https://backend-todo-app-pby6.onrender.com/user/all",{
        withCredentials:true
    });
    return data;
    
   } catch (error) {
    return rejectWithValue(error.message);
   }
})


export const GetUser=createAsyncThunk("GetUser",async(id,{rejectWithValue})=>{
    try {
     const {data}=await axios.get(`https://backend-todo-app-pby6.onrender.com/user/${id}`,{
         withCredentials:true
     });
     return data;
     
    } catch (error) {
     return rejectWithValue(error.message);
    }

})

export const AsyncFollowUser=createAsyncThunk("AsyncFollowUser",async(id,{rejectWithValue})=>{
    try {

        const {data}=await axios.get(`https://backend-todo-app-pby6.onrender.com/user/follower/${id}`,{
            withCredentials:true
        })

        return data;
    }
     catch (error) {
        return rejectWithValue(error.message);
    }
})


export const AsyncFollowingList =createAsyncThunk("AsyncFollowingList",async(_,{rejectWithValue})=>{
    try {
        const {data}=await axios.get("https://backend-todo-app-pby6.onrender.com/user/myfollowing",{
            withCredentials:true
        })
        return data;
    
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const AsyncFollowerList =createAsyncThunk("AsyncFollowerList",async(_,{rejectWithValue})=>{
    try {
        const {data}=await axios.get("https://backend-todo-app-pby6.onrender.com/user/myfollower",{
            withCredentials:true
        })
        return data;
    
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const AsyncChangeProfile=createAsyncThunk("AsyncChangeProfile",async(data,{rejectWithValue})=>{
    const {email, name}=data;
    try {
    
        const {data:res}=await axios.put("https://backend-todo-app-pby6.onrender.com/user/changeprofile",
        {email,name},
        {
            withCredentials:true
        })
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

export const AsyncChangePassword=createAsyncThunk("AsyncChangePassword",async(data,{rejectWithValue})=>{
    try {
        const {data:res}=await axios.put("https://backend-todo-app-pby6.onrender.com/user/changepassword",data,{
            withCredentials:true
        })
        return res;
    
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
   

export const AsyncDeleteProfile =createAsyncThunk("DeleteProfile",async(_,{rejectWithValue})=>{

    try {
        const {data:res}=await axios.delete("https://backend-todo-app-pby6.onrender.com/user/deleteprofile",{
            withCredentials:true
        })
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

export const AsyncLogoutProfile = createAsyncThunk("LogoutProfile",async(_,{rejectWithValue})=>{
    try {
        const {data:res}=await axios.get("https://backend-todo-app-pby6.onrender.com/user/logout",{
            withCredentials:true
        })
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})