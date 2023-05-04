import { useState, useEffect } from 'react';
import staticText from '../../../languages/en.pl';

interface Props {
  shouldDisplayAvailableStudents: (option: boolean) => void;
}

export const HumanResourcesHeader = ({
  shouldDisplayAvailableStudents,
}: Props) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    shouldDisplayAvailableStudents(isActive);
  }, [isActive, setIsActive]);

  return (
    <div className='human-resources-header'>
      <button
        onClick={() => setIsActive(true)}
        className={`human-resources-header__button ${
          isActive && 'human-resources-header__button--active'
        }`}
      >
        {staticText.humanResourcesPage.button.availableStudents}
      </button>
      <button
        onClick={() => setIsActive(false)}
        className={`human-resources-header__button ${
          !isActive && 'human-resources-header__button--active'
        }`}
      >
        {staticText.humanResourcesPage.button.toTalk}
      </button>
    </div>
  );
};
