import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userData)=>{
        const request= await axios.post(`your Api `, userData)
        console.log(request)
        const response = await request.data
        localStorage.setItem('Userdata', JSON.stringify(response))
    }
)
const userSlice= createSlice({
    name:  'user',
    initialState:{
        loading:false,
        user:null,
        error:null,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending, (state)=>{
            state.loading= true;
            state.user = null;
            state.error = null
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.loading= true;
            state.user = action.payload;
            state.error = null
        })
        
        .addCase(loginUser.rejected, (state, action)=>{
            state.loading= true;
            state.user = null;
            debugger
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 404'){
                state.error='Access Denied Unauthorised'
            }else{
                state.error = action.error.message
            }
            
        })
    }
})
export default userSlice.reducer