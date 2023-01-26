import { FC, MouseEvent } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addProduct } from "../redux/CartSlice";
import { CartProduct, Product } from "../types";
import Button from "./Button";

type Props = {
  product: CartProduct;
  btnStyle: string;
};

const AddToCart: FC<Props> = ({ product, btnStyle }) => {
  const dispatch = useAppDispatch();

  function handleClick(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    dispatch(
      addProduct({
        product: { ...product, total: product.quantity * product.price },
      })
    );
  }
  return (
    <Button
      onClick={(e) => handleClick(e)}
      startIcon={<IoCartOutline className="text-600" />}
      name="Add To Cart"
      style={btnStyle}
    />
  );
};

export default AddToCart;
