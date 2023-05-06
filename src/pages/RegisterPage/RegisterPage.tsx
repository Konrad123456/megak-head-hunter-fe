import '../LoginPage/_login_page.scss';
import {Logo} from '../../components/Logo/Logo';
import './RegisterPage.scss'
import {RegisterForm} from "../../components/Formik/Forms/RegisterForm";
import {useEffect, useState} from "react";
import {useConfirmMutation} from "../../api/registerApiSlice";
import {useParams} from "react-router";


export const RegisterPage = () => {
    const {userId, registerToken} = useParams()
    const [confirmMutation, {isLoading}] = useConfirmMutation()
    const [formOn, setFormOn] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        (async () => {
            try {
                if (userId && registerToken) {
                    const response = await confirmMutation({id: userId, token: registerToken})
                    // @ts-ignore
                    if (response.error) {
                        // @ts-ignore
                        setError(response.error.data.message)
                    }
                    // @ts-ignore
                    if (response.data) {
                        setFormOn(true)
                        setError('')
                    }
                }
            } catch (e: any) {
                setError('coś poszło nie tak...')
            }
        })()
    }, []);

    return (
        <div className='login-page'>
            <div className='login-page__container'>
                <Logo classType='logo'/>
                {isLoading&&<h2 className={'login-page__error'}>proszę czekać...</h2>}
                {formOn && <>
                    <h2 className={'login-page__container-header'}>zarejestruj się</h2>
                    <RegisterForm userId={userId} registerToken={registerToken}/>
                </>}
                {error&&!formOn&&<h2 className={'login-page__error'}>{error}</h2>}
            </div>
        </div>
    );
};