import React from "react";
import Link from "next/link";
// import "../styles/Button.scss";

const Button = ({ to, handleClick = () => undefined, children }) => {
  return (
    <Link href={to}>
      <a
        className="button-typ"
        type="button"
        onClick={() => handleClick(false)}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
