import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getHistory = createAsyncThunk("history/getHistory", async (token) => {
  const result = {};
  // limit = parseInt()||5;
  // page = parseInt()||1;
  // keyword = keyword || ''
  try {
    // const query = URLSearchParams({token,limit,page,keyword}).toString()
    const { data } = await http(token).get(`/history?sortType1=ASC?`);
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});