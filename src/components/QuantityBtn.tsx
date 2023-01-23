import { FC, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type Props = {
  sku: number;
};

const QuantityBtn: FC<Props> = ({ sku }) => {
  const [amount, setAmount] = useState<number>(1);

  function increment() {
    setAmount((prev) => (prev < sku ? prev + 1 : prev));
  }
  function decrement() {
    setAmount((prev) => (prev > 1 ? prev - 1 : prev));
  }
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
      {/* {sku <= 9 && (
        <p className="py-2 font-semibold text-center text-orange-700 text-300">
          Almost sold out
        </p>
      )} */}
    </div>
  );
};

export default QuantityBtn;
