import React, { useState, useEffect } from "react";
import "../styles/SchedulerPage.scss";
import SchedulerNavButtons from "../components/SchedulerNavButtons";
import SchedulerStep0 from "../components/SchedulerStep0";
import SchedulerStep1 from "../components/SchedulerStep1";
import SchedulerStep2 from "../components/SchedulerStep2";
import texts from "../content/texts";

const SchedulerPage = () => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(0);
  const [field, setField] = useState(null);
  const [selectedMeetingType, setSelectedMeetingType] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const types = [
    texts.services.types.one,
    texts.services.types.two,
    texts.services.types.three,
  ];

  const meetingTypes = types[field] || [];

  const meetingDuration = (meetingTypes[selectedMeetingType] || []).minutes;

  const SchedulerSteps = [
    <SchedulerStep0
      setSelected={setSelected}
      field={field}
      setField={setField}
      setSelectedMeetingType={setSelectedMeetingType}
    />,
    <SchedulerStep1
      setSelected={setSelected}
      // field={field}
      meetingTypes={meetingTypes}
      selectedMeetingType={selectedMeetingType}
      setSelectedMeetingType={setSelectedMeetingType}
    />,
    <SchedulerStep2
      setSelected={setSelected}
      meetingDuration={meetingDuration}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
    />,
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
        />
      </section>
    </main>
  );
};

export default SchedulerPage;
