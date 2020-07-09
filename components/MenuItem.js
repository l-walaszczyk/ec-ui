import React from "react";
import Link from "next/link";
// import "../styles/MenuItem.scss";

const MenuItem = ({ to, handleClick = () => undefined, children }) => {
  return (
    <Link href={to}>
      <a className="menu-item" type="button" onClick={() => handleClick(false)}>
        {children}
      </a>
    </Link>
  );
};

export default MenuItem;
