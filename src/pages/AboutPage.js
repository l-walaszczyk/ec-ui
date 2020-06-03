import React from "react";
import "../styles/AboutPage.css";
import texts from "../content/texts";
import Button from "../components/Button";
import certificate from "../images/certificate_small.png";

const About = () => {
  return (
    <main>
      <section className="about-full">
        <div className="text-container">
          <h3>Mgr Emilia Cwojdzińska</h3>
        </div>
        <hr />
        <div className="text-container">{texts.about.about}</div>
        <div className="img-container">
          <img src={certificate} alt="" />
          {texts.about.caption}
        </div>
      </section>
      <section className="see-also">
        <h3>Zapraszam do zapoznania się z ofertą:</h3>
        <div className="button-container">
          <Button to="/services1">{texts.services.titles.one}</Button>
          <Button to="/services2">{texts.services.titles.two}</Button>
          <Button to="/services3">{texts.services.titles.three}</Button>
        </div>
      </section>
    </main>
  );
};

export default About;
