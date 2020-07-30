import React from "react";
import { CSSTransition } from "react-transition-group";
// import "../styles/BurgerMenu.scss";
import Button from "./Button";
import MenuItem from "./MenuItem";
import texts from "../public/content/texts";

const BurgerMenu = ({
  burgerMenuOpen,
  toggleBurgerMenu,
  drawerOpen,
  toggleDrawer,
  // closeDrawerAndMenu,
}) => {
  return (
    <CSSTransition
      in={burgerMenuOpen}
      classNames="burger-menu-transition"
      timeout={250}
      mountOnEnter
      unmountOnExit
    >
      <nav className="burger-menu">
        <ul>
          <li>
            <MenuItem to="/" handleClick={toggleBurgerMenu}>
              Home
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/o-mnie" handleClick={toggleBurgerMenu}>
              O mnie
            </MenuItem>
          </li>
          <li>
            <button
              className="menu-item"
              type="button"
              onClick={() => toggleDrawer(!drawerOpen)}
            >
              <span>Oferta</span>
              <i className={`fas fa-angle-${drawerOpen ? "up" : "down"}`}></i>
            </button>
            <CSSTransition
              in={drawerOpen}
              classNames="burger-submenu-transition"
              timeout={250}
              mountOnEnter
              unmountOnExit
            >
              <ul>
                <li>
                  <MenuItem
                    to="/psychoterapia-dorosli"
                    handleClick={toggleBurgerMenu}
                  >
                    {texts.services.titles.one}
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    to="/psychoterapia-dzieci-mlodziez"
                    handleClick={toggleBurgerMenu}
                  >
                    {texts.services.titles.two}
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    to="/psychologia-transportu-medycyna-pracy"
                    handleClick={toggleBurgerMenu}
                  >
                    {texts.services.titles.three}
                  </MenuItem>
                </li>
              </ul>
            </CSSTransition>
          </li>
          <li>
            <MenuItem to="/do-pobrania" handleClick={toggleBurgerMenu}>
              Materiały do pobrania
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/#kontakt" handleClick={toggleBurgerMenu}>
              Kontakt
            </MenuItem>
          </li>
          <li>
            <Button to="/umow-spotkanie" handleClick={toggleBurgerMenu}>
              <i className="far fa-calendar-check"></i>
              <span>Umów spotkanie</span>
            </Button>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  );
};

export default BurgerMenu;
