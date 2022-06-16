import styled from "styled-components";

export const SocialLinksContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  font-size: inherit;
  gap: 1.5rem;
  color: inherit;
  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;
export const SocialLink = styled.a`
  color: inherit;
`;
