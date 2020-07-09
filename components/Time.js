import React from "react";
// import "../styles/Time.scss";
import moment from "moment-timezone";

const Time = ({
  weekArray,
  selectedDay,
  selectedTime,
  setSelectedTime,
  setSelected,
}) => {
  const timeZone = moment.tz.zone("Europe/Warsaw");
  const timeOffset = timeZone.parse(selectedDay);
  const timeOffsetHours = timeOffset / 60;

  const dayObject = weekArray.find((item) =>
    moment.utc(item.day).isSame(selectedDay, "day")
  );

  const hours = dayObject ? dayObject.hours : [];

  const times = hours.map((hour, index) => {
    const hourLocal = hour - timeOffsetHours;
    const integerPart = Math.trunc(hourLocal);
    const decimalPart = (hourLocal % 1) * 60;

    return (
      <button
        key={index}
        type="button"
        className={`time${hour === selectedTime ? " selected" : ""}`}
        onClick={() => {
          setSelectedTime(hour);
          // setSelected(3);
        }}
      >
        {integerPart} <sup>{(decimalPart < 10 ? "0" : "") + decimalPart}</sup>
      </button>
    );
  });

  if (hours.length) {
    return (
      <div className="time-container">
        <h2>Wybierz godzinę wizyty</h2>
        <div className="time">
          <p>{times}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Time;
