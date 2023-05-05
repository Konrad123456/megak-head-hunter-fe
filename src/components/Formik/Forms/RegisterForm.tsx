import React, {useState} from "react";
import * as Yup from "yup"
import {Form, Formik, FormikHelpers} from "formik";
import staticText from "../../../languages/en.pl";
import {Input} from "../Input/Input";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {useRegisterMutation} from "../../../api/registerApiSlice";
import {ConfirmModal} from "../../ConfirmModal/ConfirmModal";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../store/auth/authSlice";


interface LoginValues {
    password: string;
    confirmPassword: string;

}

interface Props {
    email:string;
}

export const RegisterForm = (props:Props) => {
    const [register, {isLoading, isError}] = useRegisterMutation();
    const[response, setResponse] = useState('')
    const[modalOn,setModalOn]=useState(false)
    const {
        email
    } =props

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

                        const body = {...values,email}
                        // @ts-ignore
                        const response = await register(body)
                        // @ts-ignore
                        setResponse(response.data.message)
                        setTimeout(()=>{setModalOn(true)},600)
                    } catch (e) {
                        console.log('Fail', e);
                        setResponse('Błąd rejestracji')
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
                        name="confirmPassword"
                        type="confirm"
                    />
                </div>
                <div className="login-page__login-info-button">
                    <SubmitBtn text={'zapisz'}/>
                </div>
                {isLoading && <div className={'error'}>zapisywanie...</div>}
                {response&&<div className={'error'}>{response}</div>}
                {modalOn&&<ConfirmModal/>}
            </Form>

        </Formik>
    </>
}