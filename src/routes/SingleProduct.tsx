import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import Loading from "../components/Loading";
import QuantityBtn from "../components/QuantityBtn";
import { infoBlockData } from "../data/infoBlockData";
import { useGetsingleProductQuery } from "../redux/ApiSlice";
import Features from "../sections/Features";
import InfoBlock from "../sections/InfoBlock";
import Listings from "../sections/Listings";
import { CartProduct } from "../types";

type Props = {};

const SingleProduct: FC = (props: Props) => {
  const [amount, setAmount] = useState<number>(1);
  const { id } = useParams();
  const { data, isLoading } = useGetsingleProductQuery(id ? id : skipToken);

  isLoading && <Loading />;
  return (
    <>
      <main className="md:w-11/12 mx-auto py-12 md:flex gap-12">
        <img
          className="block w-full md:w-1/2 aspect-square object-cover shadow-lg"
          src={data?.url}
          alt={data?.name}
        />
        <div className="px-6 md:flex flex-col justify-between">
          <article className="font-clashDisplay py-7">
            <h1 className="text-700 md:text-900">{data?.name}</h1>
            <p className="text-600 md:text-700">${data?.price}</p>
            <hr className="border-borderGray border-t mt-4  " />
          </article>
          <div>
            <QuantityBtn
              sku={data?.sku!}
              quantity={amount}
              setQuantity={setAmount}
            />
            <AddToCart
              product={{ ...data, quantity: amount } as CartProduct}
              btnStyle="bg-darkPrimary text-white w-full mt-4"
            />
          </div>
        </div>
      </main>
      <section className="bg-white pt-6">
        <h2 className="font-clashDisplay text-600 md:w-11/12 mx-auto px-6 md:px-0">
          You might also love these
        </h2>
        <Listings />
        <Features />
        <InfoBlock {...infoBlockData[2]} />
      </section>
    </>
  );
};

export default SingleProduct;
