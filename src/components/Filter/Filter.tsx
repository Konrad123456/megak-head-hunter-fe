import { ClearButton } from '../common/ClearButton/ClearButton';
import { FilterScores } from './FilterScores/FilterScores';
import { FilterQuestions } from './FilterQuestions/FilterQuestions';
import { FilterSalaryExpectations } from './FilterSalaryExpectations/FilterSalaryExpectations';
import { FilterApprenticeshipsAgreement } from './FilterApprenticeshipsAgreement/FilterApprenticeshipsAgreement';
import { FilterFreePracticeAgreement } from './FilterFreePracticeAgreement/FilterFreePracticeAgreement';
import { SubmitButton } from '../common/Button/SubmitButton';
import staticText from '../../languages/en.pl';

export const Filter = () => {
  return (
    <div className='filter'>
      <div className='filter__container'>
        <div className='filter__header'>
          <h1 className='filter__title'>Filtrowanie</h1>
          <ClearButton text={staticText.mainPages.button.clear} />
        </div>

        <FilterScores text={staticText.mainPages.text.courseScore} />
        <FilterScores text={staticText.mainPages.text.activityScore} />
        <FilterScores text={staticText.mainPages.text.codeScore} />
        <FilterScores text={staticText.mainPages.text.teamWorkScore} />

        <FilterQuestions
          question={staticText.userPage.select.expectedTypeWork.label}
          answers={['Praca zdalna', 'Praca w biurze']}
        />

        <FilterQuestions
          question={staticText.mainPages.text.contractType}
          answers={['Umowa o pracę', 'B2B', 'Umowa zlecenie', 'Umowa o dzieło']}
        />

        <FilterSalaryExpectations
          question={staticText.mainPages.text.salaryExpectations}
        />

        <FilterApprenticeshipsAgreement
          question={staticText.mainPages.text.apprenticeshipsAgreement}
        />

        <FilterFreePracticeAgreement
          question={staticText.mainPages.text.freePracticeAgreement}
        />

        <div className='filter__buttons'>
          <SubmitButton text={staticText.mainPages.button.cancel} />
          <SubmitButton text={staticText.mainPages.button.showResults} />
        </div>
      </div>
    </div>
  );
};
