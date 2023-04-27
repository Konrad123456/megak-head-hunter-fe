import React from "react";
import * as Yup from "yup"
import {Form,Formik,FormikHelpers} from "formik";

import "./LoginForm.scss"
import staticText from "../../languages/en.pl";
import {Input} from "../Formik/Input/Input";
import {SubmitBtn} from "../common/SubmitBtn/SubmitBtn";

interface LoginValues {
    login:string,
    password:string,
}

export const LoginForm = () => (
    <>
        <Formik
            initialValues={{
                login: "",
                password: "",
            }
            }
            validationSchema={Yup.object({
                login:Yup.string()
                    .required("Pole wymagane")
                    .min(4,"Login musi mieć minimum 4 znaki"),
                password:Yup.string()
                    .required("Pole wymagane")
                    .min(4,"Hasło musi mieć minimum 4 znaki"),
            })}
            onSubmit={
            async (
                values:LoginValues,
                {setSubmitting}: FormikHelpers<LoginValues>
            ) => {
                console.log(values.login,values.password);
                setSubmitting(false);
            }
            }
        >
            <Form>
                <div className="login-page__inputs-box">
                    <Input
                        label=""
                        placeholder={staticText.loginPage.input.email}
                        name="login"
                        type="text"
                    />
                    <Input
                        label=""
                        placeholder={staticText.loginPage.input.password}
                        name="password"
                        type="text"
                    />
                </div>
                <p className="login-page__forget-account">
                    {staticText.loginPage.text.forgetAccount}
                </p>

                <div className="login-page__login-info">
                    <p className="login-page__have-account">
                        {staticText.loginPage.text.haveAccount}{" "}
                        <a href="#">{staticText.loginPage.text.register}</a>
                    </p>
                    <SubmitBtn text={staticText.loginPage.button.login}/>
                </div>
            </Form>
        </Formik>
    </>
)