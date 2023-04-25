import React from 'react';
import {Formik, Form, FormikHelpers} from 'formik';
import {Input} from "../Input/Input";
import * as Yup from "yup";
import {Button} from "../../Button/Button";
import staticText from '../../../languages/en.pl';

interface Props {
    handleModalExit: () => void;
}

interface Password {
    password: string;
    passwordCheck: string;
}

export const AdminViewPasswordChangeForm = (props: Props) => {


    return (

        <Formik initialValues={
            {
                password: '',
                passwordCheck: '',
            }}
                validationSchema={Yup.object({
                    password: Yup.string()
                        .required("Pole wymagane")
                        .matches(/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,'Hasło musi posiadać co najmniej jeden duży znak, jedną liczbę i jeden znak specjalny'),
                    passwordCheck: Yup.string().label('Powtórz hasło')
                        .required("Pole wymagane").oneOf([Yup.ref('password')], 'Hasła muszą być takie same')
                })}
                onSubmit={(
                    values: Password,

                    {setSubmitting}: FormikHelpers<Password>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}>
            <Form className={'admin-view__form'}>
                <Input label={staticText.adminPage.newPassword} name={'password'} type={'password'} placeholder={staticText.adminPage.newPassword}/>
                <Input label={staticText.adminPage.confirmPassword} name={'passwordCheck'} type={'confirm'} placeholder={staticText.adminPage.confirmPassword}/>
                {/*<Button endpoint={'#'} text={'wyślij'}/>*/}
                <button type={'submit'} className="btn">{staticText.userPage.submitButton.text}</button>
                <div onClick={props.handleModalExit} className={'btn modal'}>{staticText.adminPage.close}</div>
            </Form>
        </Formik>
    )
}