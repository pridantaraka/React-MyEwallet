import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
import qs from "qs";


export const Transfer = createAsyncThunk("transaction/transfer", async (request) => {
    const result = {};
    try {
      const send = qs.stringify(request.data)
      const { data } = await http(request.token).post(`/transfer`, send, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      }, );
      return data;
    } catch (e) {
      result.message = e.response.data.message;
      return result;
    }
  });

  export const TopupBalance = createAsyncThunk('transaction/topup', async ({token, request}) => {
    const result = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('/topup', send);
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  });