import React from "react";
import "../styles/SchedulerNavButtons.scss";

const SchedulerNavButtons = ({ selected, step, setStep }) => {
  return (
    <div className="button-container">
      {step === 0 ? null : (
        <button className="nav" onClick={() => setStep(step - 1)}>
          Wstecz
        </button>
      )}

      <button
        className={`nav${selected < step + 1 ? " inactive" : ""}`}
        onClick={
          selected < step + 1
            ? null
            : () => {
                setStep(step + 1);
              }
        }
      >
        Dalej
      </button>
    </div>
  );
};

export default SchedulerNavButtons;
