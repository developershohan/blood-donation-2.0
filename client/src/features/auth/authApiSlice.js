import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerPatient = createAsyncThunk(
  "auth/registerPatient",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/auth/register",
        data,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
    
        throw new Error(error.response.data.message);

      }
  }
);
