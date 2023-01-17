import { FC } from "react";
import InfoBlock from "../sections/InfoBlock";
import EmailSignup from "../sections/EmailSignup";
import Features from "../sections/Features";
import { infoBlockData } from "../data/infoBlockData";

const topInfoBlockData = { ...infoBlockData[1] };
const bottomInfoBlockData = { ...infoBlockData[2] };

const About: FC = () => {
  return (
    <div className="text-darkPrimary">
      <main className="py-8 px-6 md:py-16 md:text-center md:w-7/12 md:mx-auto">
        <h1 className="font-clashDisplay text-800 md:text-900 text-darkPrimary">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h1>
      </main>
      <div>
        <InfoBlock {...topInfoBlockData} />
        <InfoBlock {...bottomInfoBlockData} />
        <Features />
        <EmailSignup />
      </div>
    </div>
  );
};

export default About;
