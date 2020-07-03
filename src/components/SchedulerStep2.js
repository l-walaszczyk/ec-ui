import React from "react";
import Week from "./Week";
import Time from "./Time";
import moment from "moment-timezone";
import "moment/locale/pl";

moment.locale("pl");

const SchedulerStep2 = ({
  setSelected,
  meetingDuration,
  meetingType,
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
  setUrl,
  weekArray,
}) => {
  const meetingDateLocal = moment(selectedDay)
    .hour(Math.trunc(selectedTime))
    .minute((selectedTime % 1) * 60)
    .tz("Europe/Warsaw");

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
      {weekArray && selectedDay && selectedTime && (
        <div className="summary-container">
          <h2>Podsumowanie wyboru</h2>
          <div className="summary">
            <p>
              Rodzaj spotkania: <span>{meetingType}</span>
            </p>
            <p>
              Data: <span>{meetingDateLocal.format("dddd, D MMMM YYYY")}</span>
            </p>
            <p>
              Godzina: <span>{meetingDateLocal.format("HH:mm")}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default SchedulerStep2;
