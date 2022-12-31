import { api } from '.';

export const getProducts = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => 'api/products?populate=*',
    }),
  }),
});

const { useGetProductsQuery } = getProducts;
export { useGetProductsQuery};