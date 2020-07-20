import React, { useState, useEffect } from "react";
import HeaderMobile from "../components/HeaderMobile";
import HeaderDesktop from "../components/HeaderDesktop";

const Header = () => {
  const [width, setWidth] = useState(300);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (window) {
      handleResize();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width < 1024 ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
