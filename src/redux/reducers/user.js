import { createSlice } from "@reduxjs/toolkit";
import { getuser } from "../asyncActions/getuser";

const initialState = {
  data: []
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getuser.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  }
});

export { getuser };
export default user.reducer;