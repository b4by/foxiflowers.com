import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const API_URL = import.meta.env.VITE_STRAPI_API_URL;

export const baseApi = createApi({
  reducerPath: "base/api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token =
        (getState() as RootState).authSlice.token ||
        localStorage.getItem("jwt") ||
        "";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
