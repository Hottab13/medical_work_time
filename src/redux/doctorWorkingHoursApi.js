import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorWorkingHoursApi = createApi({
  reducerPath: "doctorWorkingHoursApi",
  tagTypes: ["Doctors"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://194.26.138.156:5000/" }),
  endpoints: (builder) => ({
    getDoctorWorkingHours: builder.query({
      query: () => "doctors/",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Doctors", id })),
              { type: "Doctors", id: "LIST", desiredTime: "TIME" },
            ]
          : [{ type: "Doctors", id: "LIST", desiredTime: "TIME" }],
    }),
    getDoctorData: builder.query({
      query: (doctor) => `doctors/${doctor.id}`,
    }),
    addDoctorWorkingHours: builder.mutation({
      query: (payload) => ({
        url: `desired-work-time/add`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        {
          type: "Doctors",
          id: "LIST",
          desiredWorkTime: "TIME",
          approvedWorkTime: "APP_TIME",
        },
      ],
    }),
    addApprovedWorkHours: builder.mutation({
      query: (payload) => ({
        url: `approved-work-time/add`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        {
          type: "Doctors",
          id: "LIST",
          desiredWorkTime: "TIME",
          approvedWorkTime: "APP_TIME",
        },
      ],
    }),

  }),
});

export const {
  useGetDoctorWorkingHoursQuery,
  useAddDoctorWorkingHoursMutation,
  useGetDoctorDataQuery,
  useAddApprovedWorkHoursMutation,
} = doctorWorkingHoursApi;
