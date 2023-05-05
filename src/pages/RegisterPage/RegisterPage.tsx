import '../LoginPage/_login_page.scss';
import {Logo} from '../../components/Logo/Logo';
import './RegisterPage.scss'
import {RegisterForm} from "../../components/Formik/Forms/RegisterForm";
import {useEffect} from "react";
import {useConfirmMutation} from "../../api/registerApiSlice";
import {useParams} from "react-router";




export const RegisterPage = () => {
    const {userId, registerToken} = useParams()
    const [confirmMutation, {isLoading}] = useConfirmMutation()

    useEffect(() => {
        (async () => {
            if (userId && registerToken) {
              const response =  await confirmMutation({id: userId, token: registerToken})
                console.log(response)
            }
        })()
    }, []);

    return (
        <div className='login-page'>
            <div className='login-page__container'>
                <Logo classType='logo'/>
                <h2 className={'login-page__container-header'}>zarejestruj się</h2>
                <RegisterForm registerToken={registerToken} userId={userId}/>
            </div>
        </div>
    );
};
