import React, {useState} from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {Input} from "../Input/Input";
import * as Yup from 'yup';
import staticText from "../../../languages/en.pl";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {useSendHrMutation} from '../../../api/adminViewApiSlice';


interface Values {
    fullName: string;
    company: string;
    email: string;
    maxReservedStudents: number;
}

interface Props {
    handleModalExit: () => void;
}

export const AdminViewFormHrAdd = (props: Props) => {
    const [sendHr, {isLoading, isError, error}] = useSendHrMutation()
    const[serverResponse,setServerResponse]=useState<string>()

    return (
        <Formik
            initialValues={{
                fullName: '',
                company: '',
                email: '',
                maxReservedStudents: 0,
            }}
            validationSchema={Yup.object({
                fullName: Yup.string()
                    .required(staticText.adminPage.fieldRequired)
                    .min(4, staticText.adminPage.nameMustHaveFourChar),
                company: Yup.string()
                    .required(staticText.adminPage.fieldRequired)
                    .min(4, staticText.adminPage.companyNameMustHaveFourChar),
                email: Yup.string().required(staticText.adminPage.fieldRequired).email(staticText.adminPage.wrongEmail),
                maxReservedStudents: Yup.number().required(staticText.adminPage.fieldRequired).min(1, staticText.adminPage.mustBeMoreThanZero).max(999, staticText.adminPage.toBigNumber),
            })}
            onSubmit={async (
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                try{
              const response =  await sendHr(values).unwrap()
                setServerResponse(response.message)}catch (e:any) {
                    setServerResponse(e.data.message)
                }
                setTimeout(() => {
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form className={'admin-view__form'}>
                <Input classType={'admin-view'} label={staticText.adminPage.fullName} name={'fullName'} type={'text'}
                       placeholder={staticText.adminPage.fullName}/>
                <Input classType={'admin-view'} label={staticText.adminPage.companyName} name={'company'} type={'text'}
                       placeholder={staticText.adminPage.companyName}/>
                <Input classType={'admin-view'} label={staticText.adminPage.email} name={'email'} type={'email'}
                       placeholder={staticText.adminPage.email}/>
                <Input classType={'admin-view'} label={staticText.adminPage.maxReservedStudents}
                       name={'maxReservedStudents'} type={'number'}
                       placeholder={staticText.adminPage.maxReservedStudents}/>
                {isLoading&&<div className={'error'}>zapisywanie...</div>}
                {serverResponse&&<div className={'error'}>{serverResponse}</div>}
                <SubmitBtn text={staticText.userPage.submitButton.text}/>
                <div onClick={props.handleModalExit} className={'btn modal'}>{staticText.adminPage.close}</div>
            </Form>
        </Formik>
    )

}