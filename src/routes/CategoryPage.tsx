import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";
import { useGetProductsByCategoryQuery } from "../redux/ApiSlice";

const CategoryPage: FC = () => {
  const { category } = useParams();
  const { state } = useLocation();
  const categoryId: string = state.categoryId;
  const { data, isLoading } = useGetProductsByCategoryQuery(
    categoryId ? categoryId : skipToken
  );
  return (
    <main className="my-8">
      <h1 className="capitalize text-center text-900 font-clashDisplay">
        {category}
      </h1>
      <ProductsGrid data={data} />
    </main>
  );
};

export default CategoryPage;
