import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  open: boolean;
};

export const NavbarContainer = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  padding: var(--padding-large);
  /* box-shadow: var(--box-shadow); */
  position: relative;
`;

export const Logo = styled(NavLink)`
  font-size: var(--h3-size);
  font-weight: normal;
`;
export const MenuContainer = styled.nav`
  ${({ theme }) => theme.mixins.flexCenter};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuContainerMobile = styled.nav<Props>`
  display: none;
  @media screen and (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: absolute;
    inset: 100% 0 auto 0;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    display: ${({open}) => (open ? "flex" : "none")};
  }
`;

export const IconsContainer = styled.nav`
  ${({ theme }) => theme.mixins.flexCenter};
  a {
    margin-right: 0.6rem;
  }
`;
export const HamBurgerMenu = styled.div`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
