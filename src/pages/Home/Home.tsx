import { FC } from "react";
import Features from "../../components/Features/Features";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Hero from "../../components/Hero/Hero";
import Listings from "../../components/Listings/Listings";
import { ceramics } from "../../components/Listings/ListingsLists";
import Newsletters from "../../components/Newsletters/Newsletters";

type Props = {};

const Home: FC = (props: Props) => {
  return (
    <>
      <Hero />
      <Features/>
      <Listings heading="New ceramics" data={ceramics} />
      {/* <Listings/> */}
      <Newsletters/>
      <GetInTouch/>
    </>
  );
};

export default Home;
