import {createSlice} from "@reduxjs/toolkit"

// create auth slice
const authSlice = createSlice({
    name: "auth",
    initialState:{
        user:null,
        message:null,
        error:null,
        loader: false
    },
    reducers: {},
    extraReducers:(builder)=>{

    }
})

// selector

// actions
export const {}= authSlice.actions

// reducer
export default authSlice.reducer