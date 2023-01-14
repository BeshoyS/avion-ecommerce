import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const NavDesktop: FC = (props: Props) => {
  return (
    <nav className={`bg-white text-primary text-400`}>
      <div className="ml-auto">
        <NavLink
          to="/"
          end
          className={`mx-8 hover:border-b-2 pb-7 border-darkPrimary`}
        >
          Home
        </NavLink>
        <NavLink
          to="shop"
          className={`mx-8 hover:border-b-2 pb-7 border-darkPrimary`}
        >
          Shop
        </NavLink>
        <NavLink
          to="about"
          className={`mx-8 hover:border-b-2 pb-7 border-darkPrimary`}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavDesktop;
