import { combineReducers } from "@reduxjs/toolkit";
import profile from "./profile";
import history from "./history";
import counter from "./Counter";
import auth from "./auth"

const reducer = combineReducers({
  add : counter,
  auth,
  profile,
  history
});

export default reducer;