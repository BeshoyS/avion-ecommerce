import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetsingleProductQuery } from "../redux/ApiSlice";

type Props = {};

const SingleProduct: FC = (props: Props) => {
  const { id } = useParams();
  const { data, isLoading } = useGetsingleProductQuery(id ? id : skipToken);
  !isLoading && console.log(data);
  return <div>{id}</div>;
};

export default SingleProduct;
