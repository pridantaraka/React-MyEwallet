import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getuser = createAsyncThunk("getAllUser/getUsers", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("/getUsers");
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});