import React from "react";
import Week from "./Week";
import Time from "./Time";
import moment from "moment-timezone";
import "moment/locale/pl";
import texts from "../content/texts";
import config from "../config/config";

moment.locale("pl");

const SchedulerStep2 = ({
  step,
  setStep,
  selected,
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
  setSavedMeeting,
}) => {
  const meetingDateLocal = moment(selectedDay)
    .hour(Math.trunc(selectedTime))
    .minute((selectedTime % 1) * 60)
    .tz("Europe/Warsaw");

  const handleNextStep = () => {
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
      SameSite: "None",
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
            <div className="summary">
              <p>
                Rodzaj spotkania: <span>{meetingType.name}</span>
              </p>
              <p>
                Data:{" "}
                <span>{meetingDateLocal.format("dddd, D MMMM YYYY")}</span>
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
      <div className="button-container">
        <button
          type="button"
          className={`nav${step >= 3 ? " inactive" : ""}`}
          onClick={step >= 3 ? null : () => setStep(step - 1)}
        >
          Wstecz
        </button>

        <button
          type="button"
          className={`nav${selected < step + 1 ? " inactive" : ""}`}
          onClick={selected < step + 1 ? null : handleNextStep}
        >
          Dalej
        </button>
      </div>
    </section>
  );
};
export default SchedulerStep2;
