import { ReactNode } from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export interface SocialLinksInterface {
    title: string;
    icon: ReactNode;
    url: string;
  }

export const SocialLinksList:SocialLinksInterface[] = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: "http://linkedin.com/in/beshoy-s-said",
  },
  {
    title: "Facebook",
    icon: <FaFacebookSquare />,
    url: "http://facebook.com/",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/beshoo.sam/",
  },
  {
    title: "Skype",
    icon: <FaSkype />,
    url: "http://Skype.com/",
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/beshoyssaid",
  },
  {
    title: "Pinterest",
    icon: <FaPinterest />,
    url: "https://www.pinterest.com/",
  },
];
