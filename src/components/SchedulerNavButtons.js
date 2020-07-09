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
  setSelectedTime,
  // savedMeeting,
  setSavedMeeting,
}) => {
  const handleNextStep = () => {
    if (step === 2) {
      const params = {
        date: moment(selectedDay)
          .hour(Math.trunc(selectedTime))
          .minute((selectedTime % 1) * 60)
          .utc()
          .format(),
        meetingDuration,
      };

      const requestOptions = {
        method: "POST",
        withCredentials: true,
      };

      // if (savedMeeting) {
      //   params.id = savedMeeting._id;
      //   requestOptions.method = "PATCH";
      // }

      const url = config.apiURL + "?" + new URLSearchParams(params);

      fetch(url, requestOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.success) {
              setSavedMeeting(result.savedMeeting);
              setStep(step + 1);
            } else {
              setSavedMeeting(null);
              setSelectedTime(null);
              console.log("Wybrany termin nie jest już dostępny");
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
        <button
          type="button"
          className={`nav${step >= 3 ? " inactive" : ""}`}
          onClick={step >= 3 ? null : () => setStep(step - 1)}
        >
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
