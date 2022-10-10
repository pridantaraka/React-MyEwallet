import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getProfile = createAsyncThunk("profile/getProfile", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("/status");
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    console.log('data profile');
    return result;
  }
});