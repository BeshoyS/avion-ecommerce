import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../redux/ApiSlice";

type Props = {};

const Shop = (props: Props) => {
  const { data } = useGetProductsQuery();
  return (
    <main>
      <h1 className="capitalize text-center text-900 font-clashDisplay">
        Shop All Products
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

export default Shop;
