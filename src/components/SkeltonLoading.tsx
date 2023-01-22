import { FC } from "react";
import { TbArmchair2 } from "react-icons/tb";

const SkeltonLoading: FC = () => {
  return (
    <div className="shadow-lg p-4 grid gap-3">
      <TbArmchair2 className="text-8xl place-self-center text-borderDark animate-pulse duration-300 mb-4" />
      <div className="w-full bg-borderDark h-3 animate-pulse duration-300"></div>
      <div className="w-1/4 bg-borderDark h-3 animate-pulse duration-300"></div>
    </div>
  );
};

export default SkeltonLoading;
