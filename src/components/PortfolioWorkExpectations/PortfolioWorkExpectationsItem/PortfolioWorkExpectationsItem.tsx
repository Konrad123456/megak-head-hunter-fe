import React from 'react';

interface Props {
  title: string;
  info: string;
}

export const PortfolioWorkExpectationsItem = ({ title, info }: Props) => {
  return (
    <div className='portfolio-work-expectations-item'>
      <span className='portfolio-work-expectations-item__title'>{title}</span>
      <span className='portfolio-work-expectations-item__info'>{info}</span>
    </div>
  );
};
