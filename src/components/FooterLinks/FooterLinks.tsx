import { FC } from "react";
import {
  FooterLinksContainer,
  FooterLinksHeading,
  FooterLinksItem,
} from "./FooterLinks.styled";

interface Links {
  title: string;
  href: string;
}

interface Props {
  heading: string;
  links: Links[];
}

const FooterLinks: FC<Props> = ({ heading, links }) => {
  return (
    <FooterLinksContainer>
      <FooterLinksHeading>{heading}</FooterLinksHeading>
      {links?.map(({ title, href }, index) => (
        <FooterLinksItem key={index} to={href}>
          {title}
        </FooterLinksItem>
      ))}
    </FooterLinksContainer>
  );
};

export default FooterLinks;
