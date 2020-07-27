import React, { useEffect } from "react";
// import smoothscroll from "smoothscroll-polyfill";
import Layout from "../layouts/Layout";
import texts from "../public/content/texts";
import Button from "../components/Button";
import PriceList from "../components/PriceList";

// smoothscroll.polyfill();

const Services2 = () => {
  const pricesRef = React.createRef();

  useEffect(() => {
    window.location.href.includes("/services2/#prices") &&
      pricesRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <Layout>
      <main>
        <section className="services-full">
          <h2>{texts.services.titles.two}</h2>
          <div className="button-container">
            <Button to="/services2/#prices">
              <span>Cennik</span>
            </Button>
            <Button to="/scheduler">
              <i className="far fa-calendar-check"></i>
              <span>Umów spotkanie</span>
            </Button>
          </div>
          <div className="description-wrap">
            <div className="img-container">
              <img src="/images/services2.jpg" alt="" />
            </div>
            <div className="text-container">
              {texts.services.descriptions.two.extended}
            </div>
          </div>
          <hr />
          <div className="prices" ref={pricesRef}>
            <h2>Cennik</h2>
            <PriceList types={texts.services.types.two} />
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
            <Button to="/services3">{texts.services.titles.three}</Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Services2;
