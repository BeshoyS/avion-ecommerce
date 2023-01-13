import { FC } from "react";
import { listingDataTypes } from "../data/listingData";

type Props = listingDataTypes;

const ProductCard: FC<Props> = ({ img, title, price }) => {
  return (
    <section>
      <div className="h-3/4">
        <img className="aspect-[1/1.2] object-cover" src={img} alt="" />
        <article className="mt-6">
          <h4 className="font-clashDisplay text-600">{title}</h4>
          <p className="text-500">${price}</p>
        </article>
      </div>
    </section>
  );
};

export default ProductCard;
