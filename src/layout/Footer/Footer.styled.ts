import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--dark-primary);
  color: var(--white);
  padding: var(--padding-large);
  @media screen and (max-width: 768px) {
    padding: var(--padding-small);
  }
`;
export const TopContainer = styled.section`
  ${({ theme }) => theme.mixins.flexBetween};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BottomContainer = styled.section`
  ${({ theme }) => theme.mixins.flexBetween};
  padding-top: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const ElementsContainer = styled.section`
  flex: 1;
  ${({ theme }) => theme.mixins.flexBetween}
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;
