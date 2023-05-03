import React from "react";
import * as Yup from "yup"
import {Form, Formik, FormikHelpers} from "formik";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router";
import staticText from "../../../languages/en.pl";
import {Input} from "../Input/Input";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {useRegisterMutation} from "../../../api/registerApiSlice";

interface LoginValues {
    password: string,
    confirmPassword: string,
}

export const RegisterForm = () => {
    const [register, {isLoading, isError}] = useRegisterMutation();
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const {userId,registerToken} = useParams()

    return <>
        <Formik
            initialValues={{
                password: "",
                confirmPassword: "",
            }
            }
            validationSchema={Yup.object({
                password: Yup.string()
                    .required("Pole wymagane")
                    .matches(/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/, 'Hasło musi posiadać co najmniej jeden duży znak, jedną liczbę i jeden znak specjalny'),
                confirmPassword: Yup.string().label('Powtórz hasło')
                    .required("Pole wymagane").oneOf([Yup.ref('password')], 'Hasła muszą być takie same')
            })}
            onSubmit={
                async (
                    values: LoginValues,
                    {setSubmitting}: FormikHelpers<LoginValues>
                ) => {
                    try {

                        const body = {...values,userId,registerToken}
                        // @ts-ignore
                        const response = await register(body)
                        console.log(response)

                    } catch (e) {
                        console.log('Fail', e);
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
                        placeholder={staticText.loginPage.input.password}
                        name="password"
                        type="password"
                    />
                    <Input
                        classType="login-page"
                        label=""
                        placeholder={staticText.adminPage.repeatPassword}
                        name="passwordConfirm"
                        type="confirm"
                    />
                </div>
                <div className="login-page__login-info">
                    {isLoading && <div className={'error'}>zapisywanie...</div>}
                    <SubmitBtn text={'zapisz'}/>
                </div>
            </Form>
        </Formik>
    </>
}