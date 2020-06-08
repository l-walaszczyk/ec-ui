import React from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/BurgerMenu.scss";
import Button from "../components/Button";
import ItemBurgerMenu from "../components/ItemBurgerMenu";
import texts from "../content/texts";

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
      timeout={200}
      mountOnEnter
      unmountOnExit
    >
      <nav>
        <ul>
          <li>
            <ItemBurgerMenu to="/#home" exact handleClick={toggleBurgerMenu}>
              Home
            </ItemBurgerMenu>
          </li>
          <li>
            <ItemBurgerMenu to="/about" handleClick={toggleBurgerMenu}>
              O mnie
            </ItemBurgerMenu>
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
              classNames="menu-drawer-transition"
              timeout={250}
              mountOnEnter
              unmountOnExit
            >
              <ul>
                <li>
                  <ItemBurgerMenu
                    to="/services1"
                    handleClick={toggleBurgerMenu}
                  >
                    {texts.services.titles.one}
                  </ItemBurgerMenu>
                </li>
                <li>
                  <ItemBurgerMenu
                    to="/services2"
                    handleClick={toggleBurgerMenu}
                  >
                    {texts.services.titles.two}
                  </ItemBurgerMenu>
                </li>
                <li>
                  <ItemBurgerMenu
                    to="/services3"
                    handleClick={toggleBurgerMenu}
                  >
                    {texts.services.titles.three}
                  </ItemBurgerMenu>
                </li>
              </ul>
            </CSSTransition>
          </li>
          <li>
            <ItemBurgerMenu to="/#contact" handleClick={toggleBurgerMenu}>
              Kontakt
            </ItemBurgerMenu>
          </li>
          <li>
            <Button to="/scheduler" handleClick={toggleBurgerMenu}>
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
