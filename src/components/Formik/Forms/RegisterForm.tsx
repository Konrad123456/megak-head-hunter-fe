import React from "react";
import * as Yup from "yup"
import {Form,Formik,FormikHelpers} from "formik";

import {useLoginMutation} from "../../../api/authApiSlice";
import {useDispatch} from "react-redux";
import {setCredentials} from "../../../store/auth/authSlice";
import {navigateToDefaultRoute} from "../../../utils/navigation/navigation";
import {useNavigate} from "react-router";
import staticText from "../../../languages/en.pl";
import {Input} from "../Input/Input";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";

interface LoginValues {
    password:string,
    passwordConfirm:string,
}

export const RegisterForm = () => {
    const [login,{isLoading, isError}] = useLoginMutation();
    const dispatch = useDispatch();
    const navigator = useNavigate();

    return <>
        <Formik
            initialValues={{
                password: "",
                passwordConfirm:"",
            }
            }
            validationSchema={Yup.object({
                login: Yup.string()
                    .required("Pole wymagane")
                    .min(4, "Login musi mieć minimum 4 znaki"),
                password: Yup.string()
                    .required("Pole wymagane")
                    .min(4, "Hasło musi mieć minimum 4 znaki"),
            })}
            onSubmit={
                async (
                    values: LoginValues,
                    {setSubmitting}: FormikHelpers<LoginValues>
                ) => {
                    try {

                      console.log(values)
                    } catch (e) {
                        console.log('Fail');
                    }
                    setSubmitting(false);
                }
            }
        >
            <Form>
                <div className="login-page__inputs-box">
                    <Input
                        classType="login-page"
                        label=""
                        placeholder={staticText.loginPage.input.email}
                        name="login"
                        type="text"
                    />
                    <Input
                        classType="login-page"
                        label=""
                        placeholder={staticText.loginPage.input.password}
                        name="password"
                        type="password"
                    />
                </div>
                <p className="login-page__forget-account">
                    {staticText.loginPage.text.forgetAccount}
                </p>

                <div className="login-page__login-info">
                    <p className="login-page__have-account">
                        {staticText.loginPage.text.haveAccount}{" "}
                        <a href="src/components/Formik/Forms/LoginForm#">{staticText.loginPage.text.register}</a>
                    </p>
                    <SubmitBtn text={staticText.loginPage.button.login}/>
                </div>
            </Form>
        </Formik>
    </>
}