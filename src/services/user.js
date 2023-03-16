import {api }from ".";

export const user = api.injectEndpoints({
    endpoints: (build) => ({
        user: build.query({
            query: (id) => `api/users/${id}?populate=*`,
        }),
        updateUser:build.mutation({
            query: ({id, body}) => ({
            url:`api/users/${id}`,
            method:'PUT',
            body,
            })
        }),
        updateUserShippingAddress:build.mutation({
            query:({id, body}) => ({
                url:`api/users/${id}`,
                method:'PUT',
                body,
            })
        })
    })
})

const { useUserQuery, useUpdateUserMutation, useUpdateUserShippingAddressMutation} = user;

export { useUserQuery, useUpdateUserMutation, useUpdateUserShippingAddressMutation};