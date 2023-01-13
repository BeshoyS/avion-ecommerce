import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
};

const NavMobile: FC<Props> = ({ isOpen }) => {
  return (
    <nav
      className={`absolute top-full left-0 bg-white w-full z-10 shadow-md  ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-6 p-6 text-600">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="shop"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavMobile;
