import React, { useState, useEffect } from "react";
import "../styles/SchedulerPage.scss";
import SchedulerNavButtons from "../components/SchedulerNavButtons";
import SchedulerStep0 from "../components/SchedulerStep0";
import SchedulerStep1 from "../components/SchedulerStep1";
import SchedulerStep2 from "../components/SchedulerStep2";
import SchedulerStep3 from "../components/SchedulerStep3";
import texts from "../content/texts";
import config from "../config/config";
import moment from "moment-timezone";

const SchedulerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const types = [
    texts.services.types.one,
    texts.services.types.two,
    texts.services.types.three,
  ];

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(0);
  const [field, setField] = useState(null);
  const [selectedMeetingType, setSelectedMeetingType] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const meetingTypes = types[field] || [];

  const meetingDuration =
    (meetingTypes[selectedMeetingType] || []).minutes || 50;

  const meetingType = (meetingTypes[selectedMeetingType] || []).name;

  const [url, setUrl] = useState(
    config.apiURL + "asap/?" + new URLSearchParams({ meetingDuration })
  );
  const [weekArray, setWeekArray] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setWeekArray(result);
          console.log(result);
        },
        (error) => {
          console.log("Error:", error);
        }
      );
  }, [url, setWeekArray]);

  useEffect(() => {
    const params = {
      meetingDuration,
    };
    if (selectedDay) {
      params.date = moment.utc(selectedDay).format();
      if (selectedTime) {
        params.date = moment(selectedDay)
          .hour(Math.trunc(selectedTime))
          .minute((selectedTime % 1) * 60)
          .utc()
          .format();
      }
    }
    setUrl(config.apiURL + "asap/?" + new URLSearchParams(params));
  }, [meetingDuration, selectedDay, selectedTime]);

  const SchedulerSteps = [
    <SchedulerStep0
      setSelected={setSelected}
      field={field}
      setField={setField}
      setSelectedMeetingType={setSelectedMeetingType}
    />,
    <SchedulerStep1
      setSelected={setSelected}
      meetingTypes={meetingTypes}
      selectedMeetingType={selectedMeetingType}
      setSelectedMeetingType={setSelectedMeetingType}
      setSelectedDay={setSelectedDay}
      setSelectedTime={setSelectedTime}
    />,
    <SchedulerStep2
      setSelected={setSelected}
      meetingDuration={meetingDuration}
      meetingType={meetingType}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      setUrl={setUrl}
      weekArray={weekArray}
    />,
    <SchedulerStep3 />,
  ];

  return (
    <main>
      <section className="scheduler">
        {SchedulerSteps[step]}
        <SchedulerNavButtons
          step={step}
          setStep={setStep}
          selected={selected}
          setSelected={setSelected}
          meetingDuration={meetingDuration}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          setWeekArray={setWeekArray}
        />
      </section>
    </main>
  );
};

export default SchedulerPage;
