import React from 'react';
import {Formik, Form, FormikHelpers} from 'formik';
import {Input} from "../Input/Input";

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
            }
        } onSubmit={(
            values: Password,
            {setSubmitting}: FormikHelpers<Password>
        ) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
        }}>
            <Form className={'admin-view__form'}>
                <p>nowe hasło</p>
                <Input label={''} name={'password'} type={'password'} placeholder={'hasło'}/>
                <p>powtórz hasło</p>
                <Input label={''} name={'passwordCheck'} type={'confirm'} placeholder={'powtórz hasło'}/>
                <button className={'btn'} type={'submit'}>wyślij</button>
                <button onClick={props.handleModalExit} className={'btn modal'}>zamknij</button>
            </Form>
        </Formik>
    )
}