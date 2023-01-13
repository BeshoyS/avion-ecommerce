import { GrPinterest } from "react-icons/gr";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillSkype,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

export interface socialLinksTypes {
  name: string;
  icon: JSX.Element;
  url: string;
}

export const socialLinks: socialLinksTypes[] = [
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/beshoysaid/",
  },
  {
    name: "Facebook",
    icon: <AiFillFacebook />,
    url: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: <AiOutlineInstagram />,
    url: "https://www.instagram.com/",
  },
  {
    name: "Skype",
    icon: <AiFillSkype />,
    url: "https://www.skype.com/",
  },
  {
    name: "Twitter",
    icon: <AiOutlineTwitter />,
    url: "https://twitter.com/beshoyssaid",
  },
  {
    name: "Pinterest",
    icon: <GrPinterest />,
    url: "https://www.pinterest.com/",
  },
];
