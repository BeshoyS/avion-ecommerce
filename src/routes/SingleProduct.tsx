import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const SingleProduct = (props: Props) => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SingleProduct;
