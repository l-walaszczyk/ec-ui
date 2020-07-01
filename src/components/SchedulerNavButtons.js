import React from "react";
import moment from "moment";
import "../styles/SchedulerNavButtons.scss";

const SchedulerNavButtons = ({
  selected,
  step,
  setStep,
  meetingDuration,
  selectedDay,
  selectedTime,
}) => {
  const handleNextStep = () => {
    if (step === 2) {
      const date = moment(selectedDay)
        .hour(Math.trunc(selectedTime))
        .minute((selectedTime % 1) * 60)
        .utc()
        .format();
      const url =
        "https://ec-api-a.herokuapp.com/book/?" +
        new URLSearchParams({ date, meetingDuration });
      console.log(url);

      //fetch
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="button-container">
      {step === 0 ? null : (
        <button type="button" className="nav" onClick={() => setStep(step - 1)}>
          Wstecz
        </button>
      )}

      <button
        type="button"
        className={`nav${selected < step + 1 ? " inactive" : ""}`}
        onClick={selected < step + 1 ? null : handleNextStep}
      >
        Dalej
      </button>
    </div>
  );
};

export default SchedulerNavButtons;
