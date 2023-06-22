import { baseApi } from "./base.api";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (query) => {
        return {
          url: `/products?${query}`,
          params: {
            populate: "*",
          },
        };
      },
    }),
    getProduct: build.query({
      query: (slug) => ({
        url: `/products/${slug}?populate=*&`,
      }),
    }),
    getFlowerTypes: build.query({
      query: () => ({
        url: "/product-types",
      }),
    }),
    getProductColors: build.query({
      query: () => ({
        url: "/product-colors",
      }),
    }),
    getProductEvents: build.query({
      query: () => ({
        url: "/product-events",
      }),
    }),
    getProductRecepientTypes: build.query({
      query: () => ({
        url: "/product-recepient-types",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
} = productApi;
