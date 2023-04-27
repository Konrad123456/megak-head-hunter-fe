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
                url: '/auth/refresh',
                method: "GET",
            })
        }),
        authenticated: builder.mutation<boolean, {}>({
            query: () => ({
                url: '/auth/authenticated',
                method: "GET",
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: "POST",
            })
        }),
    })
})

export const {
    useLoginMutation,
    useRefreshMutation,
    useAuthenticatedMutation,
    useLogoutMutation,
} = authApiSlice;