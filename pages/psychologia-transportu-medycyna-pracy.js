import React, { useEffect } from "react";
// import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
import Layout from "../layouts/Layout";
import texts from "../public/content/texts";
import Button from "../components/Button";
import PriceList from "../components/PriceList";

// smoothscroll.polyfill();

const Services3 = () => {
  const pricesRef = React.createRef();

  useEffect(() => {
    window.location.href.includes("#cennik") &&
      pricesRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <Layout>
      <Head>
        <title>Psychologia transportu i medycyna pracy</title>
        <meta
          name="description"
          content="Psychologiczne badania kierowców (psychotesty), psychologiczne badania operatorów maszyn, osób pracujących na wysokościach, badania w zakresie medycyny pracy"
        />
        <meta
          property="og:title"
          content="Emilia Cwojdzińska - Psychologia transportu i medycyna pracy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://emiliacwojdzinska.pl/psychologia-transportu-medycyna-pracy"
        />
      </Head>
      <main>
        <section className="services-full">
          <h2>Psychologia transportu i medycyna pracy</h2>
          <div className="button-container">
            <Button to="/psychologia-transportu-medycyna-pracy/#cennik">
              <span>Cennik</span>
            </Button>
            <Button to="/umow-spotkanie">
              <i className="far fa-calendar-check"></i>
              <span>Umów spotkanie</span>
            </Button>
          </div>
          <div className="description-wrap">
            <div className="img-container">
              <img
                src="/images/services3.jpg"
                alt="Psychologia transportu i medycyna pracy - zdjęcie symboliczne: kierowca ciężarówki"
              />
            </div>
            <div className="text-container">
              {texts.services.descriptions[2].extended.part1}
              <hr />
              {texts.services.descriptions[2].extended.part2}
            </div>
          </div>
          <hr />
          <div className="prices-wrap">
            <div className="img-container wide">
              <img
                src="/images/equipment.jpg"
                alt="Sprzęt do badań psychologicznych kierowców, w który wyposażony jest gabinet"
              />
            </div>
            <div className="prices" ref={pricesRef}>
              <h2>Cennik</h2>
              <PriceList types={texts.services.types[2]} />
              <div className="discounts">
                {texts.services.descriptions[2].extended.part3}
              </div>
              <Button to="/umow-spotkanie">
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
            <Button to="/psychoterapia-dorosli">
              {texts.services.titles[0]}
            </Button>
            <Button to="/psychoterapia-dzieci-mlodziez">
              {texts.services.titles[1]}
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Services3;
