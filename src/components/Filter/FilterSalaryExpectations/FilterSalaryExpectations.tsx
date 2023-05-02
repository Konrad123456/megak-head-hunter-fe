import staticText from '../../../languages/en.pl';

interface Props {
  question: string;
}

export const FilterSalaryExpectations = ({ question }: Props) => {
  return (
    <div className='filter-salary-expectations'>
      <p className='filter-salary-expectations__header'>{question}</p>
      <div className='filter-salary-expectations__container'>
        <label className='filter-salary-expectations__label'>
          Od
          <input
            className='filter-salary-expectations__input'
            type='number'
            placeholder={staticText.mainPages.text.onoThousand}
            min={0}
          />
        </label>
        <label className='filter-salary-expectations__label'>
          Do
          <input
            className='filter-salary-expectations__input'
            type='number'
            placeholder={staticText.mainPages.text.tenThousand}
            min={0}
          />
        </label>
      </div>
    </div>
  );
};
