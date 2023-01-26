import { FC, MouseEvent } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addProduct } from "../redux/CartSlice";
import { Product } from "../types";
import Button from "./Button";

type Props = {
  product: Product;
};

const AddToCart: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  function handleClick(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    dispatch(addProduct({ product }));
  }
  return (
    <Button
      onClick={(e) => handleClick(e)}
      startIcon={<IoCartOutline className="text-600" />}
      name="Add To Cart"
      style="absolute -bottom-1 left-0 w-full bg-primary/[0.9] text-lightGray font-clashDisplay translate-y-full group-hover:translate-y-0"
    />
  );
};

export default AddToCart;
