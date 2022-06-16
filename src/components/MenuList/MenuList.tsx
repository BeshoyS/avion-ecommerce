import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MenuListContainer, MenuItem } from "./MenuList.styled";

type Props = {};

const MenuList: FC = (props: Props) => {
  return (
    <MenuListContainer>
      <MenuItem>
        <NavLink to="/shop">All products</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/jewlery">Jewlery</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/men-clothings">Men's Clothings</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/women-clothings">Women's Clothings</NavLink>
      </MenuItem>
    </MenuListContainer>
  );
};

export default MenuList;
