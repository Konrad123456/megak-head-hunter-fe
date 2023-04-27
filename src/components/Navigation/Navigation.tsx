import { LoginUser } from '../LoginUser/LoginUser';
import { Logo } from '../Logo/Logo';

export const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation__container'>
        <Logo classType='logo__navigation' />
        <LoginUser />
      </div>
    </div>
  );
};
