import React, { useState } from 'react';
import staticText from '../../languages/en.pl';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/auth/authSlice";
import {useNavigate} from "react-router";
import {AdminViewPasswordChangeForm} from "../Formik/Forms/AdminViewPasswordChangeForm";

export const LoginUser = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const user = useSelector(selectCurrentUser);
  const fullName = user ? user.fullName : '';
  const [modalOn, setModalOn] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
      try {
          await logout({}).unwrap();
          dispatch(logOut());
          navigate('/');
      } catch (e) {
          console.log(e)
      }
  }
  const handlePasswordChangeModal = () => {
      setModalOn(prev => !prev)
  }

  return (
      <div className='login-user'>
          {modalOn && <div style={{
              minHeight:'50vh'
          }} className={'admin-view__modal'}>
              <AdminViewPasswordChangeForm handleModalExit={handlePasswordChangeModal}/>
          </div>}
          <div className='login-user__img'>
              <img src={require('../../utils/img/default_user.png')} alt='avatar'/>
          </div>
          {/* name has to be provide from backend */}
          <p className='login-user__name'>{user.email}</p>
          <span
              onClick={() => setIsVisible(!isVisible)}
              className='login-user__arrow material-symbols-outlined'
          >
        arrow_drop_down
      </span>

                {isVisible && (
                    <ul className='login-user__list'>
                        <li onClick={handlePasswordChangeModal} className='login-user__list-item'>
                            {staticText.navigation.account}
                        </li>
                        <li onClick={handleLogout} className='login-user__list-item'>
                            {staticText.navigation.logout}
                        </li>
                    </ul>
                )}
            </div>
    );
};
