import React, { useEffect } from "react";
// import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
import Layout from "../layouts/Layout";
import texts from "../public/content/texts";
import Button from "../components/Button";
import PriceList from "../components/PriceList";

// smoothscroll.polyfill();

const Services1 = () => {
  const pricesRef = React.createRef();

  useEffect(() => {
    window.location.href.includes("#cennik") &&
      pricesRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <Layout>
      <Head>
        <title>Psychoterapia poznawczo-behawioralna osób dorosłych</title>
        <meta
          name="description"
          content="Nurt terapii o potwierdzonej naukowo skuteczności. Psychoterapia indywidualna, terapia par, leczenie depresji, zaburzeń, uzależnień. Możliwa także online"
        />
        <meta
          property="og:title"
          content="Emilia Cwojdzińska - Psychoterapia poznawczo-behawioralna osób dorosłych"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://emiliacwojdzinska.pl/psychoterapia-dorosli"
        />
      </Head>
      <main>
        <section className="services-full">
          <h2>{texts.services.titles[0]}</h2>
          <div className="button-container">
            <Button to="/psychoterapia-dorosli/#cennik">
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
                src="/images/services1.jpg"
                alt="Psychoterapia poznawczo-behawioralna dorosłych - zdjęcie symboliczne: kobieta"
              />
            </div>
            <div className="text-container">
              {texts.services.descriptions[0].extended}
            </div>
          </div>
          <hr />
          {/* <div className="prices-wrap"> */}
          <div className="prices" ref={pricesRef}>
            <h2>Cennik</h2>
            <PriceList types={texts.services.types[0]} />
            <Button
              to={{
                pathname: "/umow-spotkanie",
                // query: { field: 1 }
              }}
            >
              <i className="far fa-calendar-check"></i>
              <span>Umów spotkanie</span>
            </Button>
          </div>
          {/* </div> */}
          <hr />
        </section>
        <section className="see-also">
          <h2>Zobacz czym jeszcze się zajmuję</h2>
          <div className="button-container">
            <Button to="/psychoterapia-dzieci-mlodziez">
              {texts.services.titles[1]}
            </Button>
            <Button to="/psychologia-transportu-medycyna-pracy">
              {texts.services.titles[2]}
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Services1;
