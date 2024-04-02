import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerDonor, registerPatient } from "./authApiSlice";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("loginUser")
      ? JSON.parse(localStorage.getItem("loginUser"))
      : null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.error = null), (state.message = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPatient.pending, (state) => {
        state.loader = true;
      })
      .addCase(registerPatient.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(registerPatient.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      })
      .addCase(registerDonor.pending, (state) => {
        state.loader = true;
      })
      .addCase(registerDonor.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(registerDonor.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loader = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
        localStorage.setItem("loginUser", JSON.stringify(action.payload.user))
      });
  },
});

// selector
export const authSelector = (state) => state.auth;

// actions
export const { setMessageEmpty } = authSlice.actions;

// reducer
export default authSlice.reducer;
