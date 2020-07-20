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
        <button
          type="button"
          className={`nav${step >= 3 ? " inactive" : ""}`}
          onClick={step >= 3 ? null : () => setStep(step - 1)}
        >
          Wstecz
        </button>

        <button
          type="button"
          className={`nav${selected < step + 1 ? " inactive" : ""}`}
          onClick={selected < step + 1 ? null : () => setStep(step + 1)}
        >
          Dalej
        </button>
      </div>
    </section>
  );
};
export default SchedulerStep1;
