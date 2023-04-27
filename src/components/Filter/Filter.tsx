import { ClearButton } from '../common/ClearButton/ClearButton';
import { FilterScores } from './FilterScores/FilterScores';
import { FilterQuestions } from './FilterQuestions/FilterQuestions';

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
      </div>
    </div>
  );
};
