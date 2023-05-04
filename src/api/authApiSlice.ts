import { apiSlice} from "./apiSlice";
import { User, withToken } from "../store/auth/types";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{user: User} & withToken, {email: string, password: string}>({
            query: ({ email, password }) => ({
                url: '/login',
                method: "POST",
                body: { email, password }
            })
        }),
        refresh: builder.mutation<{user: User} & withToken, {}>({
            query: () => ({
                url: '/refresh-token',
                method: "GET",
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: "POST",
            })
        }),
    })
})

export const {
    useLoginMutation,
    useRefreshMutation,
    useLogoutMutation,
} = authApiSlice;