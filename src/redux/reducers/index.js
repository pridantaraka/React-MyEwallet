import { combineReducers } from "@reduxjs/toolkit";
import profile from "./profile";
import history from "./history";
import counter from "./counter";
import transfer from "./transfer";
import auth from "./auth";
import user from "./user";

const reducer = combineReducers({
  add : counter,
  auth,
  profile,
  history,
  transfer,
  user
});

export default reducer;