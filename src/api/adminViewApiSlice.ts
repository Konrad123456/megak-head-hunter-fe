import { apiSlice} from "./apiSlice";
import { User, withToken } from "../store/auth/types";
import {authApiSlice} from "./authApiSlice";

interface HrRegisterData {
    fullName:string;
    company:string;
    email:string;
    maxReservedStudents:number;

}

export const adminViewApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        sendHr:builder.mutation({
            query:(hrRegisterData:HrRegisterData)=>({
                url:'/add_hr',
                method:'POST',
                body:hrRegisterData,
            })
        }),
        sendStudentsFile:builder.mutation({
            query:(file:File)=>({
                headers:'multipart/form-data Content-Type',
                url:'add_students', /*temporary url*/
                body:file,
            })
        })
    })
})

export const {useSendHrMutation}= adminViewApiSlice