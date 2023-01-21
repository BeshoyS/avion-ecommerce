import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProductsGrid from "../components/ProductsGrid";
import { useGetFeaturedProductsQuery } from "../redux/ApiSlice";

const Listings: FC = () => {
  const { data: listingData } = useGetFeaturedProductsQuery(4);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/shop", { relative: "path" });
  }
  return (
    <section>
      <ProductsGrid data={listingData} />
      <div className="text-center mt-12 mb-6">
        <Button
          onClick={handleNavigate}
          name="View collection"
          style="bg-lightGray text-darkPrimary hover:bg-borderDark"
        />
      </div>
    </section>
  );
};

export default Listings;
