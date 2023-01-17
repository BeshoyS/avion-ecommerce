import { FC } from "react";
import { Button } from "../types";

type Props = Button;

const Button: FC<Props> = ({ name, style, onClick, btnType }) => {
  return (
    <button
      type={btnType ? btnType : "button"}
      className={`text-400 py-4 px-8  ${
        style ?? ""
      } transition-all duration-300`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
