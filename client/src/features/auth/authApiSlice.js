import { createAsyncThunk } from "@reduxjs/toolkit";

import API from "../../utils/api";

export const registerPatient = createAsyncThunk(
  "auth/registerPatient",
  async (data) => {
    try {
      const response = await API.post("/api/v1/auth/register", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const registerDonor = createAsyncThunk(
  "auth/registerDonor",
  async (data) => {
    try {
      const response = await API.post("/api/v1/auth/register", data);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const response = await API.post("/api/v1/auth/login", data);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await API.post("api/v1/auth/logout");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await API.post("api/v1/auth/me");

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const passwordChange = createAsyncThunk(
  "auth/passwordChange",
  async (data) => {
    try {
      const response = await API.post("api/v1/auth/password-change", data);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const profilePhotoUpdate = createAsyncThunk(
  "auth/profilePhotoUpdate",
  async (data) => {
    try {
      const response = await API.post("api/v1/auth/profile-photo-update", data);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
