import {apiSlice} from "./apiSlice";
import{StudentsToTalkList}from 'types'

const toTalkApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
toTalk:builder.mutation<{studentsToTalkList:StudentsToTalkList},{limit:number,page:number}>({
    query:({limit,page})=>({
        url:`/user/talk/:${page}/:${limit}`,
        method:'GET',
    })
})
    })
})

export const {useToTalkMutation} = toTalkApiSlice;