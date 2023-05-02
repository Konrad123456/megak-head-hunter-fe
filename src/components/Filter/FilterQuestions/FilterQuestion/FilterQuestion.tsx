import { useState } from 'react';

interface Props {
  question: string;
}

export const FilterQuestion = ({ question }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div
      className={`filter-question ${isClicked && 'filter-question--clicked'}`}
      onClick={handleClick}
    >
      <p className='filter-question__text'>{question}</p>
    </div>
  );
};
