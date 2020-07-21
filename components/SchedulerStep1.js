import React from "react";

const SchedulerStep1 = ({
  step,
  setStep,
  selected,
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
    <section className="scheduler">
      <div className="options-container">
        <h2>Wybierz rodzaj wizyty</h2>
        <ul>{options}</ul>
      </div>
      <div className="button-container">
        <button type="button" className="nav" onClick={() => setStep(step - 1)}>
          Wstecz
        </button>

        <button
          type="button"
          className={`nav${selected < 2 ? " inactive" : ""}`}
          onClick={selected < 2 ? null : () => setStep(step + 1)}
        >
          Dalej
        </button>
      </div>
    </section>
  );
};
export default SchedulerStep1;
