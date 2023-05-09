import { apiSlice } from './apiSlice';
import { ChangePasswordRequest } from 'types';

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
        url: '/hr',
        method: 'POST',
        body: hrRegisterData,
      }),
    }),
    sendStudentsList: builder.mutation({
      query: (file) => ({
        url: '/upload',
        method: 'POST',
        body: file,
      }),
    }),
    passwordChange: builder.mutation({
      query: (passwordChangeData: ChangePasswordRequest) => ({
        url: 'user/password/',
        method: 'PUT',
        body: passwordChangeData,
      }),
    }),
  }),
});

export const {
  useSendHrMutation,
  useSendStudentsListMutation,
  usePasswordChangeMutation,
} = adminViewApiSlice;
