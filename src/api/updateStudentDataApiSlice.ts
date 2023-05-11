import {apiSlice} from "./apiSlice";
import {userFullData} from "../components/Formik/Forms/UserViewForm";
import {}from 'types'


const updateStudentDataApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendStudentData: builder.mutation({
            query: (userData:any) => ({
                url: '/user',
                method: 'PUT',
                body:userData,
            })
        })
    })
})

export const {useSendStudentDataMutation}= updateStudentDataApiSlice