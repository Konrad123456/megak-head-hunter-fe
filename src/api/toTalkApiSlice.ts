import {apiSlice} from "./apiSlice";


const toTalkApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        toTalk: builder.mutation<{ studentsToTalkList: any }, { page: number, limit: number }>({
            query: ({page, limit}) => ({
                url: `/user/talk/${page}/${limit}`,
                method: 'GET',
            })
        }),
        removeFromToTalk: builder.mutation({
            query: (id: string) => ({
                url: '/user/talk',
                method: 'DELETE',
                body: {
                    id,
                }
            })
        })
    })
})

export const {useToTalkMutation, useRemoveFromToTalkMutation} = toTalkApiSlice;