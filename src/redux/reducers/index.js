import { combineReducers } from "@reduxjs/toolkit";

import counter from "./Counter";
import auth from "./auth"

const reducer = combineReducers({
  add : counter,
  auth
});

export default reducer;