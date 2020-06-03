import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import "../styles/Header.css";
import BurgerMenu from "../components/BurgerMenu";

const Header = () => {
  const [BurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <>
      <header>
        <NavLink className="logo" to="/#home" exact>
          <img className="logo" src={logo} alt="Emilia Cwojdzińska - logo" />
        </NavLink>
        <button id="burger" onClick={() => setBurgerMenuOpen(!BurgerMenuOpen)}>
          <i className={BurgerMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </header>
      {BurgerMenuOpen && <BurgerMenu setBurgerMenuOpen={setBurgerMenuOpen} />}
    </>
  );
};

export default Header;
