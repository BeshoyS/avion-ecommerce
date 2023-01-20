import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import Heading from "../components/Heading";
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
    <main className="mb-8">
      <Heading
        title={`${category}`}
        bgImg={state.categoryImg}
        customStyle="mb-8"
      />
      <ProductsGrid data={data} />
    </main>
  );
};

export default CategoryPage;
