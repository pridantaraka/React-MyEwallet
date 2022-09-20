import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getHistory = createAsyncThunk("history/getData", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("/getTransaction");
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});