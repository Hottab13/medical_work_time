import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorWorkingHoursApi = createApi({
  reducerPath: "doctorWorkingHoursApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getDoctorWorkingHours: builder.query({
      query: () => "doctorWorkingHours/",
    }),
    addDoctorWorkingHours: builder.mutation({
      query: (patch) => ({
          url: `doctorWorkingHours/${patch.id}`,
          method: "PATCH",
          body:patch,
      }),
    }),
  }),
});

export const {
  useGetDoctorWorkingHoursQuery,
  useAddDoctorWorkingHoursMutation,
} = doctorWorkingHoursApi;
