import React from "react";
import moment from "moment-timezone";
import "moment/locale/pl";

const SchedulerStep3 = ({ meetingType, savedMeeting }) => {
  const meetingDateLocal = moment
    .utc(savedMeeting.meetingDate)
    .tz("Europe/Warsaw");
  return (
    <div className="options-container">
      <div className="summary-container">
        <h2>Podsumowanie, dodatkowe informacje i wybór płatności</h2>
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
          <p>
            Czas trwania: <span>Do {meetingType.minutes} minut</span>
          </p>
          <p>
            Koszt: <span>{meetingType.price} zł</span>
          </p>
          <p>
            W trosce o anonimowość klientów, uprzejmie proszę o przybycie nie
            wcześniej niż o ustalonej godzinie.
          </p>
        </div>
        <div className="form-container">
          <h2>Proszę podaj jeszcze kilka informacji (wymagane oznaczono *)</h2>
        </div>
      </div>
    </div>
  );
};
export default SchedulerStep3;
