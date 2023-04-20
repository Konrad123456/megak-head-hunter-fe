import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {Input} from "../Input/Input";
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
               <p>imię i nazwisko</p>
               <Input label={''} name={'fullName'} type={'text'} placeholder={'imię i nazwisko'}/>
               <p>nazwa firmy</p>
               <Input label={''} name={'company'} type={'text'} placeholder={'nazwa firmy'}/>
               <p>adres e-mail</p>
               <Input label={''} name={'email'} type={'email'} placeholder={'adres e-mail'}/>
               <p>maksymalna liczba kursantów</p>
               <Input label={''} name={'maxReservedStudents'} type={'number'} placeholder={'max liczba kursantów'}/>
               <button className={'btn'} type="submit">wyślij</button>
               <button onClick={props.handleModalExit} className={'btn modal'}>zamknij</button>
           </Form>
       </Formik>
   )
}