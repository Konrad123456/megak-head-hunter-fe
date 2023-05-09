import React, { useState } from 'react';
import HumanResourcesStudentsInformation from '../HumanResourcesStudentsInformation/HumanResourcesStudentsInformation';
import { SubmitButton } from '../../../components/common/Button/SubmitButton';

interface Props {
  firstName: string;
  lastName: string;
}

const HumanResourcesSingleStudent = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { firstName, lastName } = props;

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='human-resources-single-student'>
      <div className='human-resources-single-student__header'>
        <p className='human-resources-single-student__name'>
          {firstName} {lastName}
        </p>
        <div className='human-resources-single-student__buttons-container'>
          <SubmitButton text='Zarezerwuj rozmowę' />
          <button onClick={handleOpen}>
            {isOpen ? (
              <span className='material-symbols-outlined'>expand_less</span>
            ) : (
              <span className='material-symbols-outlined'>expand_more</span>
            )}
          </button>
        </div>
      </div>

      {isOpen && <HumanResourcesStudentsInformation {...props} />}
    </div>
  );
};

export default HumanResourcesSingleStudent;
