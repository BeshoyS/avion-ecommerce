import styled from "styled-components";

export const FeaturesContainer = styled.section`
  padding: calc(var(--padding-small) * 2);
  color: var(--dark-primary);
`;
export const FeaturesHeading = styled.h3`
  margin: 1rem auto;
  text-align: center;
  font-size: var(--h3-size);
`;
export const FeaturesBlocks = styled.section`
  ${({ theme }) => theme.mixins.flexBetween};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
