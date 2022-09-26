import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getUser = createAsyncThunk("gatData/getUsers", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("/getUsers");
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});