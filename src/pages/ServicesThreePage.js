import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import "../styles/ServicesPage.scss";
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
        <div className="description-wrap">
          <div className="img-container">
            <img src={services3} alt="" />
          </div>
          <div className="text-container">
            {texts.services.descriptions.three.extended.part1}
            <hr />
            {texts.services.descriptions.three.extended.part2}
          </div>
        </div>
        <hr />
        <div className="prices-wrap">
          <div className="img-container wide">
            <img src={equipment} alt="" />
          </div>
          <div className="prices" ref={pricesRef}>
            <h2>Cennik</h2>
            <PriceList prices={texts.services.prices.three} />
            <div className="discounts">
              {texts.services.descriptions.three.extended.part3}
            </div>
            <Button to="/scheduler">
              <i className="far fa-calendar-check"></i>
              <span>Umów spotkanie</span>
            </Button>
          </div>
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
