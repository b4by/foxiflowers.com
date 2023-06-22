import { baseApi } from "./base.api";

export const payApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    pay: build.mutation({
      query: (data) => ({
        url: "/pay",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePayMutation } = payApi;
