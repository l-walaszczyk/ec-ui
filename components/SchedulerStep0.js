import React from "react";
import texts from "../content/texts";

const SchedulerStep0 = ({
  step,
  setStep,
  selected,
  // setSelected,
  selectedField,
  setSelectedField,
  setSelectedMeetingType,
}) => {
  const fields = [
    texts.services.titles.one,
    texts.services.titles.two,
    texts.services.titles.three,
  ];

  const options = fields.map((item, index) => (
    <li key={index}>
      <button
        type="button"
        className={`option${selectedField === index ? " selected" : ""}`}
        onClick={() => {
          setSelectedField(index);
          // setSelected(1);
          setSelectedMeetingType(null);
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
          Możliwa także rejestracja pod nr tel.: {texts.home.contact.phone}
        </h2>
        <ul>{options}</ul>
      </div>

      <div className="button-container">
        <button
          type="button"
          className={`nav${selected < step + 1 ? " inactive" : ""}`}
          onClick={selected < step + 1 ? null : () => setStep(step + 1)}
        >
          Dalej
        </button>
      </div>
    </section>
  );
};
export default SchedulerStep0;
