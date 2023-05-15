import {apiSlice} from "./apiSlice";

const getOneStudentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStudent: builder.mutation({
            query: (id:string) => ({
                url: '/user',
                method: 'GET',
            })
        })
    })
})

export const {useGetStudentMutation} = getOneStudentApi