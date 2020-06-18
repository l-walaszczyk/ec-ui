import React, { useState, useEffect } from "react";
// import "../styles/SchedulerStep.scss";
import Week from "./Week";
import Time from "./Time";

const SchedulerStep2 = ({
  setSelected,
  meetingDuration,
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
}) => {
  // const weekJump = 0;
  const [weekJump, setWeekJump] = useState(0);
  const [data, setData] = useState({});
  const [url, setUrl] = useState(
    "http://localhost:8000/?" +
      new URLSearchParams({ meetingDuration, weekJump })
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      res
        .json()
        .then((res) => setData(res))
        .catch((err) => console.log("Error: ", err));
      console.log(res);
    };

    fetchData();
  }, [url]);

  return (
    <div className="options-container">
      <Week
      // freeSlots={freeSlots}
      // availableDays={availableDays}
      // meetingDuration={meetingDuration}
      // selectedDay={selectedDay}
      // setSelectedDay={setSelectedDay}
      />
      {selectedDay && (
        <Time
        // slots={freeSlots.find((item) => item.day.toDateString() === selectedDay).slots}
        // selectedTime={selectedTime}
        // setSelectedTime={setSelectedTime}
        />
      )}
    </div>
  );
};
export default SchedulerStep2;
