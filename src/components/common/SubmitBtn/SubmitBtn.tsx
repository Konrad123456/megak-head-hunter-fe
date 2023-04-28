import "./_SubmitBtn.scss";

type Props = {
  text: string;
  classType?:string;
};
export const SubmitBtn = ({ text,classType }: Props) => {
  return (
    <button type="submit" className={`submit-button ${classType ? classType : null}`}>
      {text}
    </button>
  );
};
