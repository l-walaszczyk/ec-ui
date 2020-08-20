import React, { useEffect, useState } from "react";
import Week from "./Week";
import Time from "./Time";
import Summary from "./Summary";
import moment from "moment-timezone";
import "moment/locale/pl";
import texts from "../public/content/texts";

if (!Math.trunc) {
  Math.trunc = function (v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
  };
}

moment.locale("pl");

const SchedulerStep2 = ({
  step,
  setStep,
  selected,
  selectedFieldIndex,
  numberOfPeople,
  meetingName,
  meetingPrice,
  meetingDuration,
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
  setSavedMeeting,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitting, setSubmitting] = useState(false);

  const meetingDate = moment(selectedDay)
    .hour(Math.trunc(selectedTime))
    .minute((selectedTime % 1) * 60)
    .utc();

  const handleNextStep = () => {
    if (submitting) {
      return;
    }
    setSubmitting(true);

    const body = {
      date: meetingDate.format(),
      meetingName,
      meetingPrice,
      meetingDuration,
      selectedFieldIndex,
      numberOfPeople,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "include", // include, *same-origin, omit
    };

    const url = process.env.API_URL + "meetings";

    fetch(url, requestOptions)
      .then((res) => res.json())
      .then(
        ({ success, savedMeeting }) => {
          if (success) {
            setSavedMeeting(savedMeeting);
            document.cookie = `id=${savedMeeting._id};max-age=${40 * 60}`;
            setStep(step + 1);
          } else {
            setSavedMeeting(null);
            setSelectedTime(null);
            setSubmitting(false);
            alert(
              "Wybrany termin nie jest już dostępny. Wybierz inną godzinę/dzień."
            );
          }
        },
        (error) => {
          console.log("Error:", error);
          setSubmitting(false);
        }
      );
  };

  return (
    <section className="scheduler">
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
            <Summary
              selectedFieldIndex={selectedFieldIndex}
              numberOfPeople={numberOfPeople}
              meetingName={meetingName}
              meetingPrice={meetingPrice}
              meetingDuration={meetingDuration}
              meetingDate={meetingDate}
            />
          </div>
        )}
        <p>
          Jeśli nie możesz znaleźć odpowiadającego terminu proszę o kontakt pod
          numerem tel.:
          <br />
          <a
            className="row"
            rel="noopener noreferrer"
            href={`tel:${texts.home.contact.phone}`}
          >
            {texts.home.contact.phone}
          </a>
        </p>
      </div>
      <div className="button-container">
        <button type="button" className="nav" onClick={() => setStep(step - 1)}>
          Wstecz
        </button>

        <button
          type="button"
          className={`nav${selected < 3 ? " inactive" : ""}`}
          onClick={selected < 3 ? null : handleNextStep}
        >
          Dalej
        </button>
      </div>
    </section>
  );
};
export default SchedulerStep2;
