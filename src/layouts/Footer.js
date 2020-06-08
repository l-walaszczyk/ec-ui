import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>© 2020 Emilia Cwojdzińska</p>
      <p>
        <span>autor strony: Łukasz Walaszczyk</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:l.walaszczyk@interia.pl"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/l-walaszczyk/"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
