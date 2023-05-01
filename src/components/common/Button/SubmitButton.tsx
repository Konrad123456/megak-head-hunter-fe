import './_button.scss';

type Props = {
  text: string;
  type?: string;
};
export const SubmitButton = ({ text, type = 'submit' }: Props) => {
  return <input type={type} className='button' value={text} />;
};
