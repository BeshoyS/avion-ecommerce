import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainer,
  Logo,
  MenuContainer,
  MenuContainerMobile,
  IconsContainer,
  HamBurgerMenu,
} from "./Navbar.styled";
import {
  TbShoppingCart,
  TbSearch,
  TbUserCircle,
  TbMenu2,
  TbX,
} from "react-icons/tb";
import { useState } from "react";
import MenuList from "../../components/MenuList/MenuList";

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <Logo to="/">Avion</Logo>
      <MenuContainer>
        <MenuList />
      </MenuContainer>
      <IconsContainer>
        <NavLink to="/search">
          <TbSearch />
        </NavLink>
        <NavLink to="/cart">
          <TbShoppingCart />
        </NavLink>
        <NavLink to="/myaccount">
          <TbUserCircle />
        </NavLink>
        <HamBurgerMenu onClick={() => setOpen(!open)}>
          {open ? <TbX /> : <TbMenu2 />}
        </HamBurgerMenu>
      </IconsContainer>
      <MenuContainerMobile open={open}>
        <MenuList />
      </MenuContainerMobile>
    </NavbarContainer>
  );
};

export default Navbar;
