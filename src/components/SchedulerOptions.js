import React, { useState } from "react";
// import "../styles/SchedulerStep.scss";
import texts from "../content/texts";

const SchedulerOptions = ({ step, field, setField }) => {
  const [meetingType, setMeetingType] = useState(null);

  const fields = [
    texts.services.titles.one,
    texts.services.titles.two,
    texts.services.titles.three,
  ];

  const types = [
    texts.services.types.one,
    texts.services.types.two,
    texts.services.types.three,
  ];

  const meetingTypes = types[field] || [];

  const headers = [
    <h2>
      Wybierz obszar, którego będzie dotyczyć spotkanie i naciśnij "dalej"
      <br />
      Możliwa także rejestracja pod nr tel.: {texts.home.contact.phone}
    </h2>,
    <h2>Wybierz rodzaj wizyty</h2>,
    <h2>
      Wybierz termin wizyty
      <br />
      użyj strzałek, aby sprawdzić inny tydzień
    </h2>,
  ];

  const options = [
    fields.map((item, index) => (
      <li key={index}>
        <button
          className={`option${field === index ? " selected" : ""}`}
          onClick={() => setField(index)}
        >
          {item}
        </button>
      </li>
    )),
    meetingTypes.map((item, index) => (
      <li key={index}>
        <button
          className={`option${meetingType === index ? " selected" : ""}`}
          onClick={() => setMeetingType(index)}
        >
          <p>{item.name}</p>
          <div className="details">
            <p>Czas trwania: do {item.minutes} minut</p>
            <p>Koszt: {item.price} zł</p>
          </div>
        </button>
      </li>
    )),
  ];

  return (
    <div className="options-container">
      {headers[step]}
      <ul>{options[step]}</ul>
    </div>
  );
};
export default SchedulerOptions;
