// import { Filter } from '../../components/Filter/Filter';
import { useLocation } from 'react-router';
import { Bio } from '../../components/Bio/Bio';
import { Skills } from '../../components/Skills/Skills';

export const PortfolioPage = () => {
  const tempLocation = useLocation();

  console.log(tempLocation);

  return (
    <>
      {/* <Filter /> */}
      <div className='portfolio-page'>
        <Bio />
        <Skills />
      </div>
    </>
  );
};
