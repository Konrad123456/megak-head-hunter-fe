// @flow
import * as React from 'react';

type Props = {
  endpoint: string;
  text: string;
};
export const Button = ({ endpoint, text }: Props) => {
  return (
    <a href={endpoint} className='button'>
      {text}
    </a>
  );
};
