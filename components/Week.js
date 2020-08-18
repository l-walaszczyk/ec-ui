import React from "react";
import { useState } from "react";
// import "../styles/Week.scss";
import moment from "moment-timezone";
import "moment/locale/pl";
import { CSSTransition } from "react-transition-group";
import { useEffect } from "react";

moment.locale("pl");

const Week = ({
  weekArray,
  weekSuccess,
  meetingDuration,
  url,
  setUrl,
  selectedDay,
  setSelectedDay,
  setSelectedTime,
  hintsCheck,
  setHintsCheck,
  fetchWeek,
  // savedMeeting,
}) => {
  const days = weekArray.map((item, index) => {
    if (item.hours.length === 0) {
      return (
        <td key={index}>
          {/* <span>{moment.utc(item.day).date()}</span> */}
          <button
            type="button"
            className="day inactive"
            onClick={() => {
              setSelectedDay(moment.utc(item.day));
              setSelectedTime(null);
            }}
          >
            {moment.utc(item.day).date()}
          </button>
        </td>
      );
    } else {
      return (
        <td key={index}>
          <button
            type="button"
            className={`day${
              moment.utc(item.day).isSame(selectedDay) ? " selected" : ""
            }`}
            onClick={() => {
              setSelectedDay(moment.utc(item.day));
              setSelectedTime(null);
            }}
          >
            {moment.utc(item.day).date()}
          </button>
        </td>
      );
    }
  });

  const months = [];

  for (let item of weekArray) {
    const month = moment.utc(item.day).format("MMMM");
    !months.includes(month) && months.push(month);
  }

  const monthsFormatted =
    months.length === 1 ? months[0] : `${months[0]} - ${months[1]}`;

  const years = [];

  for (let item of weekArray) {
    const year = moment.utc(item.day).year();
    !years.includes(year) && years.push(year);
  }

  const yearsFormatted =
    years.length === 1 ? years[0] : `${years[0]}/${years[1]}`;

  const [direction, setDirection] = useState(null);
  const [directionClass, setDirectionClass] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const handleArrowClick = (e) => {
    if (!weekArray.length) {
      return;
    }
    const { direction } = e.currentTarget.dataset;
    setDirection(direction);
    setShowHint(false);
    setHintsCheck(false);

    const getRandomDayFromWeek = () => {
      let dayCandidate;
      do {
        dayCandidate = weekArray[Math.floor(Math.random() * 7)].day;
      } while (dayCandidate === selectedDay);
      return dayCandidate;
    };

    const params = {
      direction,
      meetingDuration,
      date: getRandomDayFromWeek(),
    };

    // if (savedMeeting) {
    //   params.id = savedMeeting._id;
    // }

    setUrl(process.env.API_URL + "hours?" + new URLSearchParams(params));
  };

  useEffect(() => {
    if (hintsCheck && !weekSuccess) {
      setShowHint(true);
      setDirectionClass(direction);
    }
  }, [weekSuccess, hintsCheck, direction]);

  useEffect(() => {
    const handleClickAnywhere = () => {
      setShowHint(false);
      setHintsCheck(false);
    };
    window.addEventListener("click", handleClickAnywhere);
    return () => {
      window.removeEventListener("click", handleClickAnywhere);
    };
  }, [setShowHint, setHintsCheck]);

  if (weekArray.length) {
    return (
      <div className="week-container">
        <h2>
          Wybierz termin wizyty
          <br />
          użyj strzałek, aby sprawdzić inny tydzień
        </h2>
        <table>
          <tbody>
            <tr>
              <th colSpan="9">{yearsFormatted}</th>
            </tr>
            <tr>
              <th colSpan="9">{monthsFormatted}</th>
            </tr>
            <tr>
              <th></th>
              <th>Pn</th>
              <th>Wt</th>
              <th>Śr</th>
              <th>Czw</th>
              <th>Pt</th>
              <th>Sb</th>
              <th>Nd</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <button
                  className="calendar-arrow"
                  type="button"
                  data-direction="before"
                  onClick={handleArrowClick}
                >
                  <i className="fas fa-angle-left"></i>
                </button>
              </td>
              {days}
              <td>
                <button
                  className="calendar-arrow"
                  type="button"
                  data-direction="after"
                  onClick={handleArrowClick}
                >
                  <i className="fas fa-angle-right"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <CSSTransition
          in={showHint}
          classNames="hint-transition"
          timeout={250}
          mountOnEnter
          unmountOnExit
        >
          <div className={`hint ${directionClass}`}>
            <p>
              Brak terminów
              <br />
              {(directionClass === "before" && "we wcześniejszych") ||
                (directionClass === "after" && "w późniejszych")}{" "}
              tygodniach
            </p>
          </div>
        </CSSTransition>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <h2>Trwa pobieranie danych</h2>
        <p>
          Kliknij{" "}
          <span type="button" onClick={() => fetchWeek(url)}>
            tutaj
          </span>{" "}
          aby spróbować ponownie
        </p>
      </div>
    );
  }
};
export default Week;
