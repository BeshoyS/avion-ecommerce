import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const NavDesktop: FC = (props: Props) => {
  return (
    <nav className={`bg-white text-primary  text-400`}>
      <div className="ml-auto">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "font-bold mx-8" : "mx-8")}
        >
          Home
        </NavLink>
        <NavLink
          to="shop"
          className={({ isActive }) => (isActive ? "font-bold mx-8" : "mx-8")}
        >
          Shop
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "font-bold mx-8" : "mx-8")}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavDesktop;
