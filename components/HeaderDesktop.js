import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
// import logo from "../public/images/logo.svg";
// import "../styles/HeaderDesktop.scss";
import Button from "../components/Button";
import MenuItem from "../components/MenuItem";
import texts from "../public/content/texts";

const HeaderDesktop = () => {
  const [drawerOpen, toggleDrawer] = useState(false);

  let timeoutNum = 0;

  const handleMouseEnter = () => {
    clearTimeout(timeoutNum);
    toggleDrawer(true);
  };

  const handleMouseLeave = () => {
    timeoutNum = setTimeout(() => toggleDrawer(false), 500);
  };

  const handleClick = () => {
    clearTimeout(timeoutNum);
    toggleDrawer(!drawerOpen);
  };

  return (
    <header className="desktop">
      <Link href="/">
        <a className="logo" onClick={() => toggleBurgerMenu(false)}>
          <img
            className="logo"
            src="/images/logo.svg"
            alt="Emilia Cwojdzińska - logo"
          />
        </a>
      </Link>
      <nav className="desktop-menu">
        <ul>
          <li>
            <MenuItem to="/">Home</MenuItem>
          </li>
          <li>
            <MenuItem to="/about">O mnie</MenuItem>
          </li>
          <li
            className="submenu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="menu-item" type="button" onClick={handleClick}>
              <span>Oferta</span>
              <i
                className={`fas fa-angle-${drawerOpen ? "up" : "down"}`}
                aria-hidden
              ></i>
            </button>
            <CSSTransition
              in={drawerOpen}
              classNames="desktop-submenu-transition"
              timeout={200}
              mountOnEnter
              unmountOnExit
            >
              <ul>
                <li>
                  <MenuItem to="/services1">
                    {texts.services.titles.one}
                  </MenuItem>
                </li>
                <li>
                  <MenuItem to="/services2">
                    {texts.services.titles.two}
                  </MenuItem>
                </li>
                <li>
                  <MenuItem to="/services3">
                    {texts.services.titles.three}
                  </MenuItem>
                </li>
              </ul>
            </CSSTransition>
          </li>
          <li>
            <MenuItem to="/downloads">
              Materiały
              <br />
              do pobrania
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/#contact">Kontakt</MenuItem>
          </li>
          <li>
            <Button to="/scheduler">
              <i className="far fa-calendar-check" aria-hidden></i>
              <span>Umów spotkanie</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
