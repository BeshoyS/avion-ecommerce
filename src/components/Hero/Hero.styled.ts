import styled from "styled-components";

interface Props {
  hero?: string;
  full?: boolean;
}

export const HeroContainer = styled.main<Props>`
  ${({ theme }) => theme.mixins.flexCenter};
  background: var(--dark-primary);
  color: var(--white);
  @media screen and (max-width: 768px) {
    background: ${({ hero }) =>
      hero
        ? `linear-gradient(
        0deg,
        var(--dark-primary-overlay),
        var(--dark-primary-overlay)
      ), url(${hero})`
        : "var(--dark-primary)"};
    background-size: cover;
    background-position: center;
  }
`;
export const ContentContainer = styled.section`
  flex: 2;
  align-self: stretch;
  ${({ theme }) => theme.mixins.flexBetween};
  flex-direction: column;
  gap: 8rem;
  padding: calc(var(--padding-small) * 2);
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const TopContainer = styled.section<Props>`
  @media screen and (max-width: 768px) {
    & > * {
      width: ${({ full }) => (full ? "100%" : "auto")};
    }
  }
`;
export const ContentHeading = styled.h2`
  font-size: var(--h2-size);
  margin-bottom: 1.5rem;
`;

export const BottomContainer = styled.section``;
export const ContentDetails = styled.p`
  font-size: calc(var(--body-small-size) * 1.2);
  line-height: 1.5;
`;

export const ImgContainer = styled.section`
  flex: 1;
  align-self: stretch;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HeroImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
