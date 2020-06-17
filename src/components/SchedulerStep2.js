import React from "react";
// import React, { useState } from "react";
// import "../styles/SchedulerStep.scss";
import Week from "./Week";
import Time from "./Time";

const freeSlots = [
  {
    day: new Date("2020-06-29"),
    slots: [
      [8, 11],
      [12, 13],
      [15.5, 16],
    ],
  },
  {
    day: new Date("2020-06-30"),
    slots: [[8.5, 16]],
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

const SchedulerStep2 = ({
  setSelected,
  meetingDuration,
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <div className="options-container">
      {/* <h2>
        Wybierz termin wizyty
        <br />
        użyj strzałek, aby sprawdzić inny tydzień
      </h2> */}
      <Week
        freeSlots={freeSlots}
        meetingDuration={meetingDuration}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      {/* <h2>Wybierz godzinę wizyty</h2> */}
      {selectedDay && (
        <Time
          slots={
            freeSlots.find((item) => item.day.toDateString() === selectedDay)
              .slots
          }
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
    </div>
  );
};
export default SchedulerStep2;
