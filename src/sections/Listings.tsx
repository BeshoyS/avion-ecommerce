import { FC } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { listingData } from "../data/listingData";

const Listings: FC = () => {
  return (
    <section className="p-6 md:px-[3.5rem] md:py-7">
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-5">
        {listingData?.map(({ img, title, price }, idx) => (
          <ProductCard key={idx} img={img} title={title} price={price} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button name="View collection" style="bg-lightGray text-darkPrimary" />
      </div>
    </section>
  );
};

export default Listings;
