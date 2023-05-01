interface Props {
  question: string;
}

export const FilterFreePracticeAgreement = ({ question }: Props) => {
  return (
    <div className='filter-free-practice-agreement'>
      <p className='filter-free-practice-agreement__header'>{question}</p>

      <label className='filter-free-practice-agreement__label' htmlFor='months'>
        <input
          className='filter-free-practice-agreement__input'
          type='number'
          name='months'
          id='months'
          placeholder='0 miesięcy'
        />
      </label>
    </div>
  );
};
