import React from "react";
import Link from "next/link";

const HeaderMobile = () => {
  return (
    <header className="mobile">
      <Link href="/">
        <a className="logo">
          <img
            className="logo"
            src="/images/logo.svg"
            alt="Emilia Cwojdzińska - logo"
          />
        </a>
      </Link>
    </header>
  );
};

export default HeaderMobile;
