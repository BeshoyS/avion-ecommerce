import styled from "styled-components";

export const ListingsContainer = styled.section`
  padding: calc(var(--padding-small) * 2);
`;
export const ListingsHeading = styled.h2`
  font-size: var(--h2-size);
`;
export const ListingsBlock = styled.section`
  ${({ theme }) => theme.mixins.flexBetween};
  gap: 1%;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
