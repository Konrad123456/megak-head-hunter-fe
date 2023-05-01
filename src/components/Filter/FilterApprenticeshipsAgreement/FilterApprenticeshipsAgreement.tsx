interface Props {
  question: string;
}

export const FilterApprenticeshipsAgreement = ({ question }: Props) => {
  return (
    <div className='filter-apprenticeships-agreement'>
      <p className='filter-apprenticeships-agreement__header'>{question}</p>
      <label className='filter-apprenticeships-agreement__label' htmlFor='yes'>
        <input
          className='filter-apprenticeships-agreement__input'
          type='radio'
          name='question'
          id='yes'
        />
        Tak
      </label>
      <label className='filter-apprenticeships-agreement__label' htmlFor='no'>
        <input
          className='filter-apprenticeships-agreement__input'
          type='radio'
          name='question'
          id='no'
        />
        Nie
      </label>
    </div>
  );
};
