import {api} from "."

export const auth = api.injectEndpoints({
    endpoints:(build) => ({
        login: build.mutation({
            query:(body) =>({
                url:'api/auth/local',
                method:'POST',
                body,
            })
        }),
        register: build.mutation({
            query:(body) => ({
                url:'api/auth/local/register',
                method:"POST",
                body,
            }),
        })
    })
})

const {useLoginMutation, useRegisterMutation} = auth;
export {useLoginMutation, useRegisterMutation}
