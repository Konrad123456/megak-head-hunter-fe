import './_login_page.scss';
import {Logo} from '../../components/Logo/Logo';
import {LoginForm} from "../../components/Formik/Forms/LoginForm";


export const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className='login-page__container'>
          <Logo />
          <LoginForm/>
      </div>
    </div>
  );
};
