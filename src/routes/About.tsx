import { FC } from "react";
import InfoBlock from "../sections/InfoBlock";
import TopInfoBlockImg from "../assets/sections/features.png";
import BottomInfoBlockImg from "../assets/sections/email_signup2.png";
import EmailSignup from "../sections/EmailSignup";
import Features from "../sections/Features";

const topInfoBlockData = {
  heading: "From a studio in London to a global brand with over 400 outlets",
  desc1:
    "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.",
  desc2:
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
  img: TopInfoBlockImg,
  btnName: "Get in touch",
  btnStyle: "bg-lightGray text-darkPrimary w-full md:w-2/5 hover:bg-borderDark",
};
const bottomInfoBlockData = {
  heading:
    "Our service isn't just personal, it's actually hyper personally exquisite",
  desc1:
    "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.",
  desc2:
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
  img: BottomInfoBlockImg,
  btnName: "Get in touch",
  btnStyle: "bg-lightGray text-darkPrimary w-full md:w-2/5 hover:bg-borderDark",
  sectionStyle: "flex flex-col-reverse md:flex-row-reverse",
};

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
