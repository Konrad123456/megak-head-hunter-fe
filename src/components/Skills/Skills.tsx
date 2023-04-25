import React from 'react';
import { PortfolioHeaders } from '../PortfolioHeaders/PortfolioHeaders';
import staticText from '../../languages/en.pl';
import { PortfolioLinks } from '../PortfolioLinks/PortfolioLinks';
import { PortfolioText } from '../PortfolioText/PortfolioText';

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio unde pariatur totam, voluptate vel accusamus iure, ab non dignissimos sequi rerum natus quasi repellendus, eius inventore tenetur culpa. Dolorem.';

export const Skills = () => {
  return (
    <div className='skills'>
      <PortfolioHeaders text={staticText.mainPages.text.scores} />
      <PortfolioHeaders text={staticText.mainPages.text.workExpectations} />
      <PortfolioHeaders text={staticText.mainPages.text.education} />
      <PortfolioText text={lorem} />
      <PortfolioHeaders text={staticText.mainPages.text.courses} />
      <PortfolioText text={lorem} />
      <PortfolioHeaders text={staticText.mainPages.text.workExperience} />
      <PortfolioText text={lorem} />
      <PortfolioHeaders text={staticText.mainPages.text.portfolio} />
      <PortfolioLinks links={['https://Loremipsum/dolor/sit/amet']} />
      <PortfolioHeaders text={staticText.mainPages.text.scrumProject} />
      <PortfolioLinks
        links={[
          'https://github.com/Ami777/MegaKurs/Test/commits?author=Ami777',
          'https://github.com/Ami777/MegaKurs/Test/pulls?q=is%3Apr+reviewed-by%eAAmi777',
        ]}
      />
      <PortfolioHeaders text={staticText.mainPages.text.completionProject} />
      <PortfolioLinks
        links={[
          'https://Loremipsum/dolor/sit/amet ',
          'https://Loremipsum/dolor/sit/amet',
        ]}
      />
    </div>
  );
};
