interface Props {
  text: string;
}

export const ClearButton = ({ text }: Props) => {
  return <button className='clear-button'>{text}</button>;
};
