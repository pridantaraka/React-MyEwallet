import { createSlice } from "@reduxjs/toolkit";
import { postTransfer } from "../asyncActions/transfer";

const initialState = {
  data: {}
};

const profile = createSlice({
  name: "transfer",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(postTransfer.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  }
});

export { postTransfer };
export default profile.reducer;