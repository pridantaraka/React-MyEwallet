import { createSlice } from "@reduxjs/toolkit";
import { getUser, getUserById } from "../asyncActions/user";

const initialState = {
  data: [],
  getIdUser: {},
  dataTransfer: {},
  dataRecipient: {},
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectRecipient: (state, action) => {
      state.getIdUser.recipient_id = action.payload;
    }
  },
  extraReducers: (build) => {
    build.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    build.addCase(getUserById.fulfilled, (state, action)=>{
      state.dataRecipient = action.payload?.results;
      console.log('ini reducers');
    });
  }
});
export const {selectRecipient} = user.actions
export { getUser,getUserById };
export default user.reducer;