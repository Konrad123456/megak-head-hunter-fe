import './_login_page.scss';
import { Logo } from '../../components/Logo/Logo';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useState } from 'react';
import staticText from '../../languages/en.pl';
import { Button } from '../../components/common/Button/Button';

export const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className='login-page__container'>
        <Logo classType='logo' />
        <LoginForm />
      </div>
    </div>
  );
};
