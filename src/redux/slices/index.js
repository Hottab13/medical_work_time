import { combineReducers } from "@reduxjs/toolkit";

import authDoctor from "./authSlice";

const rootReducer = combineReducers({
  authDoctor,
});

export default rootReducer;
