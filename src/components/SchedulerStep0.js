import React from "react";
// import "../styles/SchedulerStep.scss";
import texts from "../content/texts";

const { one, two, three } = texts.services.titles;

const titles = [one, two, three];

const SchedulerStep0 = ({ field, setField }) => {
  const options = titles.map((title, index) => (
    <li key={index}>
      <button
        className={`option${field === index + 1 ? " selected" : ""}`}
        onClick={() => setField(index + 1)}
      >
        {title}
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
