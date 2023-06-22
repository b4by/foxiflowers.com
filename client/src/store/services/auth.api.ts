import { setCredentials } from "../reducers/authSlice";
import { baseApi } from "./base.api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query({
      query: (token: string) => ({
        url: "/users/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response) => response,
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
        try {
          const token = localStorage.getItem("jwt");
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ user: data, jwt: token }));
        } catch (err) {}
      },
    }),
    loginUser: build.mutation({
      query: (body: { identifier: string; password: string }) => ({
        url: "/auth/local/",
        method: "POST",
        body,
      }),
    }),
    registerUser: build.mutation({
      query: (body) => ({
        url: "/auth/local/register/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetMeQuery, useLoginUserMutation, useRegisterUserMutation } =
  authApi;
