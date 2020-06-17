import React from "react";
import "../styles/Time.scss";

const Time = ({ slots, selectedTime, setSelectedTime }) => {
  console.log(slots);

  const hours = [];

  for (let slot of slots) {
    console.log(slot);
    const intervalStart = slot[0];
    const intervalEnd = slot[1];
  }

  return (
    <div className="time-container">
      <h2>Wybierz godzinę wizyty</h2>
      <div className="time">{slots}</div>
    </div>
  );
};
export default Time;
