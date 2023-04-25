import staticText from '../../languages/en.pl';
import logoGithub from '../../utils/img/github.png';
import { Button } from '../Button/Button';

export const Bio = () => {
  return (
    <div className='bio'>
      <div className='bio__img'>
        <img src='https://github.com/Ami777.png ' alt='avatar' />
      </div>

      <div className='bio__details'>
        <p className='bio__name'>Jan Kowalski</p>
        <a href='#' className='bio__link' target='_blank'>
          <img src={logoGithub} alt='logo' className='bio__logo' />
          <span className='bio__link-name'>jankowalski</span>
        </a>
      </div>

      <div className='bio__contact'>
        <p className='bio__contact-details'>
          <span className='material-symbols-outlined'>call</span>
          +48 566 972 227
        </p>
        <p className='bio__contact-details'>
          <span className='material-symbols-outlined'>mail</span>
          jankowalski@gmail.com
        </p>
      </div>

      <div className='bio__about-me'>
        <p className='bio__about-me-header'>
          {staticText.mainPages.text.aboutMe}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quisquam architecto mollitia reprehenderit? Aut, doloremque eum
          repellendus, minus quis corrupti laudantium laborum sit nostrum
          suscipit sunt nemo eveniet fugit ullam.
        </p>
      </div>

      <div className='bio__buttons'>
        <Button text={staticText.mainPages.button.noInterest} />
        <Button text={staticText.mainPages.button.employed} />
      </div>
    </div>
  );
};
