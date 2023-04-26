import './_button.scss';

type Props = {
  text: string;
};
export const SubmitButton = ({ text }: Props) => {
  return <input type='submit' className='button' value={text} />;
};
