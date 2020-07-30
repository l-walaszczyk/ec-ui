import React from "react";
import Head from "next/head";
import Layout from "../layouts/Layout";
import Button from "../components/Button";
import texts from "../public/content/texts";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Emilia Cwojdzińska - o mnie</title>
        <meta
          name="description"
          content="Mgr Emilia Cwojdzińska - dyplomowany psycholog, certyfikowany psychoterapeuta, posiada uprawnienia do badań z zakresu psychologii transportu i medycyny pracy"
        />
        <meta property="og:title" content="Emilia Cwojdzińska - o mnie" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emiliacwojdzinska.pl/o-mnie" />
      </Head>
      <main>
        <section className="about-full">
          {/* <div className="text-container"> */}
          <h3>Mgr Emilia Cwojdzińska</h3>
          {/* </div> */}
          <hr />
          <div className="about-wrap">
            <div className="text-container">{texts.about.about}</div>
            <div className="img-container">
              <img src="/images/certificate_small.jpg" alt="" />
              {texts.about.caption}
            </div>
          </div>
        </section>
        <section className="see-also">
          <h3>Zapraszam do zapoznania się z ofertą:</h3>
          <div className="button-container">
            <Button to="/psychoterapia-dorosli">
              {texts.services.titles.one}
            </Button>
            <Button to="/psychoterapia-dzieci-mlodziez">
              {texts.services.titles.two}
            </Button>
            <Button to="/psychologia-transportu-medycyna-pracy">
              {texts.services.titles.three}
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;
