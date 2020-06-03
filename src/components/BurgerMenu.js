import React from "react";
import { NavLink } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";
import "../styles/BurgerMenu.css";
import Button from "../components/Button";

const BurgerMenu = (props) => {
  const setBurgerMenuOpen = props.setBurgerMenuOpen;

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/#home" exact onClick={() => setBurgerMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setBurgerMenuOpen(false)}>
            O mnie
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">Oferta</NavLink>
        </li>
        <li>
          <NavLink to="/#contact" onClick={() => setBurgerMenuOpen(false)}>
            Kontakt
          </NavLink>
          {/* <HashLink to="/#contact" onClick={() => setBurgerMenuOpen(false)}>
            Kontakt
          </HashLink> */}
        </li>
        <li>
          <Button to="/scheduler" handleClick={setBurgerMenuOpen}>
            <i className="far fa-calendar-check"></i>
            <span>Umów spotkanie</span>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
