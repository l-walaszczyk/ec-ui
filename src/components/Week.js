import React from "react";
import "../styles/Week.scss";
import moment from "moment";

const Week = ({ weekArray, selectedDay, setSelectedDay }) => {
  const monthNames = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

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
            onClick={() => setSelectedDay(moment.utc(item.day))}
          >
            {moment.utc(item.day).date()}
          </button>
        </td>
      );
    }
  });

  const months = [];

  for (let item of weekArray) {
    const month = moment.utc(item.day).month();
    !months.includes(month) && months.push(month);
  }

  const monthsWorded = months.map((item) => monthNames[item]);

  const monthsFormatted =
    months.length === 1
      ? monthsWorded[0]
      : `${monthsWorded[0]} - ${monthsWorded[1]}`;

  const years = [];

  for (let item of weekArray) {
    const year = moment.utc(item.day).year();
    !years.includes(year) && years.push(year);
  }

  const yearsFormatted =
    years.length === 1 ? years[0] : `${years[0]}/${years[1]}`;

  // useEffect(() => {
  //   const firstAvailableSlot = freeSlots.find((item) => item.slots.length > 0);
  //   const firstAvailableDate = firstAvailableSlot.day.toDateString();
  //   setSelectedDay(firstAvailableDate);
  // }, [freeSlots]);

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
            <th colSpan="7">{yearsFormatted}</th>
          </tr>
          <tr>
            <th colSpan="7">{monthsFormatted}</th>
          </tr>
          <tr>
            <th>Pn</th>
            <th>Wt</th>
            <th>Śr</th>
            <th>Czw</th>
            <th>Pt</th>
            <th>Sb</th>
            <th>Nd</th>
          </tr>
          <tr>{days}</tr>
        </tbody>
      </table>
    </div>
  );
};
export default Week;
