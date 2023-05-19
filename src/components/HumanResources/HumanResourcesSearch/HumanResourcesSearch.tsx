import { useState } from 'react';
import { Filter } from '../../../components/Filter/Filter';

export const HumanResourcesSearch = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  return (
    <div className='human-resources-search'>
      {isFilterOpen && <Filter handleClose={() => setIsFilterOpen(false)} />}
      <div className='human-resources-search__input-container'>
        <span className='human-resources-search__search-icon material-symbols-outlined'>
          search
        </span>
        <input
          className='human-resources-search__input'
          type='text'
          placeholder='Szukaj'
        />
      </div>

      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className='human-resources-search__button'
      >
        <span className='human-resources-search__filter-icon material-symbols-outlined'>
          filter_alt
        </span>
        <span className='human-resources-search__text'>Filtrowanie</span>
      </button>
    </div>
  );
};
