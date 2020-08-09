import React from "react";
import moment from "moment-timezone";
import "moment/locale/pl";

const Summary = ({
  selectedFieldIndex,
  numberOfPeople,
  meetingName,
  meetingPrice,
  meetingDuration,
  meetingDate,
}) => {
  const meetingDateLocal = moment.utc(meetingDate).tz("Europe/Warsaw");

  return (
    <div className="summary">
      <p>
        Rodzaj spotkania: <span>{meetingName}</span>
      </p>
      <p>
        Data i godzina:{" "}
        <span>
          {meetingDateLocal.format("dddd, D MMMM YYYY")}, godz.{" "}
          {meetingDateLocal.format("HH:mm")}
        </span>
      </p>
      {selectedFieldIndex === 2 && (
        <p>
          Liczba osób do badania: <span>{numberOfPeople}</span>
        </p>
      )}
      <p>
        {numberOfPeople > 1 ? "Łączny czas trwania: " : "Czas trwania: "}
        <span>do {meetingDuration} minut</span>
      </p>
      <p>
        {numberOfPeople > 1 ? "Łączny koszt: " : "Koszt: "}
        <span>{meetingPrice} zł</span>
      </p>
    </div>
  );
};
export default Summary;
