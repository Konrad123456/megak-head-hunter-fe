import React, {useState} from 'react';
import {Formik, Form, FormikHelpers} from 'formik';
import {Input} from "../Input/Input";
import * as Yup from "yup";
import staticText from '../../../languages/en.pl';
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {usePasswordChangeMutation} from "../../../api/adminViewApiSlice";


interface Props {
    handleModalExit: () => void;
}

interface Password {
    currentPassword: string;
    password: string;
    confirmPassword: string;
}

export const AdminViewPasswordChangeForm = (props: Props) => {
    const [passwordChange, {isLoading, isError, error}] = usePasswordChangeMutation()
    const [serverResponse, setServerResponse] = useState('')

    return (

        <Formik initialValues={
            {
                currentPassword: '',
                password: '',
                confirmPassword: '',
            }}
                validationSchema={Yup.object({
                    currentPassword: Yup.string()
                        .required('Pole wymagane'),
                    password: Yup.string()
                        .required("Pole wymagane")
                        .matches(/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/, 'Hasło musi posiadać co najmniej jeden duży znak, jedną liczbę i jeden znak specjalny'),
                    confirmPassword: Yup.string().label('Powtórz hasło')
                        .required("Pole wymagane").oneOf([Yup.ref('password')], 'Hasła muszą być takie same')
                })}
                onSubmit={async (
                    values: Password,
                    {setSubmitting}: FormikHelpers<Password>
                ) => {
                    try {
                        setServerResponse('')
                        const response:any = await passwordChange(values)
                        if (response.error) {
                            setServerResponse(response.error.data.message)
                        } else {
                            setServerResponse('hasło zmienione')
                        }

                    } catch (e: any) {
                        setServerResponse(e.data.message)
                    }
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 500);
                }}>
            <Form className={'admin-view__form'}>
                <Input classType={'admin-view'} label={'obecne hasło'} name={'currentPassword'}
                       type={'password'} placeholder={'obecne hasło'}/>
                <Input classType={'admin-view'} label={staticText.adminPage.newPassword} name={'password'}
                       type={'password'} placeholder={staticText.adminPage.newPassword}/>
                <Input classType={'admin-view'} label={staticText.adminPage.confirmPassword} name={'confirmPassword'}
                       type={'confirm'} placeholder={staticText.adminPage.confirmPassword}/>
                {isLoading && <div className={'error'}>zapisywanie...</div>}
                {serverResponse && <div className={'error'}>{serverResponse}</div>}
                <SubmitBtn text={staticText.userPage.submitButton.text}/>
                <div onClick={props.handleModalExit} className={'btn modal'}>{staticText.adminPage.close}</div>
            </Form>
        </Formik>
    )
}