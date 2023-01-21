import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import ProductsGrid from "../components/ProductsGrid";
import { useGetProductsByCategoryQuery } from "../redux/ApiSlice";
import { Category } from "../types";
interface stateTypes {
  categoryId: Category["id"];
  categoryImg: Category["img"];
}
const CategoryPage: FC = () => {
  const { category } = useParams();
  const { state } = useLocation();
  const { categoryId, categoryImg } = state as stateTypes;
  const { data, isLoading } = useGetProductsByCategoryQuery(
    categoryId ? categoryId : skipToken
  );
  return (
    <main className="mb-8">
      <Heading title={`${category}`} bgImg={categoryImg} customStyle="mb-8" />
      <ProductsGrid data={data} />
    </main>
  );
};

export default CategoryPage;
