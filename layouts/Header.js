import React, { useState, useEffect } from "react";
import HeaderMobile from "../components/HeaderMobile";
import HeaderDesktop from "../components/HeaderDesktop";

const Header = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width < 1024 ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
