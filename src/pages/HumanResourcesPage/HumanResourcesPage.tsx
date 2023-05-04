import React, { useState } from 'react';
import { HumanResourcesHeader } from '../../components/HumanResources/HumanResourcesHeader/HumanResourcesHeader';
import { HumanResourcesSearch } from '../../components/HumanResources/HumanResourcesSearch/HumanResourcesSearch';
import { HumanResourcesAvailableStudents } from '../../components/HumanResources/HumanResourcesAvailableStudents/HumanResourcesAvailableStudents';
import { HumanResourcesToTalkStudents } from '../../components/HumanResources/HumanResourcesToTalkStudents/HumanResourcesToTalkStudents';

export const HumanResourcesPage = () => {
  const [isAvailableStudents, setIsAvailableStudents] = useState<boolean>(true);

  const shouldDisplayAvailableStudents = (option: boolean) => {
    setIsAvailableStudents(option);
  };

  return (
    <div className='human-resources-page'>
      <HumanResourcesHeader
        shouldDisplayAvailableStudents={shouldDisplayAvailableStudents}
      />

      <div className='human-resources-page__container'>
        <HumanResourcesSearch />
        {isAvailableStudents ? (
          <HumanResourcesAvailableStudents />
        ) : (
          <HumanResourcesToTalkStudents />
        )}
      </div>
    </div>
  );
};
