import { combineReducers } from "@reduxjs/toolkit";

import CounterPhone from "./CounterPhone";

const reducer = combineReducers({
  add : CounterPhone
});

export default reducer;