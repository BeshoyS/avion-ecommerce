import { FC } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { useGetFeaturedProductsQuery } from "../redux/ApiSlice";

const Listings: FC = () => {
  const { data: listingData } = useGetFeaturedProductsQuery(4);

  return (
    <section className="p-6 md:px-[3.5rem] md:py-7">
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-5">
        {listingData?.map(({ id, url, name, price }) => (
          <ProductCard key={id} id={id} img={url} title={name} price={price} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          name="View collection"
          style="bg-lightGray text-darkPrimary hover:bg-borderDark"
        />
      </div>
    </section>
  );
};

export default Listings;
