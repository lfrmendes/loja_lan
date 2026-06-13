import "../styles/button.css";

interface IButtonProps {
  text: string;
  secondary?: boolean;
}

export default function Button({ text, secondary }: IButtonProps) {
  return (
    <button
      type={secondary ? "button" : "submit"}
      className={secondary ? "btn-secondary" : "btn-primary"}
    >
      {text}
    </button>
  );
}
