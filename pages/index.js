import React, { useState, useEffect } from "react";
// import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
import Layout from "../layouts/Layout";
import texts from "../public/content/texts";
import Button from "../components/Button";

// smoothscroll.polyfill();

const Index = () => {
  // const contactRef = React.createRef();

  // useEffect(() => {
  //   window.location.href.includes("/#kontakt") &&
  //     contactRef.current.scrollIntoView({ behavior: "smooth" });
  // });

  const [width, setWidth] = useState();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (window) {
      handleResize();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          Emilia Cwojdzińska - psycholog, psychoterapeuta - Babimost
        </title>
        <meta
          name="description"
          content="Emilia Cwojdzińska: dyplomowany psycholog i psychoterapeuta. Pomoc psychologiczna, psychoterapia poznawczo-behawioralna, badania kierowców. Umów wizytę online"
        />
        <meta
          property="og:title"
          content="Emilia Cwojdzińska - strona główna"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emiliacwojdzinska.pl/" />
      </Head>
      <main>
        <div className="first-view-wrap">
          <section
            className="home"
            // ref={homeRef}
          >
            <div className="portrait-container">
              <img src="/images/portrait.jpg" alt="" />
            </div>
            <div className="text-container">
              {texts.home.home}
              {width === undefined || width < 533 ? (
                <Button to="/umow-spotkanie">
                  <i className="far fa-calendar-check" aria-hidden></i>
                  <span>Umów spotkanie</span>
                </Button>
              ) : null}
            </div>
          </section>
          <section className="about">
            {texts.home.about}
            <Button to="/o-mnie">
              <span>Więcej o mnie</span>
            </Button>
          </section>
        </div>
        <section className="services">
          <h1>Pracuję w trzech obszarach:</h1>
          <div className="service">
            <div className="img-container">
              <img src="/images/services1.jpg" alt="" />
            </div>
            <div className="text-container">
              {texts.home.services.one}
              {width < 1024 ? null : texts.services.descriptions.one.intro}
            </div>
            <Button to="/psychoterapia-dorosli">
              <span>Więcej informacji</span>
            </Button>
          </div>
          <hr />
          <div className="service">
            <div className="img-container">
              <img src="/images/services2.jpg" alt="" />
            </div>
            <div className="text-container">
              {texts.home.services.two}
              {width < 1024 ? null : texts.services.descriptions.two.intro}
            </div>
            <Button to="/psychoterapia-dzieci-mlodziez">
              <span>Więcej informacji</span>
            </Button>
          </div>
          <hr />
          <div className="service">
            <div className="img-container">
              <img src="/images/services3.jpg" alt="" />
            </div>
            <div className="text-container">
              {texts.home.services.three}
              {width < 1024 ? null : texts.services.descriptions.three.intro}
            </div>
            <Button to="/psychologia-transportu-medycyna-pracy">
              <span>Więcej informacji</span>
            </Button>
          </div>
        </section>
        <section
          className="contact"
          id="kontakt"
          // ref={contactRef}
        >
          <h1>Kontakt</h1>
          <div className="contact-wrap">
            <div className="img-container">
              <img src="/images/gabinet.jpg" alt="" />
            </div>
            <div className="details-wrap">
              <div className="text-container">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fas fa-id-card" aria-hidden></i>
                      </td>
                      <td>
                        <p>{texts.home.contact.companyLine1}</p>
                        <p>{texts.home.contact.companyLine2}</p>
                        <p>{texts.home.contact.companyLine3}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-home" aria-hidden></i>
                      </td>
                      <td>
                        <p>{texts.home.contact.addressLine1}</p>
                        <p>{texts.home.contact.addressLine2}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-envelope" aria-hidden></i>
                      </td>
                      <td>
                        <a
                          className="row"
                          rel="noopener noreferrer"
                          href={`mailto:${texts.home.contact.email}`}
                        >
                          {texts.home.contact.email}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-phone-alt" aria-hidden></i>
                      </td>
                      <td>
                        <a
                          className="row"
                          rel="noopener noreferrer"
                          href={`tel:${texts.home.contact.phone}`}
                        >
                          {texts.home.contact.phone}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-money-bill-wave" aria-hidden></i>
                      </td>
                      <td>
                        <p>{texts.home.contact.accountNumberLine1}</p>
                        <p>{texts.home.contact.accountNumberLine2}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-facebook-square" aria-hidden></i>
                      </td>
                      <td>
                        <p>Zapraszam także do odwiedzenia</p>
                        <p>
                          <a
                            className="row"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/emilia.cwojdzinska.gabinet"
                          >
                            mojego profilu na Facebooku
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Button to="/umow-spotkanie">
                <i className="far fa-calendar-check" aria-hidden></i>
                <span>Umów spotkanie</span>
              </Button>
              <div className="map-container">
                <iframe
                  title="google-maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.138565636422!2d15.837638115794359!3d52.16817407974912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47067a179f4f5ed7%3A0x637fcc5f42fc5581!2sTadeusza%20Ko%C5%9Bciuszki%202%2C%2066-110%20Babimost!5e0!3m2!1spl!2spl!4v1591185959749!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  onLoad={() => {
                    console.log("iframe loaded");
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;
