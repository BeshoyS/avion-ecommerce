import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { listingDataTypes } from "../types";

type Props = listingDataTypes;

const ProductCard: FC<Props> = ({ id, img, title, price }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${id}`);
  }

  return (
    <section onClick={handleClick}>
      <div className="h-3/4 cursor-pointer">
        <img
          className="aspect-[1/1.3] object-cover hover:scale-105 transition-all duration-300 shadow"
          src={img}
          alt=""
        />
        <article className="mt-6">
          <h4 className="font-clashDisplay text-600">{title}</h4>
          <p className="text-500">${price}</p>
        </article>
      </div>
    </section>
  );
};

export default ProductCard;
