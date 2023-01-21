import { InfoBlockTypes } from "../types";
import variant1Img from "../assets/sections/features.png";
import variant3Img from "../assets/sections/email_signup2.png";

const variant_1 = {
  heading: "The furniture brand for the future, with timeless designs",
  desc1:
    "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.",
  desc2:
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
  img: variant1Img,
  btnName: "Get in touch",
  naviagteTo: "contact",
  btnStyle: "bg-lightGray text-darkPrimary w-full md:w-2/5 hover:bg-borderDark",
};
const variant_2 = {
  heading: "From a studio in London to a global brand with over 400 outlets",
  desc1:
    "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.",
  desc2:
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
  img: variant1Img,
  btnName: "Get in touch",
  naviagteTo: "contact",
  btnStyle: "bg-lightGray text-darkPrimary w-full md:w-2/5 hover:bg-borderDark",
};
const variant_3 = {
  heading:
    "Our service isn't just personal, it's actually hyper personally exquisite",
  desc1:
    "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.",
  desc2:
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
  img: variant3Img,
  btnName: "Get in touch",
  naviagteTo: "contact",
  btnStyle: "bg-lightGray text-darkPrimary w-full md:w-2/5 hover:bg-borderDark",
  sectionStyle: "flex flex-col-reverse md:flex-row-reverse",
};
export const infoBlockData: InfoBlockTypes[] = [
  variant_1,
  variant_2,
  variant_3,
];
