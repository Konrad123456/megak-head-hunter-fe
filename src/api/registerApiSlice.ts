import { apiSlice} from "./apiSlice";
import {UserRegiserData} from "types";

const registerApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(registerData:UserRegiserData)=> ({
                url:'/register',
                method:'POST',
                body:registerData,
            })
        })
    })
})

export const {useRegisterMutation}=registerApiSlice