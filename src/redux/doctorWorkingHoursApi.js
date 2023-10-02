import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorWorkingHoursApi = createApi({
    reducerPath: "doctorWorkingHoursApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    endpoints: (builder) => ({
      getDoctorWorkingHours: builder.query({
        query: () => "doctorWorkingHours/",
      }),
      addDoctorWorkingHours:builder.mutation({
        query:(body)=>({
          url:"doctorWorkingHours/",
          method:"POST",
          body,
        })
      })
    }),
  });
  
 
  export const { useGetDoctorWorkingHoursQuery, useAddDoctorWorkingHoursMutation}  = doctorWorkingHoursApi;