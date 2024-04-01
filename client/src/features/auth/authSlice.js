import { createSlice } from "@reduxjs/toolkit";
import { registerPatient } from "./authApiSlice";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty:(state)=>{
        state.error = null,
        state.message = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPatient.pending, (state) => {
        state.loader = true;
      })
      .addCase(registerPatient.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      }).addCase(registerPatient.fulfilled,(state,action)=>{
        state.loader = false;
        state.message = action.payload.message
      })
  },
});

// selector
export const authSelector = (state)=>state.auth

// actions
export const {setMessageEmpty} = authSlice.actions;

// reducer
export default authSlice.reducer;
