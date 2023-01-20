import { FC } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { useGetProductsQuery } from "../redux/ApiSlice";
import shopAllImg from "../assets/sections/shop_all_products.png";
import Heading from "../components/Heading";

const Shop: FC = () => {
  const { data } = useGetProductsQuery();
  return (
    <main>
      <Heading title="Shop All Products" bgImg={shopAllImg} />
      <ProductsGrid data={data} />
    </main>
  );
};

export default Shop;
