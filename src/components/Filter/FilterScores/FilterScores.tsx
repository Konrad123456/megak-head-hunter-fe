import { FilterScore } from './FilterScore/FilterScore';

interface Props {
  text: string;
}

const MAX_STARS = 5;

export const FilterScores = ({ text }: Props) => {
  const createArray = (max: number = MAX_STARS) => {
    const starsNumber: boolean[] = [];

    for (let index = 0; index < MAX_STARS; index++) {
      starsNumber.push(true);
    }

    return starsNumber.reverse();
  };

  return (
    <div className='filter-scores'>
      <p className='filter-scores__header'>{text}</p>
      <div className='filter-scores__box'>
        {createArray(MAX_STARS).map((element, index) => (
          <FilterScore key={index} score={MAX_STARS - index} />
        ))}
      </div>
    </div>
  );
};
