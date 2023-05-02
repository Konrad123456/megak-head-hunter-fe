import './_button.scss';

type Props = {
  text: string;
  type?: string;
  handleClick?: () => void;
};
export const SubmitButton = ({ text, type = 'submit', handleClick }: Props) => {
  return (
    <input onClick={handleClick} type={type} className='button' value={text} />
  );
};
