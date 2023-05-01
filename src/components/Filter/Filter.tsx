import { ClearButton } from '../common/ClearButton/ClearButton';
import { FilterScores } from './FilterScores/FilterScores';
import { FilterQuestions } from './FilterQuestions/FilterQuestions';
import { FilterSalaryExpectations } from './FilterSalaryExpectations/FilterSalaryExpectations';
import { FilterApprenticeshipsAgreement } from './FilterApprenticeshipsAgreement/FilterApprenticeshipsAgreement';
import { FilterFreePracticeAgreement } from './FilterFreePracticeAgreement/FilterFreePracticeAgreement';
import { SubmitButton } from '../common/Button/SubmitButton';

export const Filter = () => {
  return (
    <div className='filter'>
      <div className='filter__container'>
        <div className='filter__header'>
          <h1 className='filter__title'>Filtrowanie</h1>
          <ClearButton text='Wyczyść wszystkie' />
        </div>

        <FilterScores text='Ocena przejścia kursu' />
        <FilterScores text='Ocena aktywności i zaangażowania na kursie' />
        <FilterScores text='Ocena kodu w projekcie własnym' />
        <FilterScores text='Ocena pracy w zespole w Scrum' />

        <FilterQuestions
          question='Preferowane miejsce prac'
          answers={['Praca zdalna', 'Praca w biurze']}
        />

        <FilterQuestions
          question='Oczekiwany typ kontraktu'
          answers={['Umowa o pracę', 'B2B', 'Umowa zlecenie', 'Umowa o dzieło']}
        />

        <FilterSalaryExpectations question='Oczekiwane wynagrodzenie miesięczne netto' />

        <FilterApprenticeshipsAgreement question='Zgoda na odbycie bezpłatnych praktyk/stażu na początek' />

        <FilterFreePracticeAgreement question='Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu' />

        <div className='filter__buttons'>
          <SubmitButton text='Anuluj' />
          <SubmitButton text='Pokaż wyniki' />
        </div>
      </div>
    </div>
  );
};
