import styled from "styled-components";

export const MenuListContainer = styled.ul`
  ${({ theme }) => theme.mixins.flexBetween};
  margin: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MenuItem = styled.li`
  font-size: var(--body-small-size);
  margin: 0 0.5rem;

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;