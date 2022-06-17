import styled from "styled-components";

export const CardContainer = styled.section`
  padding: 1rem 0;
  ${({ theme }) => theme.mixins.flexBetween};
  width: 24%;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 49%;
  }
`;
// export const ImgContainer = styled.section<Props>`
//   margin-bottom: 1rem;
//   width: 180px;
//   height: 200px;
//   /* background-image: ${({ img }) => (img ? img : notAvailable)};
//   background-size: cover;
//   background-position: center;
//   object-fit: cover; */
// `;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
`;

export const ContentContainer = styled.section``;
export const Title = styled.h4`
  font-size: var(--h4-size);
  margin: 0.5rem 0;
`;
export const Price = styled.p`
  font-size: var(--body-medium-size);
`;
