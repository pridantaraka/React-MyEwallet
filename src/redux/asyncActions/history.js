import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getHistory = createAsyncThunk("history/getData", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("/history");
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});