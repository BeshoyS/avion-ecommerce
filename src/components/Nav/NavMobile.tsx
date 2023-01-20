import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/ApiSlice";

type Props = {
  isOpen: boolean;
};

const NavMobile: FC<Props> = ({ isOpen }) => {
  const { data: categories } = useGetCategoriesQuery();
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
      </div>
    </nav>
  );
};

export default NavMobile;
