import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/ApiSlice";

const NavDesktop: FC = () => {
  const { data: categories } = useGetCategoriesQuery();
  return (
    <nav className={`bg-white text-primary text-400`}>
      <div className="ml-auto">
        <NavLink
          to="/"
          end
          className={`mx-3 hover:border-b-2 pb-7 border-darkPrimary`}
        >
          Home
        </NavLink>
        <NavLink
          to="shop"
          className={`mx-3 hover:border-b-2 pb-7 border-darkPrimary`}
        >
          Shop
        </NavLink>
        {categories?.map(({ id, category }) => (
          <NavLink
            key={id}
            to={`categories/${category.toLowerCase()}`}
            state={{ categoryId: id }}
            className={`mx-3 hover:border-b-2 pb-7 border-darkPrimary`}
          >
            {category}
          </NavLink>
        ))}
        <NavLink
          to="about"
          className={`mx-3 hover:border-b-2 pb-7 border-darkPrimary`}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavDesktop;
