import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import "../styles/HomePage.css";
import texts from "../content/texts";
import Button from "../components/Button";
import portrait from "../images/portrait.png";
import services1 from "../images/services1.png";
import services2 from "../images/services2.png";
import services3 from "../images/services3.png";
import room from "../images/gabinet.jpeg";

smoothscroll.polyfill();

const HomePage = () => {
  const contactRef = React.createRef();
  const homeRef = React.createRef();

  useEffect(() => {
    window.location.href.includes("#contact") &&
      setTimeout(
        () => contactRef.current.scrollIntoView({ behavior: "smooth" }),
        200
      );

    window.location.href.includes("#home") &&
      homeRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <main>
      <section className="home" ref={homeRef}>
        <div className="portrait-container">
          <img src={portrait} alt="" />
        </div>
        <div className="text-container">
          {texts.home.home}
          <Button to="/scheduler">
            <i className="far fa-calendar-check"></i>
            <span>Umów spotkanie</span>
          </Button>
        </div>
      </section>
      <section className="about">
        {texts.home.about}{" "}
        <Button to="/about">
          <span>Więcej o mnie</span>
        </Button>
      </section>
      <section className="services">
        <h1>Pracuję w trzech obszarach:</h1>
        <div className="service">
          <div className="img-container">
            <img src={services1} alt="" />
          </div>
          {texts.home.services.one}
          <Button to="/services1">
            <span>Więcej informacji</span>
          </Button>
        </div>
        <hr />
        <div className="service">
          <div className="img-container">
            <img src={services2} alt="" />
          </div>
          {texts.home.services.two}
          <Button to="/services2">
            <span>Więcej informacji</span>
          </Button>
        </div>
        <hr />
        <div className="service">
          <div className="img-container">
            <img src={services3} alt="" />
          </div>
          {texts.home.services.three}
          <Button to="/services3">
            <span>Więcej informacji</span>
          </Button>
        </div>
      </section>
      <section className="contact" ref={contactRef}>
        <h1>Kontakt</h1>
        <div className="img-container">
          <img src={room} alt="" />
        </div>
        <div className="title-row">
          <p>
            Gabinet Psychologiczny <br />- mgr Emilia Cwojdzińska
          </p>
          <Button to="/scheduler">
            <i className="far fa-calendar-check"></i>
            <span>Umów spotkanie</span>
          </Button>
        </div>
        <div className="text-container">
          <table>
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-home"></i>
                </td>
                <td>
                  <p>
                    {texts.home.contact.addressLine1}
                    <br />
                    {texts.home.contact.addressLine2}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-id-card"></i>
                </td>
                <td>
                  <p>{texts.home.contact.nip}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-envelope"></i>
                </td>
                <td>
                  <a
                    className="row"
                    rel="noopener noreferrer"
                    href={`mailto:${texts.home.contact.email}`}
                  >
                    <p>{texts.home.contact.email}</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-phone-alt"></i>
                </td>
                <td>
                  <a
                    className="row"
                    rel="noopener noreferrer"
                    href={`tel:${texts.home.contact.phone}`}
                  >
                    <p>{texts.home.contact.phone}</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-money-bill-wave"></i>
                </td>
                <td>
                  <p>{texts.home.contact.account}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fab fa-facebook-square"></i>
                </td>
                <td>
                  <p>
                    Zapraszam także do odwiedzenia{" "}
                    <a
                      className="row"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com"
                    >
                      mojego profilu na Facebooku
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <address className="row">
            <i className="fas fa-home"></i>
            {texts.home.contact.address}
            </address>
            <div className="row">
            <i className="fas fa-id-card"></i>
            {texts.home.contact.nip}
            </div>
            <a
            className="row"
            rel="noopener noreferrer"
            href={`mailto:${texts.home.contact.email}`}
            >
            <i className="fas fa-envelope"></i>
            <p>{texts.home.contact.email}</p>
            </a>
            <a
            className="row"
            rel="noopener noreferrer"
            href={`tel:${texts.home.contact.phone}`}
          >
            <i className="fas fa-phone-alt"></i>
            <p>{texts.home.contact.phone}</p>
          </a>
          <div className="row">
            <i className="fas fa-money-bill-wave"></i>
            {texts.home.contact.account}
            </div>
          <a
          className="row"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <i className="fab fa-facebook-square"></i>
            <p>
            Zapraszam także do odwiedzenia{" "}
            <span>mojego profilu na Facebooku</span>
            </p>
           </a> */}
        </div>
        <div className="map-container">
          <iframe
            title="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.138565636422!2d15.837638115794359!3d52.16817407974912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47067a179f4f5ed7%3A0x637fcc5f42fc5581!2sTadeusza%20Ko%C5%9Bciuszki%202%2C%2066-110%20Babimost!5e0!3m2!1spl!2spl!4v1591185959749!5m2!1spl!2spl"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
