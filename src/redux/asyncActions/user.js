import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getUser = createAsyncThunk("/getAllUsers", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("/getUsers");
    console.log('ini data all user',data);
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});

export const getUserById = createAsyncThunk("/getUserById", async ({token,id_recipient}) => {
  const result = {};
  try {
    const { data } = await http(token).get(`/getUserId/${id_recipient}`);
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});