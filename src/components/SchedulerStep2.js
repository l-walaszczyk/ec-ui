import React from "react";
import Week from "./Week";
import Time from "./Time";
import moment from "moment-timezone";
import "moment/locale/pl";
import texts from "../content/texts";

moment.locale("pl");

const SchedulerStep2 = ({
  meetingDuration,
  meetingType,
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
  url,
  setUrl,
  weekArray,
  weekSuccess,
  hintsCheck,
  setHintsCheck,
  fetchWeek,
  // savedMeeting,
}) => {
  const meetingDateLocal = moment(selectedDay)
    .hour(Math.trunc(selectedTime))
    .minute((selectedTime % 1) * 60)
    .tz("Europe/Warsaw");

  return (
    <div className="options-container">
      <Week
        weekArray={weekArray}
        weekSuccess={weekSuccess}
        meetingDuration={meetingDuration}
        url={url}
        setUrl={setUrl}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        setSelectedTime={setSelectedTime}
        hintsCheck={hintsCheck}
        setHintsCheck={setHintsCheck}
        fetchWeek={fetchWeek}
        // savedMeeting={savedMeeting}
      />

      {weekArray && selectedDay && (
        <Time
          weekArray={weekArray}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
      {weekArray && selectedDay && selectedTime && (
        <div className="summary-container">
          <h2>Podsumowanie wyboru</h2>
          <div className="summary">
            <p>
              Rodzaj spotkania: <span>{meetingType.name}</span>
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
      <p>
        Jeśli nie możesz znaleźć odpowiadającego terminu proszę o kontakt pod
        nr. tel.: {texts.home.contact.phone}
      </p>
    </div>
  );
};
export default SchedulerStep2;
