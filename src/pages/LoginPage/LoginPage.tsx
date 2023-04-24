import './_login_page.scss';
import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../components/Button/Button';
import staticText from '../../languages/en.pl';

type Props = {};
export const LoginPage = (props: Props) => {
  return (
    <div className='login-page'>
      <div className='login-page__container'>
        <Logo />

        <div className='login-page__inputs-box'>
          <input
            placeholder={staticText.loginPage.input.email}
            className='login-page__input'
            type='text'
          />
          <input
            placeholder={staticText.loginPage.input.password}
            className='login-page__input'
            type='text'
          />
        </div>
        <p className='login-page__forget-account'>
          {staticText.loginPage.text.forgetAccont}
        </p>

        <div className='login-page__login-info'>
          <p className='login-page__have-account'>
            {staticText.loginPage.text.haveAccount}{' '}
            <a href='#'>{staticText.loginPage.text.register}</a>
          </p>
          <Button endpoint='#' text={staticText.loginPage.button.login} />
        </div>
      </div>
    </div>
  );
};
