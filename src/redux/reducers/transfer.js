import { createSlice } from "@reduxjs/toolkit";
import { Transfer, TopupBalance } from "../asyncActions/transfer";

const initialState = {
  // data: {},
  dataTransfer: {},
};

const transfer = createSlice({
  name: "transfer",
  initialState,
  reducers: {
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
  },},
  extraReducers: (build) => {
    // build.addCase(Transfer.fulfilled, (state, action) => {
    //   state.data = action.payload.results;
    // });
    build.addCase(TopupBalance.pending, state => {
      state.sucessMsg = null;
    });
    build.addCase(TopupBalance.fulfilled, (state, action) => {
      state.sucessMsg = action.payload.message;
    });
  }
});

export const {selectRecipient, inputAmount} = transfer.actions
export { Transfer, TopupBalance };
export default transfer.reducer;