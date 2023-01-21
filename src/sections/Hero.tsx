import { FC } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/sections/hero.png";
import Button from "../components/Button";

const Hero: FC = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/categories", { relative: "path" });
  }
  return (
    <main className=" md:px-20 md:py-[3.75rem]">
      <div className="bg-darkPrimary text-white md:flex">
        <article className="p-6 md:w-3/5 grid grid-row-3 md:p-[3.75rem] ">
          <h1 className="py-4 text-800 font-clashDisplay md:pb-0 md:mb-0 sm:w-5/6 md:w-4/5">
            The furniture brand for the future, with timeless designs
          </h1>
          <p className="text-500 md:text-400 mb-8 mt-20 pr-8 md:mb-0 md:pr-0 md:self-end">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <Button
            onClick={handleNavigate}
            name="View categories"
            style="bg-lightGray/[0.15] w-full md:w-2/5 md:row-start-2 md:self-start hover:bg-lightGray/[0.25]"
          />
        </article>
        <div className="md:w-2/5 hidden md:block">
          <img className="h-full object-cover" src={heroImg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
