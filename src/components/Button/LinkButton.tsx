type Props = {
  endpoint: string;
  text: string;
};
export const LinkButton = ({ endpoint, text }: Props) => {
  return (
    <a href={endpoint} className='button'>
      {text}
    </a>
  );
};
