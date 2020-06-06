import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import "../styles/ServicesPage.css";
import texts from "../content/texts";
import Button from "../components/Button";
import PriceList from "../components/PriceList";
import services3 from "../images/services3.png";
import equipment from "../images/equipment.jpg";

smoothscroll.polyfill();

const ServicesThreePage = () => {
  const pricesRef = React.createRef();

  useEffect(() => {
    window.location.href.includes("/services3/#prices") &&
      pricesRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <main>
      <section className="services-full">
        <h2>Psychologia transportu i medycyna pracy</h2>
        <div className="button-container">
          <Button to="/services3/#prices">
            <span>Cennik</span>
          </Button>
          <Button to="/scheduler">
            <i className="far fa-calendar-check"></i>
            <span>Umów spotkanie</span>
          </Button>
        </div>
        <div className="img-container">
          <img src={services3} alt="" />
        </div>
        <div className="description">
          {texts.services.descriptions.three.part1}
        </div>
        <hr />
        <div className="description">
          {texts.services.descriptions.three.part2}
        </div>
        <hr />

        <div className="img-container wide">
          <img src={equipment} alt="" />
        </div>
        <div className="prices" ref={pricesRef}>
          <h2>Cennik</h2>
          <PriceList prices={texts.services.prices.three} />
          <Button to="/scheduler">
            <i className="far fa-calendar-check"></i>
            <span>Umów spotkanie</span>
          </Button>
        </div>
        <hr />
      </section>
      <section className="see-also">
        <h2>Zobacz czym jeszcze się zajmuję</h2>
        <div className="button-container">
          <Button to="/services1">{texts.services.titles.one}</Button>
          <Button to="/services2">{texts.services.titles.two}</Button>
        </div>
      </section>
    </main>
  );
};

export default ServicesThreePage;
