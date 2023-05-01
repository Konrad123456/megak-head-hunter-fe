import { FilterQuestion } from './FilterQuestion/FilterQuestion';

interface Props {
  question: string;
  answers: string[];
}

export const FilterQuestions = ({ question, answers }: Props) => {
  return (
    <div className='filter-questions'>
      <p className='filter-questions__header'>{question}</p>
      {answers.map((element, index) => (
        <FilterQuestion key={index} question={element} />
      ))}
    </div>
  );
};
