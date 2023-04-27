interface Props {
  text: string;
}

export const PortfolioText = ({ text }: Props) => {
  return (
    <div className='portfolio-text'>
      <p>{text}</p>
    </div>
  );
};
