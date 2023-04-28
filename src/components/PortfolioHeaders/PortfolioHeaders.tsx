interface Props {
  text: string;
}

export const PortfolioHeaders = ({ text }: Props) => {
  return (
    <div className='portfolio-headers'>
      <p className='portfolio-headers__description'>{text}</p>
    </div>
  );
};
