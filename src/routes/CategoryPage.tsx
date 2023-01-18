import React from "react";
import { useLocation, useNavigation } from "react-router-dom";

type Props = {};

const CategoryPage = (props: Props) => {
  const { state } = useLocation();
  console.log(state);
  return <div>CategoryPage</div>;
};

export default CategoryPage;
