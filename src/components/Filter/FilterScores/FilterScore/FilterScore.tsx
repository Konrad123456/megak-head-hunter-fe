import { useState } from 'react';

interface Props {
  score: number;
}

export const FilterScore = ({ score }: Props) => {
  const [isMarked, setIsMarked] = useState<boolean>(false);

  const handleClick = () => {
    console.log('handleclick');
    setIsMarked((prevState) => !prevState);
  };

  return (
    <div
      className={`filter-score ${isMarked && 'filter-score--clicked'}`}
      onClick={handleClick}
    >
      <span className='filter-score__points'>{score}</span>
      <span
        className={`filter-score__star ${
          isMarked && 'filter-score__star--clicked'
        } material-symbols-outlined`}
      >
        star_rate
      </span>
    </div>
  );
};
