import { configureStore } from "@reduxjs/toolkit";
import { doctorWorkingHoursApi } from "./doctorWorkingHoursApi";
import { authApi } from "./authApi";
import rootReducer from "./slices/index";

export const store = configureStore({
  reducer: {
    rootReducer,
    [doctorWorkingHoursApi.reducerPath]: doctorWorkingHoursApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      doctorWorkingHoursApi.middleware,
      authApi.middleware,
    ]),
});
