import { FC } from "react";

type Props = {
  name: string;
  style?: string;
  onClick?: () => void;
  btnType?: "submit" | "reset";
};

const Button: FC<Props> = ({ name, style, onClick, btnType }) => {
  return (
    <button
      type={btnType ? btnType : "button"}
      className={`text-400 py-4 px-8  ${style ?? ""}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
