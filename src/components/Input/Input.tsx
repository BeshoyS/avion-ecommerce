import { FC } from "react";
import { CustomInput } from "./Input.styled";

type Props = {
  type: string;
  placeholder: string;
};

const Input: FC<Props> = ({ type, placeholder }) => {
  return <CustomInput dark type={type} placeholder={placeholder} />;
};

export default Input;
