import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
import qs from 'qs';

export const getProfile = createAsyncThunk("profile/getProfile", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("/status");
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});

export const editProfile = createAsyncThunk('editProfile', async request =>{
  const result = {};
  try {
    const send = qs.stringify(request.data)
    const {data} = await http(request.token).patch('/update', send,
    {
      headers:{
        'content-type': 'application/x-www-form-urlencoded',
      }
    }
  )
  result.successMsg = data.message;
  return result;
  }catch(e){
  result.errorMsg = e.response.data.message;
  return result;
  }
})

export const changePin = createAsyncThunk('ChangePin/profile', async request =>{
  const result = {};
  try {
    const send = qs.stringify(request.data)
    const {data} = await http(request.token).patch('/pin', send,
    {
      headers:{
        'content-type': 'application/x-www-form-urlencoded',
      }
    }
  )
  return data;
  }catch(e){
  result.message = e.response.data.message;
  return result;
  }
})

export const changePassword = createAsyncThunk('ChangePassword/profile', async request =>{
  const result = {};
  try {
    const send = qs.stringify(request.data)
    const {data} = await http(request.token).patch('/pwd', send,
    {
      headers:{
        'content-type': 'application/x-www-form-urlencoded',
      }
    }
  )
  return data;
  }catch(e){
  result.message = e.response.data.message;
  return result;
  }
})