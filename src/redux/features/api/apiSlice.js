import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}api/v1/`,
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      // console.log(JSON.parse(localStorage.getItem("login")).token);
      // If we have a token set in state, let's assume that we should be passing it.
      if (state.login.token || JSON.parse(localStorage.getItem("login"))) {
        headers.set(
          "authorization",
          `Bearer ${JSON.parse(localStorage.getItem("login"))?.token}`
        );
      }
    },
  }),
  tagTypes: ["User", "Flight", "Payment"],
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: "user/singup",
        method: "POST",
        body: data,
      }),
      providesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
      providesTags: ["User"],
    }),
    allFlight: builder.query({
      query: () => "flight",
      providesTags: ["Flight"],
    }),
    getSingleFlight: builder.query({
      query: (id) => ({
        url: `flight/${id}`,
        method: "GET",
      }),
      providesTags: ["Flight"],
    }),
    addPayment: builder.mutation({
      query: (data) => ({
        url: "payment",
        method: "POST",
        body: data,
      }),
      providesTags: ["Payment"],
    }),
    getPayment: builder.query({
      query: () => ({
        url: "payment",
        method: "GET",
      }),
      invalidatesTags: ["Payment"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useAllFlightQuery,
  useGetSingleFlightQuery,
  useAddPaymentMutation,
  useGetPaymentQuery,
} = userApi;
