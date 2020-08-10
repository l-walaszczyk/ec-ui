import React, { useEffect } from "react";
import PeopleCounter from "./PeopleCounter";
import texts from "../public/content/texts";
const types = texts.services.types;

const SchedulerStep1 = ({
  step,
  setStep,
  selected,
  // setSelected,
  selectedFieldIndex,
  // meetingTypes,
  selectedMeetingIndex,
  setSelectedMeetingIndex,
  numberOfPeople,
  setNumberOfPeople,
  setMeetingName,
  setMeetingDuration,
  setMeetingPrice,
  setSelectedDay,
  setSelectedTime,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meetingTypes = types[selectedFieldIndex] || [];
  // const showPeopleCounter = selectedFieldIndex === 2 ? true : false;

  const options = meetingTypes.map(({ name, price, minutes }, index) => {
    const priceMod = price * numberOfPeople;
    const minutesMod = minutes + (numberOfPeople - 1) * 30;

    return (
      <li key={index}>
        <button
          type="button"
          className={`option${
            selectedMeetingIndex === index ? " selected" : ""
          }`}
          onClick={() => {
            setSelectedMeetingIndex(index);
            setMeetingName(name);
            setMeetingPrice(priceMod);
            setMeetingDuration(minutesMod);
            setSelectedDay(null);
            setSelectedTime(null);
          }}
        >
          <p>{name}</p>
          <div className="details">
            <span>
              {`${
                numberOfPeople > 1 ? "Łączny czas:" : "Czas trwania:"
              } do ${minutesMod} minut`}
            </span>
            <span>
              {`${
                numberOfPeople > 1 ? "Łączny koszt" : "Koszt"
              }: ${priceMod} zł`}
            </span>
          </div>
        </button>
      </li>
    );
  });

  return (
    <section className="scheduler">
      <div className="options-container">
        {selectedFieldIndex === 2 && (
          <PeopleCounter
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            setSelectedMeetingIndex={setSelectedMeetingIndex}
            setSelectedDay={setSelectedDay}
            setSelectedTime={setSelectedTime}
          />
        )}
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
