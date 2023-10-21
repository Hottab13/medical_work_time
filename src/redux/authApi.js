import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://194.26.138.156:5000/auth/" }),
  endpoints: (builder) => ({
    loginDoctors: builder.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {useLoginDoctorsMutation } = authApi;
