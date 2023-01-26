import { FC } from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import SkeltonLoading from "./SkeltonLoading";

type Props = {
  data?: Product[];
  isLoading: boolean;
};

const ProductsGrid: FC<Props> = ({ data, isLoading }) => {
  return (
    <section className="p-6 md:px-[3.5rem] grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-7 md:py-7">
      {isLoading
        ? [...Array(10).keys()].map((el) => <SkeltonLoading key={el} />)
        : data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </section>
  );
};

export default ProductsGrid;
