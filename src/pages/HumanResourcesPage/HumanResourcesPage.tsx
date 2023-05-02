import React from 'react';
import { HumanResourcesHeader } from '../../components/HumanResources/HumanResourcesHeader/HumanResourcesHeader';
import { HumanResourcesSearch } from '../../components/HumanResources/HumanResourcesSearch/HumanResourcesSearch';

export const HumanResourcesPage = () => {
  return (
    <div className='human-resources-page'>
      <HumanResourcesHeader />

      <div className='human-resources-page__container'>
        <HumanResourcesSearch />
      </div>
    </div>
  );
};
