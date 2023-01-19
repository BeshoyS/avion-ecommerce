import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../redux/ApiSlice";

const CategoryPage: FC = () => {
  const { state } = useLocation();
  const categoryId: string = state.categoryId;
  const { data, isLoading } = useGetProductsByCategoryQuery(
    categoryId ? categoryId : skipToken
  );
  // !isLoading && console.log(data);
  return <div>CategoryPage</div>;
};

export default CategoryPage;
