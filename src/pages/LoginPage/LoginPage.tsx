import { useState } from 'react';
import { Logo } from '../../components/Logo/Logo';
import staticText from '../../languages/en.pl';
import { SubmitButton } from '../../components/Button/SubmitButton';

export const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    console.log('axios request to backend');
  };

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit} className='login-page__container'>
        <Logo classType='logo' />

        <div className='login-page__inputs-box'>
          <input
            placeholder={staticText.loginPage.input.email}
            className='login-page__input'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder={staticText.loginPage.input.password}
            className='login-page__input'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <SubmitButton text={staticText.loginPage.button.login} />
        </div>
      </form>
    </div>
  );
};
