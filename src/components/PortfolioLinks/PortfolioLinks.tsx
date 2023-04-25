import { SingleLink } from './SingleLink';

interface Props {
  links: string[];
}

export const PortfolioLinks = ({ links }: Props) => {
  if (links.length === 0) return null;

  return (
    <div className='portfolio-links'>
      {links.map((link, index) => (
        <SingleLink key={index} link={link} />
      ))}
    </div>
  );
};
