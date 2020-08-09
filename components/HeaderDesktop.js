import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
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
        <a className="logo">
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
            <MenuItem to="/o-mnie">O mnie</MenuItem>
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
                  <MenuItem to="/psychoterapia-dorosli">
                    {texts.services.titles[0]}
                  </MenuItem>
                </li>
                <li>
                  <MenuItem to="/psychoterapia-dzieci-mlodziez">
                    {texts.services.titles[1]}
                  </MenuItem>
                </li>
                <li>
                  <MenuItem to="/psychologia-transportu-medycyna-pracy">
                    {texts.services.titles[2]}
                  </MenuItem>
                </li>
              </ul>
            </CSSTransition>
          </li>
          <li>
            <MenuItem to="/do-pobrania">
              Materiały
              <br />
              do pobrania
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/#kontakt">Kontakt</MenuItem>
          </li>
          <li>
            <Button to="/umow-spotkanie">
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
