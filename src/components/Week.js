import React from "react";
import "../styles/Week.scss";
import moment from "moment-timezone";
import "moment/locale/pl";
import config from "../config/config";

moment.locale("pl");

const Week = ({
  setSelected,
  weekArray,
  meetingDuration,
  setUrl,
  selectedDay,
  setSelectedDay,
  setSelectedTime,
}) => {
  const days = weekArray.map((item, index) => {
    if (item.hours.length === 0) {
      return (
        <td key={index}>
          <span>{moment.utc(item.day).date()}</span>
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
              setSelected(2);
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

  const handleArrowClick = (e) => {
    if (!weekArray.length) {
      return;
    }
    const { direction } = e.currentTarget.dataset;
    setUrl(
      config.apiURL +
        direction +
        "/?" +
        new URLSearchParams({
          meetingDuration,
          date: weekArray[Math.floor(Math.random() * 7)].day,
        })
    );
  };

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
            <th colSpan="9">{weekArray.length ? yearsFormatted : "..."}</th>
          </tr>
          <tr>
            <th colSpan="9">{weekArray.length ? monthsFormatted : "..."}</th>
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
            {weekArray.length ? days : <td colSpan="7">...</td>}
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
    </div>
  );
};
export default Week;
