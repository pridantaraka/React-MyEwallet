import { createSlice } from "@reduxjs/toolkit";
import { Transfer, TopupBalance } from "../asyncActions/transfer";

const initialState = {
  // data: {},
  dataTransfer: {},
  dataTopup: {},
  successMsg: null,
  errorMsg: null,
};

const transfer = createSlice({
  name: "transfer",
  initialState,
  reducers: { 
    resetMsg: state=>{
    state.successMsg= null;
    state.errorMsg= null;
  },
    selectRecipient: (state, action) => {
    state.dataTransfer.recipient_id = action.payload;
  },
    inputAmount: (state, action) => {
    state.dataTransfer.amount = action.payload.amount;
    state.dataTransfer.note = action.payload.note;
    state.dataTransfer.time = action.payload.time;
    state.dataTransfer.date = action.payload.date;
    state.dataTransfer.pin = action.payload.pin;
    state.dataTransfer.type_id = action.payload.type_id;
  },
  },
  extraReducers: (build) => {
    build.addCase(TopupBalance.pending, state => {
      state.sucessMsg = null;
      state.errorMsg = null;
    });
    build.addCase(TopupBalance.fulfilled, (state, action) => {
      state.dataTopup = action.payload.results;
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  }
});

export const {selectRecipient, inputAmount, resetMsg} = transfer.actions
export { Transfer, TopupBalance };
export default transfer.reducer;