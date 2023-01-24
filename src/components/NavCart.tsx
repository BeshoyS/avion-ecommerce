import React, { FC } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "../hooks/reduxHooks";

type Props = {
  handleNavigate: (to: string) => void;
};

const NavCart: FC<Props> = ({ handleNavigate }) => {
  const { quantity } = useAppSelector((state) => state.cart);
  return (
    <div className="relative">
      <IoCartOutline
        className="cursor-pointer hover:text-primary transition-colors duration-300"
        onClick={() => handleNavigate("cart")}
      />
      {quantity > 0 && (
        <div className="absolute -top-1 -right-2 w-[0.9rem] h-[0.9rem] flex justify-center items-center bg-darkPrimary text-white rounded-full text-[0.6rem]">
          {quantity}
        </div>
      )}
    </div>
  );
};

export default NavCart;
