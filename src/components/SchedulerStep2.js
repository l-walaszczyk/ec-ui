import React from "react";
// import "../styles/SchedulerStep.scss";
import Week from "./Week";
import Time from "./Time";
// import config from "../config/config";

const SchedulerStep2 = ({
  setSelected,
  meetingDuration,
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
  setUrl,
  weekArray,
}) => {
  return (
    <div className="options-container">
      <Week
        setSelected={setSelected}
        weekArray={weekArray}
        meetingDuration={meetingDuration}
        setUrl={setUrl}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        setSelectedTime={setSelectedTime}
      />

      {weekArray && selectedDay && (
        <Time
          weekArray={weekArray}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};
export default SchedulerStep2;
