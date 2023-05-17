import React, { useState } from 'react';
import staticText from '../../languages/en.pl';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/auth/authSlice";

export const LoginUser = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const user = useSelector(selectCurrentUser);
  const fullName = user ? user.fullName : '';

  return (
    <div className='login-user'>
      <div className='login-user__img'>
        <img src='https://github.com/Ami777.png ' alt='avatar' />
      </div>
      {/* name has to be provide from backend */}
      <p className='login-user__name'>{fullName}</p>
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
