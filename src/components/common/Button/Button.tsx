import './_button.scss';

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
