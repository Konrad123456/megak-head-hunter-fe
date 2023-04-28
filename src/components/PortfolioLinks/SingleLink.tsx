import React from 'react';

interface Props {
  link: string;
}

export const SingleLink = ({ link }: Props) => {
  return (
    <div>
      <a
        href={link}
        className='portfolio-links__item'
        target='_blank'
        rel='noreferrer'
      >
        <span className='material-symbols-outlined'>attach_file_add</span>
        <span className='portfolio-links__link'>{link}</span>
      </a>
    </div>
  );
};
