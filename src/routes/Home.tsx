import { FC, useEffect } from "react";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import InfoBlock from "../sections/InfoBlock";
import Listings from "../sections/Listings";
import EmailSignup from "../sections/EmailSignup";
import { infoBlockData } from "../data/infoBlockData";

const Home: FC = () => {

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
