import {apiSlice} from "./apiSlice";

type UserRegisterData = {
    userId: string;
    password: string;
    confirmPassword: string;
    registerToken: string | null;
};

type ConfirmUser = {
    id: string;
    token: string;
};

const registerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (registerData: UserRegisterData) => ({
                url: '/register',
                method: 'POST',
                body: registerData,
            })
        }),
        confirm: builder.mutation({
            query: (confirmData: ConfirmUser) => ({
                url: `/confirm-account/${confirmData.id}/${confirmData.token}`,
                method:'GET',

            })
        })
    })
})

export const {useRegisterMutation} = registerApiSlice