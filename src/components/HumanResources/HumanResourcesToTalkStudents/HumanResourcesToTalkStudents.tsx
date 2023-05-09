import React, {useEffect, useState} from 'react';
import { HumanResourcesSingleDetailedStudent } from '../HumanResourcesSingleDetailedStudent/HumanResourcesSingleDetailedStudent';
import {useToTalkMutation} from "../../../api/toTalkApiSlice";
import{StudentsToTalkList}from 'types'





const people = [
  { id: '1', name: 'Jan Kowalski', reservation: '11.07.2023' },
  { id: '2', name: 'Paweł Słoma', reservation: '12.12.2024' },
  { id: '3', name: 'Mariusz Lukier', reservation: '06.06.2023' },
  { id: '4', name: 'Katarzyna Konieczny', reservation: '11.11.2023' },
  { id: '5', name: 'Kamil Ostrowski', reservation: '12.11.2023' },
  { id: '6', name: 'Aleksandra Machi', reservation: '23.10.2023' },
  { id: '7', name: 'Marcin Pawlak', reservation: '27.06.2023' },
  { id: '8', name: 'Marcin Robak', reservation: '23.06.2023' },
  { id: '9', name: 'Łukasz Skibicki', reservation: '12.12.2023' },
  { id: '10', name: 'Jakub Oleśnicki', reservation: '06.12.2023' },
  { id: '11', name: 'Paweł Słoma', reservation: '12.12.2024' },
  { id: '12', name: 'Mariusz Lukier', reservation: '06.06.2023' },
  { id: '13', name: 'Katarzyna Konieczny', reservation: '11.11.2023' },
  { id: '14', name: 'Kamil Ostrowski', reservation: '12.11.2023' },
];

const limit = 10;
const page = 1;

interface ToTalkList {
  id:string;
  name:string;
  reservation:string;
  picture:string;
}

export const HumanResourcesToTalkStudents = () => {
  const [toTalk,{isLoading,isError,error}] = useToTalkMutation()
  const [toTalkList,setToTalkList]=useState<ToTalkList[]>()

 useEffect(()=>{
   (async ()=>{
     const result = await toTalk({page,limit})

     // @ts-ignore
     const studentsToTalkList = result.data as StudentsToTalkList[]
     setToTalkList(studentsToTalkList.map(el=>({
       id:el.id,
       name:el.firstName+' '+el.lastName,
       reservation:String(el.toDate),
       picture:el.githubUsername+'.png'
     })))
   })()
 },[])




  return (
    <div className='human-resources-to-talk-students'>
      {toTalkList?.map((person, index) => (
        <HumanResourcesSingleDetailedStudent key={index} {...person} />
      ))}
    </div>
  );
};
