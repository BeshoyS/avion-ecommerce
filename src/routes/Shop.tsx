import { FC } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { useGetProductsQuery } from "../redux/ApiSlice";

const Shop: FC = () => {
  const { data } = useGetProductsQuery();
  return (
    <main>
      <h1 className="capitalize text-center text-900 font-clashDisplay">
        Shop All Products
      </h1>
      <ProductsGrid data={data} />
    </main>
  );
};

export default Shop;
