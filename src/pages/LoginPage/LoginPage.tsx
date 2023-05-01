import './_login_page.scss';
import { Logo } from '../../components/Logo/Logo';
import { LoginForm } from '../../components/Formik/Forms/LoginForm';
type Props = {};
export const LoginPage = (props: Props) => {
  return (
    <div className='login-page'>
      <div className='login-page__container'>
        <Logo classType='logo' />
        <LoginForm />
      </div>
    </div>
  );
};
