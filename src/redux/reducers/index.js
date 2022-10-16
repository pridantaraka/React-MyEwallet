import { combineReducers } from "@reduxjs/toolkit";
import profile from "./profile";
import history from "./history";
// import counter from "./counter";
import transfer from "./transfer";
import auth from "./auth";
import user from "./user";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const authConfig = {
  storage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  profile,
  history,
  user,
  transfer
});

export default reducer;