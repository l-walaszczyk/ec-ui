import React from "react";
// import React, { useState } from "react";
// import "../styles/SchedulerStep.scss";
import Week from "./Week";

const SchedulerOptions = ({ setSelected, selectedDay, setSelectedDay }) => {
  return (
    <div className="options-container">
      <h2>
        Wybierz termin wizyty
        <br />
        użyj strzałek, aby sprawdzić inny tydzień
      </h2>
      <Week selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <h2>Wybierz godzinę wizyty</h2>
    </div>
  );
};
export default SchedulerOptions;
