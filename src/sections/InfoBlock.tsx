import { FC } from "react";
import Button from "../components/Button";

type Props = {
  heading: string;
  desc1: string;
  desc2?: string;
  btnName: string;
  btnStyle: string;
  img: string;
  sectionStyle?: string;
};

const InfoBlock: FC<Props> = ({
  heading,
  desc1,
  desc2,
  btnName,
  btnStyle,
  img,
  sectionStyle,
}) => {
  return (
    <section className={`text-darkPrimary bg-white md:flex ${sectionStyle??""}`} >
      <article className="px-6 py-12 md:w-1/2 flex flex-col justify-between gap-16">
        <div className="md:px-9 md:pt-6">
          <h2 className="font-clashDisplay text-700 mb-3 md:mb-6">{heading}</h2>
          <p className="text-primary mb-6 leading-150 text-400">{desc1}</p>
          <p className="text-primary leading-150 text-400">{desc2}</p>
        </div>
        <Button name={btnName} style={btnStyle} />
      </article>
      <div className="md:w-1/2">
        <img className="h-full object-cover aspect-square" src={img} alt="" />
      </div>
    </section>
  );
};

export default InfoBlock;
