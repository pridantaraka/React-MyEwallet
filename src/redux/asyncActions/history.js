import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getHistory = createAsyncThunk("history/getHistory", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("/history?sortType1=ASC");
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});