import React, { useEffect } from "react";
import SummaryForm from "./SummaryForm";
import Summary from "./Summary";

const SchedulerStep3 = ({
  step,
  setStep,
  // selected,
  selectedFieldIndex,
  setSelectedFieldIndex,
  // meetingName,
  // meetingPrice,
  // meetingDuration,
  savedMeeting: {
    _id: id,
    meetingDate,
    meetingName,
    meetingPrice,
    meetingDuration,
    numberOfPeople,
  },
  setSavedMeeting,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="scheduler">
      <div className="options-container">
        <div className="summary-container">
          <h2>Podsumowanie, dodatkowe informacje i wybór płatności</h2>
          <Summary
            selectedFieldIndex={selectedFieldIndex}
            numberOfPeople={numberOfPeople}
            meetingName={meetingName}
            meetingPrice={meetingPrice}
            meetingDuration={meetingDuration}
            meetingDate={meetingDate}
          />
        </div>
        <div className="form-container">
          <SummaryForm
            step={step}
            setStep={setStep}
            selectedFieldIndex={selectedFieldIndex}
            setSelectedFieldIndex={setSelectedFieldIndex}
            id={id}
            meetingName={meetingName}
            meetingPrice={meetingPrice}
            meetingDuration={meetingDuration}
            numberOfPeople={numberOfPeople}
            setSavedMeeting={setSavedMeeting}
          />
        </div>
      </div>
    </section>
  );
};
export default SchedulerStep3;
