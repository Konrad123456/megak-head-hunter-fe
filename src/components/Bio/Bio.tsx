import { useEffect, useState } from 'react';
import staticText from '../../languages/en.pl';
import logoGithub from '../../utils/img/github.png';
import { Button } from '../common/Button/Button';
import { ContractType, choiceYesNO } from 'types';
import { checkGitHubAccount } from '../../utils/checkGitHubAccount/checkGitHubAccount';

type Props = {
  id: string;
  email: string;
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  tel: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string[];
  projectUrls: string[];
  bio: string;
  expectedContractType: ContractType;
  expectedSalary: number;
  canTakeApprenticeship: choiceYesNO;
  monthsOfCommercialExp: number;
  education: string;
  workExperience: string;
};

export const Bio = (props: Props) => {
  const [gitHubAccountTrue, setGitHubAccountTrue] = useState(false);

  useEffect(() => {
    (async () => {
      const checkGitHub = await checkGitHubAccount(props.githubUsername);
      checkGitHub === 200 && setGitHubAccountTrue(true);
    })();
  }, []);

  return (
    <div className='bio'>
      <div className='bio__img'>
        <img
          src={
            gitHubAccountTrue
              ? `https://github.com/${props.githubUsername}.png`
              : require('../../utils/img/github.png')
          }
          alt='avatar'
        />
      </div>

      <div className='bio__details'>
        <p className='bio__name'>{`${props.firstName} ${props.lastName}`}</p>
        <a
          href={`https://github.com/${gitHubAccountTrue?props.githubUsername:null}`}
          className='bio__link'
          target='_blank'
          rel='noreferrer'
        >
          <img src={logoGithub} alt='logo' className='bio__logo' />
          {/* name to take from backend */}
          <span className='bio__link-name'>{props.githubUsername}</span>
        </a>
      </div>

      <div className='bio__contact'>
        <p className='bio__contact-details'>
          <span className='material-symbols-outlined'>call</span>
          {props.tel}
          {/* +48 566 972 227 */}
        </p>
        <p className='bio__contact-details'>
          <span className='material-symbols-outlined'>mail</span>
          {props.email}
          {/* jankowalski@gmail.com */}
        </p>
      </div>

      <div className='bio__about-me'>
        <p className='bio__about-me-header'>
          {staticText.mainPages.text.aboutMe}
        </p>
        <p>
          {props.bio}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quisquam architecto mollitia reprehenderit Aut, doloremque eum
          repellendus, minus quis corrupti laudantium laborum sit nostrum
          suscipit sunt nemo eveniet fugit ullam. */}
        </p>
      </div>

      <div className='bio__buttons'>
        <Button endpoint='#' text={staticText.mainPages.button.noInterest} />
        <Button endpoint='#' text={staticText.mainPages.button.employed} />
      </div>
    </div>
  );
};
