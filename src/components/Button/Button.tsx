import { CSSProperties, FC } from "react";
import { CustomButton } from "./Button.styled";

type Props = {
  title: string;
  color: "dark" | "lightdark" | "light" | "transparent";
  style?: CSSProperties;
};

const Button: FC<Props> = ({ title, color, style }) => {
  return (
    <CustomButton color={color} style={style}>
      {title}
    </CustomButton>
  );
};

export default Button;
