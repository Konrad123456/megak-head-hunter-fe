import { apiSlice } from './apiSlice';
// import { StudentsListResponse } from 'types'

type PagginationData = {
  pageNumber: number;
  limit: number;
};

const studentsListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    students: builder.mutation({
      query: (paginationData: PagginationData) => ({
        url: `/user/${paginationData.pageNumber}/${paginationData.limit}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useStudentsMutation } = studentsListApi;
