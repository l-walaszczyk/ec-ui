import React, { useState, useEffect } from "react";
import "../styles/SchedulerPage.scss";
import SchedulerNavButtons from "../components/SchedulerNavButtons";
import SchedulerStep0 from "../components/SchedulerStep0";
import SchedulerStep1 from "../components/SchedulerStep1";
import SchedulerStep2 from "../components/SchedulerStep2";

const SchedulerPage = () => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(0);
  const [field, setField] = useState(null);
  const [meetingType, setMeetingType] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SchedulerSteps = [
    <SchedulerStep0
      setSelected={setSelected}
      field={field}
      setField={setField}
      setMeetingType={setMeetingType}
    />,
    <SchedulerStep1
      setSelected={setSelected}
      field={field}
      meetingType={meetingType}
      setMeetingType={setMeetingType}
    />,
    <SchedulerStep2
      setSelected={setSelected}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
    />,
  ];

  return (
    <main>
      <section className="scheduler">
        {/* <SchedulerOptions
          step={step}
          setSelected={setSelected}
          field={field}
          setField={setField}
        /> */}
        {SchedulerSteps[step]}
        <SchedulerNavButtons
          step={step}
          setStep={setStep}
          selected={selected}
          setSelected={setSelected}
        />
      </section>
    </main>
  );
};

export default SchedulerPage;
