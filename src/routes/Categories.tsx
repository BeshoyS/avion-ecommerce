import { FC } from "react";
import CategoryCard from "../components/CategoryCard";
import Loading from "../components/Loading";
import { useGetCategoriesQuery } from "../redux/ApiSlice";

const Categories: FC = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <div className="w-4/5 mx-auto my-7">
      <h1 className="font-clashDisplay text-900  text-center my-12">
        Categories
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
