import { apiSlice} from "./apiSlice";
import { User, withToken } from "../store/auth/types";

interface HrRegisterData {
    fullName:string;
    company:string;
    email:string;
    maxReservedStudents:number;

}

export const hrRegisterApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        sendHr:builder.mutation({
            query:(hrRegisterData:HrRegisterData)=>({
                url:'/add_hr',
                method:'POST',
                body:hrRegisterData,
            })
        })
    })
})