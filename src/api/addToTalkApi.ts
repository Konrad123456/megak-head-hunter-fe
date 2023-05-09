import { apiSlice } from "./apiSlice";

type StudentId = {
  id: string;
}

const addToTalkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToTalk: builder.mutation({
      query: (data: StudentId) => ({
        url: `/user/talk/`,
        method: 'POST',
        body: data,
      })
    })
  })
})

export const { useAddToTalkMutation } = addToTalkApi;