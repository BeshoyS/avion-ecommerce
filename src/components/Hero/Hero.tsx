import { FC } from "react";
import {
  BottomContainer,
  ContentContainer,
  ContentDetails,
  ContentHeading,
  HeroContainer,
  HeroImg,
  ImgContainer,
  TopContainer,
} from "./Hero.styled";
import hero from "../../assets/images/sections/hero.png";
import Button from "../Button/Button";

type Props = {};

const Hero: FC = (props: Props) => {
  return (
    <HeroContainer hero={hero}>
      <ContentContainer>
        <TopContainer full>
          <ContentHeading>
            The furniture brand for the future, with timeless designs
          </ContentHeading>
          <Button title="View Collection" color="lightdark"/>
        </TopContainer>
        <BottomContainer>
          <ContentDetails>
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </ContentDetails>
        </BottomContainer>
      </ContentContainer>
      <ImgContainer>
        <HeroImg src={hero} alt="hero" />
      </ImgContainer>
    </HeroContainer>
  );
};

export default Hero;
