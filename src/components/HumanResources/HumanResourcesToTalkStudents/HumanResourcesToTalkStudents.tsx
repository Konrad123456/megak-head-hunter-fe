import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
    HumanResourcesSingleDetailedStudent
} from '../HumanResourcesSingleDetailedStudent/HumanResourcesSingleDetailedStudent';
import {useToTalkMutation} from "../../../api/toTalkApiSlice";
import {StudentsToTalkList} from 'types'


interface Props {
    page:number;
    limitOnPage:number;
    setMaxStudentsNumber:Dispatch<SetStateAction<number>>;
}

interface ToTalkList {
    id: string;
    name: string;
    reservation: string;
    picture: string;
}



export const HumanResourcesToTalkStudents = ({page,limitOnPage,setMaxStudentsNumber}:Props) => {
    const [toTalk, {isLoading, isError, error}] = useToTalkMutation()
    const [toTalkList, setToTalkList] = useState<ToTalkList[]>()
    useEffect(() => {
        (async () => {
            const limit = limitOnPage
            const result = await toTalk({page, limit})

            // @ts-ignore
            const studentsToTalkList = result.data as StudentsToTalkList[]
            setMaxStudentsNumber(studentsToTalkList.length)
            setToTalkList(studentsToTalkList.map(el => ({
                id: el.id,
                name: el.firstName + ' ' + el.lastName,
                reservation: String(el.toDate),
                picture: el.githubUsername + '.png'
            })))
        })()
    }, [limitOnPage,page])


    return (
        <div className='human-resources-to-talk-students'>
            {toTalkList?.map((person, index) => (
                <HumanResourcesSingleDetailedStudent key={index} {...person} />
            ))}
        </div>
    );
};
