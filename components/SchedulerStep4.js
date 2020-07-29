import React from "react";
import texts from "../public/content/texts";

const SchedulerStep4 = () => {
  return (
    <section className="scheduler">
      <div className="options-container">
        <div className="summary-container">
          <h2>Spotkanie zostało zarezerwowane</h2>
          <p>
            Na podany adres email zostało wysłane potwierdzenie rezerwacji.
            Powinno dojść w przeciągu 5 minut, jeśli go nie widzisz, sprawdź
            folder Spam.
          </p>
          <p>
            W przypadku nieotrzymania potwierdzenia po upływie 10 minut proszę o
            kontakt pod adresem:{" "}
            <a
              className="row"
              rel="noopener noreferrer"
              href={`mailto:${texts.home.contact.email}`}
            >
              {texts.home.contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SchedulerStep4;
