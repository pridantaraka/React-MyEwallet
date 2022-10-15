import { createSlice } from "@reduxjs/toolkit";
import { getProfile,editProfile,changePassword,changePin } from "../asyncActions/profile";

const initialState = {
  data: {},
  dataUpdate: {},
  msgUpdate: {},
  errorMsg: null,
  successMsg: null,
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetMsg: state=>{
      state.successMsg= null;
      state.errorMsg= null;
    }
  },
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
    build.addCase(editProfile.pending, (state)=>{
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(editProfile.fulfilled, (state,action)=>{
      state.dataUpdate = action.payload.results;
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  }
});

export const { resetMsg } = profile.actions;
export { getProfile,editProfile,changePassword,changePin };
export default profile.reducer;