import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../asyncActions/user";

const initialState = {
  data: [],
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload.results?.rows;
    });
  }
});

export { getUser };
export default user.reducer;