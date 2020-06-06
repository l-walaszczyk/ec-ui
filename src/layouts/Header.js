import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import "../styles/Header.css";
import "../styles/hamburgers.css";
import BurgerMenu from "../components/BurgerMenu";

const Header = () => {
  const [burgerMenuOpen, toggleBurgerMenu] = useState(false);
  const [drawerOpen, toggleDrawer] = useState(false);

  // const closeDrawerAndMenu = () => {
  //   toggleBurgerMenu(false);
  //   toggleDrawer(false);
  // };

  return (
    <>
      <header>
        <NavLink
          className="logo"
          to="/#home"
          exact
          onClick={() => toggleBurgerMenu()}
          // onClick={() => closeDrawerAndMenu()}
        >
          <img className="logo" src={logo} alt="Emilia Cwojdzińska - logo" />
        </NavLink>
        <button
          className={`hamburger hamburger--squeeze ${
            burgerMenuOpen && "is-active"
          }`}
          type="button"
          onClick={() => toggleBurgerMenu(!burgerMenuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>
      <BurgerMenu
        burgerMenuOpen={burgerMenuOpen}
        toggleBurgerMenu={toggleBurgerMenu}
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        // closeDrawerAndMenu={closeDrawerAndMenu}
      />
    </>
  );
};

export default Header;
