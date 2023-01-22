import { FC } from "react";
import { ButtonTypes } from "../types";

type Props = ButtonTypes;

const Button: FC<Props> = ({
  name,
  style,
  onClick,
  btnType,
  startIcon,
  endIcon,
}) => {
  return (
    <button
      type={btnType ? btnType : "button"}
      className={`text-400 py-4 px-8  ${
        style ?? ""
      } transition-all duration-300 flex justify-center items-center gap-1 `}
      onClick={onClick}
    >
      {startIcon}
      {name}
      {endIcon}
    </button>
  );
};

export default Button;
