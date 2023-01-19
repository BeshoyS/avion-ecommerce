import { FC } from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";

type Props = {
  data?: Product[];
};

const ProductsGrid: FC<Props> = ({ data }) => {
  return (
    <section className="p-6 md:px-[3.5rem] grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-7 md:py-7">
      {data?.map(({ id, url, name, price }) => (
        <ProductCard key={id} id={id} img={url} title={name} price={price} />
      ))}
    </section>
  );
};

export default ProductsGrid;
