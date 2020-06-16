import React from "react";
import "../styles/SchedulerNavButtons.scss";

const SchedulerNavButtons = ({ field, step, setStep }) => {
  return (
    <div className="button-container">
      {step === 0 ? null : (
        <button className="nav" onClick={() => setStep(step - 1)}>
          Wstecz
        </button>
      )}

      <button
        className={`nav${field === null ? " inactive" : ""}`}
        onClick={field === null ? null : () => setStep(step + 1)}
      >
        Dalej
      </button>
    </div>
  );
};

export default SchedulerNavButtons;
