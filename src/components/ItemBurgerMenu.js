import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ItemBurgerMenu.scss";

const ItemBurgerMenu = ({
  to,
  exact = false,
  handleClick = () => undefined,
  children,
}) => {
  return (
    <NavLink
      className="menu-item"
      type="button"
      to={to}
      exact={exact}
      onClick={() => handleClick(false)}
    >
      {children}
    </NavLink>
  );
};

export default ItemBurgerMenu;
