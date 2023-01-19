import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useGetProductsByCategoryQuery } from "../redux/ApiSlice";

const CategoryPage: FC = () => {
  const { category } = useParams();
  const { state } = useLocation();
  const categoryId: string = state.categoryId;
  const { data, isLoading } = useGetProductsByCategoryQuery(
    categoryId ? categoryId : skipToken
  );
  return (
    <main>
      <h1 className="capitalize text-center text-900 font-clashDisplay">
        {category}
      </h1>
      <section className="p-6 md:px-[3.5rem] md:py-7">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-5">
          {data?.map(({ id, url, name, price }) => (
            <ProductCard
              key={id}
              id={id}
              img={url}
              title={name}
              price={price}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
