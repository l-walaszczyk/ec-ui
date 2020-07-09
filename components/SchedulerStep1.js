import React from "react";

const SchedulerStep1 = ({
  // setSelected,
  meetingTypes,
  selectedMeetingType,
  setSelectedMeetingType,
  setSelectedDay,
  setSelectedTime,
}) => {
  const options = meetingTypes.map((item, index) => (
    <li key={index}>
      <button
        type="button"
        className={`option${selectedMeetingType === index ? " selected" : ""}`}
        onClick={() => {
          setSelectedMeetingType(index);
          setSelectedDay(null);
          setSelectedTime(null);
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
export default SchedulerStep1;
