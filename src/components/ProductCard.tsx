import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { listingDataTypes } from "../types";
import Button from "./Button";
import { IoCartOutline } from "react-icons/io5";

type Props = listingDataTypes;

const ProductCard: FC<Props> = ({ id, img, title, price }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${id}`);
  }

  return (
    <section onClick={handleClick}>
      <div className="h-3/4 cursor-pointer">
        <div className="relative overflow-y-hidden group">
          <img
            className="aspect-[1/1.3] object-cover shadow"
            src={img}
            alt={title}
          />
          <Button
            startIcon={<IoCartOutline className="text-600" />}
            name="Add To Cart"
            style="absolute bottom-0 left-0 w-full bg-primary/[0.9] text-lightGray font-clashDisplay translate-y-full group-hover:translate-y-0"
          />
        </div>
        <article className="mt-6">
          <h4 className="font-clashDisplay text-600">{title}</h4>
          <p className="text-500">${price}</p>
        </article>
      </div>
    </section>
  );
};

export default ProductCard;
