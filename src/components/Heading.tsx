import { FC } from "react";
import { HeadingTypes } from "../types";

type Props = HeadingTypes;

const Heading: FC<Props> = ({ title, customStyle, bgImg }) => {
  return (
    <h1
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`capitalize text-lightGray text-center text-900 font-clashDisplay p-16 bg-cover bg-no-repeat bg-center ${customStyle}`}
    >
      {title}
    </h1>
  );
};

export default Heading;
