import React from "react";
import "../styles/Week.scss";

const Week = ({ selectedDay, setSelectedDay }) => {
  // const [selectedDay, setSelectedDay] = useState(null);

  const freeSlots = [
    {
      day: new Date("2020-06-29"),
      slots: [
        [8, 11],
        [12, 13],
        [15, 16],
      ],
    },
    {
      day: new Date("2020-06-30"),
      slots: [[8, 16]],
    },
    {
      day: new Date("2020-07-01"),
      slots: [],
    },
    {
      day: new Date("2020-07-02"),
      slots: [],
    },
    {
      day: new Date("2020-07-03"),
      slots: [[8, 12]],
    },
    {
      day: new Date("2020-07-04"),
      slots: [[10, 14]],
    },
    {
      day: new Date("2020-07-05"),
      slots: [],
    },
  ];

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

  const days = freeSlots.map((item, index) => (
    <td
      key={index}
      className={item.slots.length === 0 ? "unavailable" : "available"}
    >
      <button
        type="button"
        className={
          item.day.toDateString() === selectedDay ? "selected" : "unselected"
        }
        onClick={() => setSelectedDay(item.day.toDateString())}
      >
        {item.day.getDate()}
      </button>
    </td>
  ));

  const months = [];

  for (let item of freeSlots) {
    const month = item.day.getMonth();
    !months.includes(month) && months.push(month);
  }

  const monthsWorded = months.map((item) => monthNames[item]);

  const monthsFormatted =
    months.length === 1
      ? monthsWorded[0]
      : `${monthsWorded[0]} - ${monthsWorded[1]}`;

  const years = [];

  for (let item of freeSlots) {
    const year = item.day.getFullYear();
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
