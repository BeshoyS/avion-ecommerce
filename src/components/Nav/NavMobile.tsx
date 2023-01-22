import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/ApiSlice";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NavMobile: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { data: categories } = useGetCategoriesQuery();
  const { pathname } = useLocation();

  useEffect(() => {
    // Close the navigation panel
    setIsOpen(false);
  }, [pathname]);
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
        {categories?.map(({ id, category, img }) => (
          <NavLink
            key={id}
            to={`categories/${category.toLowerCase()}`}
            state={{ categoryId: id, categoryImg: img }}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            {category}
          </NavLink>
        ))}
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavMobile;
