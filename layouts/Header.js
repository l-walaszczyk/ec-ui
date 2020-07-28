import React, { useState, useEffect } from "react";
import HeaderMobile from "../components/HeaderMobile";
import HeaderDesktop from "../components/HeaderDesktop";
import HeaderBlank from "../components/HeaderBlank";

const Header = () => {
  const [width, setWidth] = useState();

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

  if (width === undefined) {
    return <HeaderBlank />;
  } else if (width < 1024) {
    return <HeaderMobile />;
  } else {
    return <HeaderDesktop />;
  }
};

export default Header;
