import { apiSlice} from "./apiSlice";

type UserRegisterData = {
    userId: string;
    password: string;
    confirmPassword: string;
    registerToken: string | null;
};

const registerApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(registerData:UserRegisterData)=> ({
                url:'/register',
                method:'POST',
                body:registerData,
            })
        })
    })
})

export const {useRegisterMutation}=registerApiSlice