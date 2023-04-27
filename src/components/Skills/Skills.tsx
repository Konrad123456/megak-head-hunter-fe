import React from 'react';
import { PortfolioHeaders } from '../PortfolioHeaders/PortfolioHeaders';
import staticText from '../../languages/en.pl';
import { PortfolioLinks } from '../PortfolioLinks/PortfolioLinks';
import { PortfolioText } from '../PortfolioText/PortfolioText';
import { PortfolioScores } from '../PortfolioScores/PortfolioScores';
import { PortfolioWorkExpectations } from '../PortfolioWorkExpectations/PortfolioWorkExpectations';

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio unde pariatur totam, voluptate vel accusamus iure, ab non dignissimos sequi rerum natus quasi repellendus, eius inventore tenetur culpa. Dolorem.';

const link1 = ['https://Loremipsum/dolor/sit/amet'];
const link2 = [
  'https://github.com/Ami777/MegaKurs/Test/commits?author=Ami777',
  'https://github.com/Ami777/MegaKurs/Test/pulls?q=is%3Apr+reviewed-by%eAAmi777',
];
const link3 = [
  'https://Loremipsum/dolor/sit/amet ',
  'https://Loremipsum/dolor/sit/amet',
];

export const Skills = () => {
  return (
    <div className='skills'>
      <PortfolioHeaders text={staticText.mainPages.text.scores} />
      <PortfolioScores stars={[5, 3, 4, 5]} />

      <PortfolioHeaders text={staticText.mainPages.text.workExpectations} />
      <PortfolioWorkExpectations
        expectations={[
          'Biuro',
          'Warszawa',
          'Umowa o pracę',
          '8000zł',
          'TAK',
          '6 miesięcy',
        ]}
      />

      <PortfolioHeaders text={staticText.mainPages.text.education} />
      <PortfolioText text={lorem} />

      <PortfolioHeaders text={staticText.mainPages.text.courses} />
      <PortfolioText text={lorem} />

      <PortfolioHeaders text={staticText.mainPages.text.workExperience} />
      <PortfolioText text={lorem} />

      <PortfolioHeaders text={staticText.mainPages.text.portfolio} />
      <PortfolioLinks links={link1} />

      <PortfolioHeaders text={staticText.mainPages.text.scrumProject} />
      <PortfolioLinks links={link2} />

      <PortfolioHeaders text={staticText.mainPages.text.completionProject} />
      <PortfolioLinks links={link3} />
    </div>
  );
};
