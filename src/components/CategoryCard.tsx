import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../types";

type Props = Category;

const CategoryCard: FC<Props> = ({ id, category, img }) => {
  const navigate = useNavigate();
  function hangleNavigate() {
    navigate(`${category.toLowerCase()}`, {
      state: { categoryId: id, categoryImg: img },
    });
  }
  return (
    <div
      onClick={hangleNavigate}
      className="relative rounded overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <img
        className="w-full aspect-square object-cover "
        src={img}
        alt={category}
      />
      <h2 className="absolute inset-0 flex justify-center items-center text-800 font-clashDisplay text-lightGray bg-gradient-to-t bg-darkPrimary/[0.4]">
        {category}
      </h2>
    </div>
  );
};

export default CategoryCard;
