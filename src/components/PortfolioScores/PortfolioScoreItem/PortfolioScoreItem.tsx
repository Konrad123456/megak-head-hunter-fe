interface Props {
  text: string;
  stars: number;
}

const staticStars = [true, true, true, true, true];

export const PortfolioScoreItem = ({ text, stars }: Props) => {
  return (
    <div className='portfolio-score-item'>
      <p className='portfolio-score-item__text'>{text}</p>

      <div className='portfolio-score-item__stars'>
        <span className='portfolio-score-item__score'>
          <b>{stars}</b>/5
        </span>

        {staticStars.map((star, index) => {
          if (index < stars)
            return (
              <span key={index} className='red material-symbols-outlined'>
                star_rate
              </span>
            );
          return (
            <span key={index} className='material-symbols-outlined'>
              star_rate
            </span>
          );
        })}
      </div>
    </div>
  );
};
