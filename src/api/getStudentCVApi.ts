import { apiSlice } from "./apiSlice";
import { StudentsCVResponse } from "types";

const getStudentCvApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCv: builder.mutation<StudentsCVResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/user/cv/${id}`,
        method: 'GET',
      })
    }),
  })
})

export const { useGetCvMutation } = getStudentCvApi;