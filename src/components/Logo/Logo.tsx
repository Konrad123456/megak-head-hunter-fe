import './_logo.scss';
import logoImg from '../../utils/img/logo.png';

export const Logo = () => {
  return (
    <div className='logo'>
      <img className='logo__image' src={logoImg} alt='logo' />
    </div>
  );
};
