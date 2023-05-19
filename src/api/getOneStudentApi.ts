import { apiSlice } from './apiSlice';
import { OneStudentResponse } from 'types';

const getOneStudentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStudent: builder.mutation<OneStudentResponse, {}>({
            query: () => ({
                url: '/user',
                method: 'GET',
            })
        })
    })
})

export const { useGetStudentMutation } = getOneStudentApi