import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { TbPlant2 } from "react-icons/tb";
import { featuresDataTypes } from "../types";

export const featuresData: featuresDataTypes[] = [
  {
    icon: <TbTruckDelivery strokeWidth="1.75" />,
    title: "Next day as standard",
    desc: "Order before 3pm and get your order the next day as standard",
  },
  {
    icon: <IoCheckmarkCircleOutline strokeWidth="1.75" />,
    title: "Made by true artisans",
    desc: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    icon: <HiOutlineCreditCard strokeWidth="1.75" />,
    title: "Unbeatable prices",
    desc: "For our materials and quality you won't find better prices anywhere",
  },
  {
    icon: <TbPlant2 strokeWidth="1.75" />,
    title: "Recycled packaging",
    desc: "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];
