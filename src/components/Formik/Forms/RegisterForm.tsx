import React from "react";
import * as Yup from "yup"
import {Form, Formik, FormikHelpers} from "formik";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import staticText from "../../../languages/en.pl";
import {Input} from "../Input/Input";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {useRegisterMutation} from "../../../api/registerApiSlice";

interface RegisterValues {
    email:string,
    password: string,
    confirmPassword: string,
}

export const RegisterForm = () => {
    const [register, {isLoading, isError}] = useRegisterMutation();
    const dispatch = useDispatch();
    const navigator = useNavigate();

    return <>
        <Formik
            initialValues={{
                email:"",
                password: "",
                confirmPassword: "",
            }
            }
            validationSchema={Yup.object({
                password: Yup.string()
                    .required("Pole wymagane")
                    .matches(/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/, 'Hasło musi posiadać co najmniej jeden duży znak, jedną liczbę i jeden znak specjalny'),
                passwordConfirm: Yup.string().label('Powtórz hasło')
                    .required("Pole wymagane").oneOf([Yup.ref('password')], 'Hasła muszą być takie same')
            })}
            onSubmit={
                async (
                    values: RegisterValues,
                    {setSubmitting}: FormikHelpers<RegisterValues>
                ) => {
                    try {
                        const response = await register(values)
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