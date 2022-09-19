import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
import qs from "qs";


export const postTransfer = createAsyncThunk("/transfer", async (param) => {
    const result = {};
    try {
      const send = qs.stringify({
        time_transaction : new Date(),
        notes :  param.notes,
        amount : param.amount,
        type_id : 1,
        recipient_id : param.recipient_id,
      })
      const { data } = await http(param.token).post("/transfer", send, );
      return data;
    } catch (e) {
      result.message = e.response.data.message;
      return result;
    }
  });