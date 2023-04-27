import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {Input} from "../Input/Input";
import * as Yup from 'yup'

interface Values {
    fullName: string;
    company: string;
    email: string;
    maxReservedStudents:number;
}
interface Props {
    handleModalExit:()=>void;
}

export const AdminViewFormHrAdd = (props:Props)=>{


   return (
       <Formik
           initialValues={{
               fullName: '',
               company: '',
               email: '',
               maxReservedStudents:0,
           }}
           validationSchema={Yup.object({
               fullName:Yup.string()
                   .required("Pole wymagane")
                   .min(4,"Imię musi mieć minimum 4 znaki"),
               company:Yup.string()
                   .required("Pole wymagane")
                   .min(4,"Nazwa firmy musi mieć minimum 4 znaki"),
               email:Yup.string().required("Pole wymagane").email("niepoprawny adres e-mail"),
               maxReservedStudents:Yup.number().required("Pole wymagane").min(1,"ilość musi być większa niż o").max(999,"zbyt duża ilość"),
           })}
           onSubmit={(
               values: Values,
               { setSubmitting }: FormikHelpers<Values>
           ) => {
               setTimeout(() => {
                   alert(JSON.stringify(values, null, 2));
                   setSubmitting(false);
               }, 500);
           }}
       >
           <Form className={'admin-view__form'}>
               <Input classType={'admin-view'} label={'imię i nazwisko'} name={'fullName'} type={'text'} placeholder={'imię i nazwisko'}/>
               <Input classType={'admin-view'} label={'nazwa firmy'} name={'company'} type={'text'} placeholder={'nazwa firmy'}/>
               <Input classType={'admin-view'} label={'adres email'} name={'email'} type={'email'} placeholder={'adres e-mail'}/>
               <Input classType={'admin-view'} label={'maksymalna liczba kursantów'} name={'maxReservedStudents'} type={'number'} placeholder={'max liczba kursantów'}/>
               {/*<Button endpoint={'#'} text={'wyślij'}/>*/}
               <button type={'submit'} className="btn">wyślij</button>
               <div onClick={props.handleModalExit} className={'btn modal'}>zamknij</div>
           </Form>
       </Formik>
   )
}