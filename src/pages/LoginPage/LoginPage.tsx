import './_login_page.scss';
import {Logo} from '../../components/Logo/Logo';
import {LoginForm} from "../../components/LoginForm/LoginForm";


  return (
    <div className='login-page'>
      <div className='login-page__container'>
          <Logo />
          <LoginForm/>
      </div>
    </div>
  );
};
