import React, { useState } from "react";
import Link from "next/link";
// import logo from "../public/images/logo.svg";
// import "../styles/HeaderMobile.scss";
// // import "../styles/hamburgers.css";
import BurgerMenu from "../components/BurgerMenu";

const HeaderMobile = () => {
  const [burgerMenuOpen, toggleBurgerMenu] = useState(false);
  const [drawerOpen, toggleDrawer] = useState(false);

  // const closeDrawerAndMenu = () => {
  //   toggleBurgerMenu(false);
  //   toggleDrawer(false);
  // };

  return (
    <>
      <header className="mobile">
        <Link href="/">
          <a className="logo" onClick={() => toggleBurgerMenu(false)}>
            <img
              className="logo"
              src="/images/logo.svg"
              alt="Emilia Cwojdzińska - logo"
            />
          </a>
        </Link>
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

export default HeaderMobile;
