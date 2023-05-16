import React, { useState } from 'react';
import staticText from '../../languages/en.pl';

export const LoginUser = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className='login-user'>
      <div className='login-user__img'>
        <img src={require('../../utils/img/default_user.png')} alt='avatar' />
      </div>
      {/* name has to be provide from backend */}
      <p className='login-user__name'>Mateusz Kowalski</p>
      <span
        onClick={() => setIsVisible(!isVisible)}
        className='login-user__arrow material-symbols-outlined'
      >
        arrow_drop_down
      </span>

      {isVisible && (
        <ul className='login-user__list'>
          <li className='login-user__list-item'>
            {staticText.navigation.account}
          </li>
          <li className='login-user__list-item'>
            {staticText.navigation.logout}
          </li>
        </ul>
      )}
    </div>
  );
};
