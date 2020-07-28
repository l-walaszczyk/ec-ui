import Layout from "../layouts/Layout";
import React, { useState, useEffect } from "react";
// import "../styles/scheduler.scss";
import SchedulerStep0 from "../components/SchedulerStep0";
import SchedulerStep1 from "../components/SchedulerStep1";
import SchedulerStep2 from "../components/SchedulerStep2";
import SchedulerStep3 from "../components/SchedulerStep3";
import SchedulerStep4 from "../components/SchedulerStep4";
import texts from "../public/content/texts";
import moment from "moment-timezone";

if (!Math.trunc) {
  Math.trunc = function (v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
  };
}

const Scheduler = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const types = [
    texts.services.types.one,
    texts.services.types.two,
    texts.services.types.three,
  ];

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(0);
  const [selectedField, setSelectedField] = useState(null);
  const [selectedMeetingType, setSelectedMeetingType] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const meetingTypes = types[selectedField] || [];

  const meetingDuration =
    (meetingTypes[selectedMeetingType] || []).minutes || 50;

  const meetingType = meetingTypes[selectedMeetingType] || {};

  const [url, setUrl] = useState(
    process.env.API_URL +
      "week/asap/?" +
      new URLSearchParams({ meetingDuration })
  );
  const [weekArray, setWeekArray] = useState([]);
  const [weekSuccess, setWeekSuccess] = useState(null);
  const [hintsCheck, setHintsCheck] = useState(false);
  const [savedMeeting, setSavedMeeting] = useState(null);

  const fetchWeek = (url) => {
    const requestOptions = {
      method: "GET",
      withCredentials: true,
    };

    setHintsCheck(false);
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setWeekArray(result.array || []);
          setWeekSuccess(result.success);
          setHintsCheck(true);
          // console.log(result.array);
        },
        (error) => {
          console.log("Error while fetching week array:", error);
        }
      );
  };

  useEffect(() => {
    const sumSelected = () => {
      if (selectedTime !== null) return 3;
      if (selectedDay !== null) return 2.5;
      if (selectedMeetingType !== null) return 2;
      if (selectedField !== null) return 1;
      return 0;
    };
    setSelected(sumSelected());
  }, [selectedField, selectedMeetingType, selectedDay, selectedTime]);

  useEffect(() => {
    fetchWeek(url);
  }, [url]);

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
    // if (savedMeeting) {
    //   params.id = savedMeeting._id;
    // }
    setUrl(process.env.API_URL + "week/asap/?" + new URLSearchParams(params));
  }, [meetingDuration, selectedDay, selectedTime, savedMeeting]);

  const SchedulerSteps = [
    <SchedulerStep0
      step={step}
      setStep={setStep}
      selected={selected}
      // setSelected={setSelected}
      selectedField={selectedField}
      setSelectedField={setSelectedField}
      setSelectedMeetingType={setSelectedMeetingType}
    />,
    <SchedulerStep1
      step={step}
      setStep={setStep}
      selected={selected}
      setSelected={setSelected}
      meetingTypes={meetingTypes}
      selectedMeetingType={selectedMeetingType}
      setSelectedMeetingType={setSelectedMeetingType}
      setSelectedDay={setSelectedDay}
      setSelectedTime={setSelectedTime}
    />,
    <SchedulerStep2
      step={step}
      setStep={setStep}
      selected={selected}
      setSelected={setSelected}
      meetingDuration={meetingDuration}
      meetingType={meetingType}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      url={url}
      setUrl={setUrl}
      weekArray={weekArray}
      weekSuccess={weekSuccess}
      hintsCheck={hintsCheck}
      setHintsCheck={setHintsCheck}
      fetchWeek={fetchWeek}
      // savedMeeting={savedMeeting}
      setSavedMeeting={setSavedMeeting}
    />,
    <SchedulerStep3
      step={step}
      setStep={setStep}
      selected={selected}
      meetingType={meetingType}
      savedMeeting={savedMeeting}
    />,
    <SchedulerStep4 />,
  ];

  return (
    <Layout>
      <main>
        {/* <section className="scheduler"> */}
        {SchedulerSteps[step]}
        {/* <SchedulerNavButtons
            step={step}
            setStep={setStep}
            selected={selected}
            setSelected={setSelected}
            meetingDuration={meetingDuration}
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            // savedMeeting={savedMeeting}
            setSavedMeeting={setSavedMeeting}
          /> */}
        {/* </section> */}
      </main>
    </Layout>
  );
};

export default Scheduler;
