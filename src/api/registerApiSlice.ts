import {apiSlice} from "./apiSlice";

type UserRegisterData = {
    userId:string;
    registerToken:string;
    password: string;
    confirmPassword: string;
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

export const {useRegisterMutation,useConfirmMutation} = registerApiSlice