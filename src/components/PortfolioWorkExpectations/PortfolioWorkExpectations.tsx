import staticText from '../../languages/en.pl';
import { PortfolioWorkExpectationsItem } from './PortfolioWorkExpectationsItem/PortfolioWorkExpectationsItem';

interface Props {
  expectations: string[];
}

const description = [
  staticText.mainPages.text.workPlace,
  staticText.mainPages.text.cityWorkPlace,
  staticText.mainPages.text.contractType,
  staticText.mainPages.text.salaryExpectations,
  staticText.mainPages.text.apprenticeshipsAgreement,
  staticText.mainPages.text.commercialExperience,
];

export const PortfolioWorkExpectations = ({ expectations }: Props) => {
  return (
    <div className='portfolio-work-expectations'>
      {expectations.map((item, index) => (
        <PortfolioWorkExpectationsItem
          key={index}
          title={description[index]}
          info={item}
        />
      ))}
    </div>
  );
};
