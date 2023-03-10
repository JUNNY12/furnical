import {api} from "."

export const Category = api.injectEndpoints({
    endpoints: (build) => ({
        getChair: build.query({
            query: () => 'api/categories?filters[name][$eq]=Chair&populate=products&populate=products.image',
        }),
        getTable: build.query({
            query: () => 'api/categories?filters[name][$eq]=Table&populate=products&populate=products.image',
        }),
        getBed: build.query({
            query: () => 'api/categories?filters[name][$eq]=Bed&populate=products&populate=products.image',
        }),
        getKitchen: build.query({
            query: () => 'api/categories?filters[name][$eq]=Kitchen&populate=products&populate=products.image', 
        })
    }),
})

const {useGetChairQuery, useGetTableQuery, useGetBedQuery, useGetKitchenQuery} = Category
export {useGetChairQuery, useGetTableQuery, useGetBedQuery, useGetKitchenQuery}