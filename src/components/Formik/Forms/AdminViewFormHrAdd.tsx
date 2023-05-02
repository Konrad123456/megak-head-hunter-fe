import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {Input} from "../Input/Input";
import * as Yup from 'yup';
import staticText from "../../../languages/en.pl";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {useSendHrMutation} from "../../../api/hrRegisterApiSlice";


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
                <SubmitBtn text={staticText.userPage.submitButton.text}/>
                <div onClick={props.handleModalExit} className={'btn modal'}>{staticText.adminPage.close}</div>
            </Form>
        </Formik>
    )

}