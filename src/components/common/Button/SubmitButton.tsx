import { CSSProperties } from 'react';
import './_button.scss';

type Props = {
  text: string;
  type?: string;
  myStyles?: CSSProperties;
  handleClick?: () => void;
};
export const SubmitButton = ({ text, type = 'submit', handleClick, myStyles }: Props) => {
  return (
    <input onClick={handleClick} type={type} className='button' value={text} style={myStyles}/>
  );
};
