import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AllUser=createAsyncThunk("AllUser",async(_,{rejectWithValue})=>{
   try {
    const {data}=await axios.get("http://localhost:4001/user/all",{
        withCredentials:true
    });
    return data;
    
   } catch (error) {
    return rejectWithValue(error.message);
   }
})


export const GetUser=createAsyncThunk("GetUser",async(id,{rejectWithValue})=>{
    try {
     const {data}=await axios.get(`http://localhost:4001/user/${id}`,{
         withCredentials:true
     });
     return data;
     
    } catch (error) {
     return rejectWithValue(error.message);
    }

})

export const AsyncFollowUser=createAsyncThunk("AsyncFollowUser",async(id,{rejectWithValue})=>{
    try {

        const {data}=await axios.get(`http://localhost:4001/user/follower/${id}`,{
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
        const {data}=await axios.get("http://localhost:4001/user/myfollowing",{
            withCredentials:true
        })
        return data;
    
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const AsyncFollowerList =createAsyncThunk("AsyncFollowerList",async(_,{rejectWithValue})=>{
    try {
        const {data}=await axios.get("http://localhost:4001/user/myfollower",{
            withCredentials:true
        })
        return data;
    
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const AsyncChangeProfile=createAsyncThunk("AsyncChangeProfile",async(data,{rejectWithValue})=>{
    try {
        const {data:res}=await axios.put("http://localhost:4001/user/changeprofile",data,{
            withCredentials:true
        })
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

export const AsyncChangePassword=createAsyncThunk("AsyncChangePassword",async(data,{rejectWithValue})=>{
    try {
        const {data:res}=await axios.put("http://localhost:4001/user/changepassword",data,{
            withCredentials:true
        })
        return res;
    
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
   

export const AsyncDeleteProfile =createAsyncThunk("DeleteProfile",async(_,{rejectWithValue})=>{

    try {
        const {data:res}=await axios.delete("http://localhost:4001/user/deleteprofile",{
            withCredentials:true
        })
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

export const AsyncLogoutProfile = createAsyncThunk("LogoutProfile",async(_,{rejectWithValue})=>{
    try {
        const {data:res}=await axios.get("http://localhost:4001/user/logout",{
            withCredentials:true
        })
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})