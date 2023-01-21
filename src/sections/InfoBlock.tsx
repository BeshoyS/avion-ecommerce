import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { InfoBlockTypes } from "../types";

type Props = InfoBlockTypes;

const InfoBlock: FC<Props> = ({
  heading,
  desc1,
  desc2,
  btnName,
  btnStyle,
  img,
  sectionStyle,
  naviagteTo,
}) => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(`/${naviagteTo}`, { relative: "path" });
  }
  return (
    <section
      className={`text-darkPrimary bg-white md:flex ${sectionStyle ?? ""}`}
    >
      <article className="px-6 py-12 md:w-1/2 flex flex-col justify-between gap-16">
        <div className="md:px-9 md:pt-6">
          <h2 className="font-clashDisplay text-700 mb-3 md:mb-6">{heading}</h2>
          <p className="text-primary mb-6 leading-150 text-400">{desc1}</p>
          <p className="text-primary leading-150 text-400">{desc2}</p>
        </div>
        <Button onClick={handleNavigate} name={btnName} style={btnStyle} />
      </article>
      <div className="md:w-1/2">
        <img className="h-full object-cover aspect-square" src={img} alt="" />
      </div>
    </section>
  );
};

export default InfoBlock;
