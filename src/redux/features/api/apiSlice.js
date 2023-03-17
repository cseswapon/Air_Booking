import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}api/v1/`,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: "user/singup",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddUserMutation, useLoginUserMutation } = userApi;
