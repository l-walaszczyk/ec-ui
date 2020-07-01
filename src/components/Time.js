import React from "react";
import "../styles/Time.scss";
import moment from "moment";

const Time = ({
  weekArray,
  selectedDay,
  selectedTime,
  setSelectedTime,
  setSelected,
}) => {
  const dayObject = weekArray.find((item) =>
    moment.utc(item.day).isSame(selectedDay, "day")
  );

  // console.log(dayObject);

  const hours = dayObject ? dayObject.hours : [];

  // console.log(hours);

  const times = hours.map((hour, index) => {
    const integerPart = Math.trunc(hour);
    const decimalPart = (hour % 1) * 60;

    return (
      <button
        key={index}
        type="button"
        className={`time${hour === selectedTime ? " selected" : ""}`}
        onClick={() => {
          setSelectedTime(hour);
          setSelected(3);
        }}
      >
        {integerPart} <sup>{(decimalPart < 10 ? "0" : "") + decimalPart}</sup>
      </button>
    );
  });

  return (
    <div className="time-container">
      <h2>Wybierz godzinę wizyty</h2>
      <div className="time">
        <p>{times}</p>
      </div>
    </div>
  );
};
export default Time;
