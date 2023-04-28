import staticText from '../../languages/en.pl';
import { PortfolioScoreItem } from './PortfolioScoreItem/PortfolioScoreItem';

interface Props {
  stars: number[];
}

const text = [
  staticText.mainPages.text.courseScore,
  staticText.mainPages.text.activityScore,
  staticText.mainPages.text.codeScore,
  staticText.mainPages.text.teamWorkScore,
];

export const PortfolioScores = ({ stars }: Props) => {
  return (
    <div className='portfolio-scores'>
      {text.map((score, index) => (
        <PortfolioScoreItem
          text={text[index]}
          stars={stars[index]}
          key={index}
        />
      ))}
    </div>
  );
};
