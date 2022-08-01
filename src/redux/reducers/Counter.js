import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    customValue: (state, action) => {
      state.value = parseInt(action.payload, 10);
    }
  }
});

export const {
  customValue,
} = counterSlice.actions;

export default counterSlice.reducer;