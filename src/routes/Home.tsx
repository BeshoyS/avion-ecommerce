import { FC } from "react";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import InfoBlock from "../sections/InfoBlock";
import Listings from "../sections/Listings";
import EmailSignup from "../sections/EmailSignup";

import {
  useGetCategoriesQuery,
  useGetGalleryQuery,
  useGetProductsQuery,
} from "../redux/ApiSlice";
import { infoBlockData } from "../data/infoBlockData";

const Home: FC = () => {
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();
  const { data: gallery, isLoading: isGalleryLoading } = useGetGalleryQuery();
  const { data: Products, isLoading: isProductsLoading } =
    useGetProductsQuery();
  !isCategoriesLoading && console.log(categories);
  !isGalleryLoading && console.log(gallery);
  !isProductsLoading && console.log(Products);

  return (
    <div className="bg-lightGray text-darkPrimary">
      <Hero />
      <Features />
      <Listings />
      <EmailSignup />
      <InfoBlock {...infoBlockData[0]} />
    </div>
  );
};

export default Home;
