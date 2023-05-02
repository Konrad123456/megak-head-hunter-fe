// import { Filter } from '../../components/Filter/Filter';
import { Bio } from '../../components/Bio/Bio';
import { Skills } from '../../components/Skills/Skills';

export const PortfolioPage = () => {
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
