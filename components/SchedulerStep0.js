import React, { useEffect } from "react";
import texts from "../public/content/texts";

const SchedulerStep0 = ({
  step,
  setStep,
  selected,
  // setSelected,
  selectedFieldIndex,
  setSelectedFieldIndex,
  setNumberOfPeople,
  setSelectedMeetingIndex,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fields = [
    texts.services.titles[0],
    texts.services.titles[1],
    texts.services.titles[2],
  ];

  const options = fields.map((item, index) => (
    <li key={index}>
      <button
        type="button"
        className={`option${selectedFieldIndex === index ? " selected" : ""}`}
        onClick={() => {
          setSelectedFieldIndex(index);
          // setSelected(1);
          setSelectedMeetingIndex(null);
          setNumberOfPeople(1);
        }}
      >
        <p>{item}</p>
      </button>
    </li>
  ));

  return (
    <section className="scheduler">
      <div className="options-container">
        <h2>
          Wybierz obszar, którego będzie dotyczyć spotkanie i naciśnij "dalej"
        </h2>
        <p>
          Możliwa także rejestracja pod nr tel.:<br/>
          <a
            className="row"
            rel="noopener noreferrer"
            href={`tel:${texts.home.contact.phone}`}
          >
            {texts.home.contact.phone}
          </a>
        </p>
        <p>
          Z uwagi na sytuację związaną z COVID proszę o rezerwację wizyty online
          Skype. Jeśli wyjątkowo potrzebna jest wizyta w gabinecie, proszę o
          kontakt telefoniczny.
        </p>
        <ul>{options}</ul>
      </div>

      <div className="button-container">
        <button
          type="button"
          className={`nav${selected < 1 ? " inactive" : ""}`}
          onClick={selected < 1 ? null : () => setStep(step + 1)}
        >
          Dalej
        </button>
      </div>
    </section>
  );
};
export default SchedulerStep0;
