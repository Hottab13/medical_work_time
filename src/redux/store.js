import { configureStore } from "@reduxjs/toolkit";
import { doctorWorkingHoursApi } from "./doctorWorkingHoursApi";

export const store = configureStore({
  reducer: {
    [doctorWorkingHoursApi.reducerPath]: doctorWorkingHoursApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(doctorWorkingHoursApi.middleware),
});
