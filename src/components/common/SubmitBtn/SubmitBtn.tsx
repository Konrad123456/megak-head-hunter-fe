import "./_SubmitBtn.scss";

type Props = {
  text: string;
};
export const SubmitBtn = ({ text }: Props) => {
  return (
    <button type="submit" className="submit-button">
      {text}
    </button>
  );
};
