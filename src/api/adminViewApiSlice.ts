import {apiSlice} from "./apiSlice";
import {User, withToken} from "../store/auth/types";
import {authApiSlice} from "./authApiSlice";

interface HrRegisterData {
    fullName: string;
    company: string;
    email: string;
    maxReservedStudents: number;

}

export const adminViewApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendHr: builder.mutation({
            query: (hrRegisterData: HrRegisterData) => ({
                url: '/add_hr',
                method: 'POST',
                body: hrRegisterData,
            })
        }),
        sendStudentsList:builder.mutation({
            query:(file)=>({
                url:'/upload',
                method:'POST',
                body:{
                    file:file},
            })
        })

    })
})

export const {
    useSendHrMutation,
    useSendStudentsListMutation,
} = adminViewApiSlice