import { FC } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";
import { useGetFeaturedProductsQuery } from "../redux/ApiSlice";

const Listings: FC = () => {
  const { data: listingData } = useGetFeaturedProductsQuery(4);

  return (
    <section>
      <ProductsGrid data={listingData} />
      <div className="text-center mt-12 mb-6">
        <Button
          name="View collection"
          style="bg-lightGray text-darkPrimary hover:bg-borderDark"
        />
      </div>
    </section>
  );
};

export default Listings;
