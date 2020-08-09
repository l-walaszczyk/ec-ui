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
    texts.services.titles.one,
    texts.services.titles.two,
    texts.services.titles.three,
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
        {item}
      </button>
    </li>
  ));

  return (
    <section className="scheduler">
      <div className="options-container">
        <h2>
          Wybierz obszar, którego będzie dotyczyć spotkanie i naciśnij "dalej"
          <br />
          <span>
            Możliwa także rejestracja pod nr tel.:
            <br />
            <a
              className="row"
              rel="noopener noreferrer"
              href={`tel:${texts.home.contact.phone}`}
            >
              {texts.home.contact.phone}
            </a>
          </span>
        </h2>
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
