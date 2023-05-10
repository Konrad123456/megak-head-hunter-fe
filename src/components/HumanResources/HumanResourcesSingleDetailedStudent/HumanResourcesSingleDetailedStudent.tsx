import React, { useEffect, useState } from 'react';
import { SubmitButton } from '../../common/Button/SubmitButton';
import HumanResourcesStudentsInformation from '../HumanResourcesStudentsInformation/HumanResourcesStudentsInformation';
import { checkGitHubAccount } from '../../../utils/checkGitHubAccount/checkGitHubAccount';

interface Props {
  id: string;
  name: string;
  reservation: string;
  picture: string;
  handleRemoveStudentFromTalkList: (id: string) => Promise<void>;
  githubUsername: string;
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: number;
  targetWorkCity: string;
  expectedContractType: number;
  expectedSalary: number;
  canTakeApprenticeship: number;
  monthsOfCommercialExp: number;
}

export const HumanResourcesSingleDetailedStudent = ({
  id,
  name,
  reservation,
  picture,
  handleRemoveStudentFromTalkList,
  expectedTypeWork,
  targetWorkCity,
  expectedContractType,
  expectedSalary,
  canTakeApprenticeship,
  monthsOfCommercialExp,
  courseEngagment,
  projectDegree,
  teamProjectDegree,
  courseCompletion,
  githubUsername,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [gitHubAccountTrue, setGitHubAccountTrue] = useState(false);
  const removeStudent = async () => {
    await handleRemoveStudentFromTalkList(id);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    (async () => {
      const checkGitHub = await checkGitHubAccount(githubUsername);
      checkGitHub === 200 && setGitHubAccountTrue(true);
    })();
  }, []);
  return (
    <div className='human-resources-single-detailed-student'>
      <div className='human-resources-single-detailed-student__header'>
        <div className='human-resources-single-detailed-student__header-container'>
          <div className='human-resources-single-detailed-student__reservation'>
            <span className='human-resources-single-detailed-student__reservation-text'>
              Rezerwacja do
            </span>
            <span className='human-resources-single-detailed-student__reservation-data'>
              {reservation} r
            </span>
          </div>
          <div className='human-resources-single-detailed-student__person'>
            <div className='human-resources-single-detailed-student__person-container'>
              <img
                className='human-resources-single-detailed-student__person-image'
                src={
                  gitHubAccountTrue
                    ? `https://github.com/${picture}`
                    : require('../../../utils/img/github.png')
                }
                alt='avatar'
              />
            </div>
            <p className='human-resources-single-detailed-student__person-name'>
              {name}
            </p>
          </div>
        </div>
        <div className='human-resources-single-detailed-student__buttons'>
          <SubmitButton text='Pokaż CV' />
          <SubmitButton
            handleClick={removeStudent}
            text={'Brak zainteresowania'}
          />
          <SubmitButton text='Zatrudniony' />
          <button onClick={handleOpen}>
            {isOpen ? (
              <span className='material-symbols-outlined'>expand_less</span>
            ) : (
              <span className='material-symbols-outlined'>expand_more</span>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <HumanResourcesStudentsInformation
          expectedContractType={expectedContractType}
          courseCompletion={courseCompletion}
          expectedTypeWork={expectedTypeWork}
          targetWorkCity={targetWorkCity}
          teamProjectDegree={teamProjectDegree}
          projectDegree={projectDegree}
          courseEngagment={courseEngagment}
          monthsOfCommercialExp={monthsOfCommercialExp}
          canTakeApprenticeship={canTakeApprenticeship}
          expectedSalary={expectedSalary}
        />
      )}
    </div>
  );
};
