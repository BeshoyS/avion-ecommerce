import { FC } from "react";
import CopyRights from "../../components/CopyRights/CopyRights";
import Divider from "../../components/Divider/Divider";
import EmailSignUp from "../../components/EmailSignUp/EmailSignUp";
import FooterLinks from "../../components/FooterLinks/FooterLinks";
import { footerLinksList } from "../../components/FooterLinks/footerLinksList";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import {
  BottomContainer,
  ElementsContainer,
  FooterContainer,
  TopContainer,
} from "./Footer.styled";

type Props = {};

const Footer: FC = (props: Props) => {
  return (
    <FooterContainer>
      <TopContainer>
        <ElementsContainer>
          {footerLinksList?.map(({ heading, links }, index) => (
            <FooterLinks key={index} heading={heading} links={links} />
          ))}
        </ElementsContainer>
        <EmailSignUp />
      </TopContainer>
      <Divider />
      <BottomContainer>
        <CopyRights />
        <SocialLinks />
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
