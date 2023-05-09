import {apiSlice} from "./apiSlice";
import{StudentsToTalkList}from 'types'


const toTalkApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
toTalk:builder.mutation<{studentsToTalkList:StudentsToTalkList},{page:number,limit:number}>({
    query:({page,limit})=>({
        url:`/user/talk/${page}/${limit}`,
        method:'GET',
    })
})
    })
})

export const {useToTalkMutation} = toTalkApiSlice;