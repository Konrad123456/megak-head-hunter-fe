import { useState } from 'react';
import staticText from '../../../languages/en.pl';

export const HumanResourcesHeader = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <div className='human-resources-header'>
      <button
        onClick={() => setIsActive(!isActive)}
        className={`human-resources-header__button ${
          isActive && 'human-resources-header__button--active'
        }`}
      >
        {staticText.humanResourcesPage.button.availableStudents}
      </button>
      <button
        onClick={() => setIsActive(!isActive)}
        className={`human-resources-header__button ${
          !isActive && 'human-resources-header__button--active'
        }`}
      >
        {staticText.humanResourcesPage.button.toTalk}
      </button>
    </div>
  );
};
