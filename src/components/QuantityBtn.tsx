import { FC, useState, useEffect, Dispatch } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAppDispatch } from "../hooks/reduxHooks";
import { updateProduct } from "../redux/CartSlice";

type Props = {
  sku: number;
  quantity: number;
  productId?: string;
  setQuantity?: Dispatch<React.SetStateAction<number>>;
};

const QuantityBtn: FC<Props> = ({ sku, quantity, productId, setQuantity }) => {
  const [amount, setAmount] = useState<number>(quantity ? quantity : 1);
  const dispatch = useAppDispatch();
  function increment() {
    setAmount((prev) => (prev < sku ? prev + 1 : prev));
  }
  function decrement() {
    setAmount((prev) => (prev > 1 ? prev - 1 : prev));
  }
  useEffect(() => {
    if (productId) {
      dispatch(updateProduct({ id: productId, quantity: amount }));
    }

    setQuantity && setQuantity(amount);
  }, [amount, setQuantity]);

  return (
    <div className="items-center gap-6 md:flex">
      <div className="flex items-center justify-between gap-8 p-4 bg-white md:w-1/2">
        <button
          className="text-borderGray"
          onClick={decrement}
          disabled={amount <= 1}
        >
          <AiOutlineMinus />
        </button>
        <p className="text-darkPrimary text-semibold">{amount}</p>
        <button
          className="text-borderDark"
          onClick={increment}
          disabled={amount === sku}
        >
          <AiOutlinePlus />
        </button>
      </div>
      {sku <= 9 && !productId && (
        <p className="py-2 font-semibold text-center text-orange-700 text-300">
          Almost sold out
        </p>
      )}
    </div>
  );
};

export default QuantityBtn;
