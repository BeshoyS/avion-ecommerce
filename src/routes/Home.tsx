import { FC } from "react";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import InfoBlock from "../sections/InfoBlock";
import Listings from "../sections/Listings";
import EmailSignup from "../sections/EmailSignup";
import InfoBlockImg from "../assets/sections/features.png";

const infoBlockData = {
  heading: "The furniture brand for the future, with timeless designs",
  desc1:
    "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.",
  desc2:
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
  img: InfoBlockImg,
  btnName: "Get in touch",
  btnStyle: "bg-lightGray text-darkPrimary w-full md:w-2/5",
};

const Home: FC = () => {
  return (
    <div className="bg-lightGray text-darkPrimary">
      <Hero />
      <Features />
      <Listings />
      <EmailSignup />
      <InfoBlock {...infoBlockData} />
    </div>
  );
};

export default Home;
