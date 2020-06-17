import React from "react";
// import React, { useState } from "react";
// import "../styles/SchedulerStep.scss";
import texts from "../content/texts";

const SchedulerOptions = ({
  setSelected,
  field,
  meetingType,
  setMeetingType,
}) => {
  const types = [
    texts.services.types.one,
    texts.services.types.two,
    texts.services.types.three,
  ];

  const meetingTypes = types[field] || [];

  const options = meetingTypes.map((item, index) => (
    <li key={index}>
      <button
        type="button"
        className={`option${meetingType === index ? " selected" : ""}`}
        onClick={() => {
          setMeetingType(index);
          setSelected(2);
        }}
      >
        <p>{item.name}</p>
        <div className="details">
          <p>Czas trwania: do {item.minutes} minut</p>
          <p>Koszt: {item.price} zł</p>
        </div>
      </button>
    </li>
  ));

  return (
    <div className="options-container">
      <h2>Wybierz rodzaj wizyty</h2>
      <ul>{options}</ul>
    </div>
  );
};
export default SchedulerOptions;
