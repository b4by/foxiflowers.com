import { baseApi } from "./base.api";

export const submitApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitMessage: build.mutation({
      query: ({ name, email, message }) => ({
        url: "/send",
        method: "POST",
        body: {
          name,
          email,
          message,
        },
      }),
    }),
  }),
});

export const { useSubmitMessageMutation } = submitApi;
