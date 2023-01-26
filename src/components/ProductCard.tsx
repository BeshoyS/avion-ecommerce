import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import AddToCart from "./AddToCart";

type Props = {
  product: Product;
};

const ProductCard: FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const { name, url, price } = product;

  function handleNavigate() {
    navigate(`/product/${product.id}`);
  }

  return (
    <section onClick={handleNavigate}>
      <div className="h-3/4 cursor-pointer">
        <div className="relative overflow-y-hidden group">
          <img
            className="aspect-[1/1.3] object-cover shadow"
            src={url}
            alt={name}
          />
          <AddToCart
            product={{ ...product, quantity: 1 }}
            btnStyle="absolute -bottom-1 left-0 w-full bg-primary/[0.9] text-lightGray font-clashDisplay translate-y-full group-hover:translate-y-0"
          />
        </div>
        <article className="mt-6">
          <h4 className="font-clashDisplay text-600">{name}</h4>
          <p className="text-500">${price}</p>
        </article>
      </div>
    </section>
  );
};

export default ProductCard;
