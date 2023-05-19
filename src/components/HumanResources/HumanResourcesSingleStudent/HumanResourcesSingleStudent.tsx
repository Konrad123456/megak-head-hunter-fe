import React, { CSSProperties, useState } from 'react';
import HumanResourcesStudentsInformation from '../HumanResourcesStudentsInformation/HumanResourcesStudentsInformation';
import { SubmitButton } from '../../../components/common/Button/SubmitButton';
import { useAddToTalkMutation } from '../../../api/addToTalkApi';

interface Props {
  id: string;
  firstName: string;
  lastName: string;
}

const HumanResourcesSingleStudent = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { id, firstName, lastName } = props;
  const [addToTalk, { isLoading, error }] = useAddToTalkMutation();
  const [isAdded, setIsAdded] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleBookTalk = (id: string): void => {
    (async () => {
      console.log(`Add to talk: ${id}`);

      try {
        const response = await addToTalk({ id });

        // @ts-ignore
        if (response.error) {
          // @ts-ignore
          console.log(`Error: ${response.error}`);
        }

        // @ts-ignore
        if (response.data) {
          // @ts-ignore
          console.log(`Add to talk message: ${response.data.message}`);
          setIsAdded(true);
        }
      } catch (err) {
        console.log('Coś poszło nie tak.');
      }
    })();
  };

  const addedStyles: CSSProperties = {
    backgroundColor: 'green',
    cursor: 'no-drop',
  };

  return (
    <div className='human-resources-single-student'>
      <div className='human-resources-single-student__header'>
        <p className='human-resources-single-student__name'>
          {firstName} {lastName}
        </p>
        <div className='human-resources-single-student__buttons-container'>
          <SubmitButton
            text={isAdded ? 'Zarezerwowano' : 'Zarezerwuj rozmowę'}
            handleClick={() => handleBookTalk(id)}
            myStyles={isAdded ? addedStyles : {}}
          />
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
          courseCompletion={0}
          courseEngagment={0}
          projectDegree={0}
          teamProjectDegree={0}
          expectedTypeWork={0}
          targetWorkCity={''}
          expectedContractType={0}
          expectedSalary={0}
          canTakeApprenticeship={0}
          monthsOfCommercialExp={0}
          {...props}
        />
      )}
    </div>
  );
};

export default HumanResourcesSingleStudent;
