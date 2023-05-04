import React from 'react';
import HumanResourcesSingleStudent from '../HumanResourcesSingleStudent/HumanResourcesSingleStudent';

const people = [
  { id: '1', name: 'Jan K.' },
  { id: '2', name: 'Paweł S.' },
  { id: '3', name: 'Mariusz L.' },
  { id: '4', name: 'Katarzyna K.' },
  { id: '5', name: 'Kamil O.' },
  { id: '6', name: 'Aleksandra M.' },
  { id: '7', name: 'Marcin P.' },
  { id: '8', name: 'Marcin R.' },
  { id: '9', name: 'Łukasz S.' },
  { id: '10', name: 'Jakub O.' },
];

export const HumanResourcesAvailableStudents = () => {
  return (
    <div className='human-resources-available-students'>
      {people.map((person, index) => (
        <HumanResourcesSingleStudent key={index} {...person} />
      ))}
    </div>
  );
};
