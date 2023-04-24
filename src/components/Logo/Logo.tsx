import './_logo.scss';
import logoImg from '../../utils/img/logo.png';

interface Props {
  classType: string;
}

export const Logo = ({ classType }: Props) => {
  return (
    <div className={classType}>
      <img className='logo__image' src={logoImg} alt='logo' />
    </div>
  );
};
