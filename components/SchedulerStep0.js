import React from "react";
import texts from "../content/texts";

const SchedulerStep0 = ({
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
    <div className="options-container">
      <h2>
        Wybierz obszar, którego będzie dotyczyć spotkanie i naciśnij "dalej"
        <br />
        Możliwa także rejestracja pod nr tel.: {texts.home.contact.phone}
      </h2>
      <ul>{options}</ul>
    </div>
  );
};
export default SchedulerStep0;
