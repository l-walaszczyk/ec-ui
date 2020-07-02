import React from "react";
import "../styles/SchedulerNavButtons.scss";
import moment from "moment";
import config from "../config/config";

const SchedulerNavButtons = ({
  selected,
  step,
  setStep,
  meetingDuration,
  selectedDay,
  selectedTime,
  setWeekArray,
}) => {
  const handleNextStep = () => {
    if (step === 2) {
      const date = moment(selectedDay)
        .hour(Math.trunc(selectedTime))
        .minute((selectedTime % 1) * 60)
        .utc()
        .format();
      const url =
        config.apiURL +
        "book/?" +
        new URLSearchParams({ date, meetingDuration });
      console.log(url);

      const requestOptions = {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ title: "React POST Request Example" }),
      };

      fetch(url, requestOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.length === 7) {
              setWeekArray(result);
              console.log("Ktoś inny zarezerwował ten termin przed chwilą");
            } else {
              setStep(step + 1);
            }
          },
          (error) => {
            console.log("Error:", error);
          }
        );
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
