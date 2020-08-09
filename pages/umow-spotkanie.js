import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../layouts/Layout";
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
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(0);
  const [selectedFieldIndex, setSelectedFieldIndex] = useState(null);
  const [selectedMeetingIndex, setSelectedMeetingIndex] = useState(null);
  const [meetingName, setMeetingName] = useState(null);
  const [meetingDuration, setMeetingDuration] = useState(50);
  const [meetingPrice, setMeetingPrice] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const idURL = searchParams.get("id");

    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "include", // include, *same-origin, omit
    };

    if (idURL) {
      const url = process.env.API_URL + "meetings/" + idURL;

      fetch(url, requestOptions)
        .then((res) => res.json())
        .then(
          ({ success, savedMeeting }) => {
            if (success && savedMeeting.status !== "temp") {
              setSavedMeeting(savedMeeting);
              console.log(savedMeeting);
              setStep(4);
            } else {
              console.log("Could not find a non-temp meeting of id", idURL);
            }
          },
          (error) => {
            console.log("Error:", error);
          }
        );
    } else {
      const idCookie =
        document.cookie &&
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("id"))
          .split("=")[1];

      if (idCookie) {
        const url = process.env.API_URL + "meetings/" + idCookie;

        fetch(url, requestOptions)
          .then((res) => res.json())
          .then(
            ({ success, savedMeeting }) => {
              if (success) {
                setSavedMeeting(savedMeeting);
                console.log(savedMeeting);
                if (savedMeeting.status === "temp") {
                  setStep(3);
                } else {
                  setStep(4);
                }
              } else {
                console.log("Could not find a meeting of id", idCookie);
              }
            },
            (error) => {
              console.log("Error:", error);
            }
          );
      }
    }
  }, []);

  // const meetingTypes = types[selectedFieldIndex] || [];

  // const meetingDuration =
  //   (meetingTypes[selectedMeetingIndex] || []).minutes || 50;

  // const meetingType = meetingTypes[selectedMeetingIndex] || {};

  const [url, setUrl] = useState(
    process.env.API_URL + "hours?" + new URLSearchParams({ meetingDuration }),
    [meetingDuration]
  );
  const [weekArray, setWeekArray] = useState([]);
  const [weekSuccess, setWeekSuccess] = useState(null);
  const [hintsCheck, setHintsCheck] = useState(false);
  const [savedMeeting, setSavedMeeting] = useState(null);

  // const checkCookie = () => {

  // }

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
    setUrl(process.env.API_URL + "hours?" + new URLSearchParams(params));
  }, [meetingDuration, selectedDay, selectedTime, savedMeeting]);

  useEffect(() => {
    const sumSelected = () => {
      if (selectedTime !== null) return 3;
      if (selectedDay !== null) return 2.5;
      if (selectedMeetingIndex !== null) return 2;
      if (selectedFieldIndex !== null) return 1;
      return 0;
    };
    setSelected(sumSelected());
  }, [selectedFieldIndex, selectedMeetingIndex, selectedDay, selectedTime]);

  const SchedulerSteps = [
    <SchedulerStep0
      step={step}
      setStep={setStep}
      selected={selected}
      // setSelected={setSelected}
      selectedFieldIndex={selectedFieldIndex}
      setSelectedFieldIndex={setSelectedFieldIndex}
      setNumberOfPeople={setNumberOfPeople}
      setSelectedMeetingIndex={setSelectedMeetingIndex}
    />,
    <SchedulerStep1
      step={step}
      setStep={setStep}
      selected={selected}
      // setSelected={setSelected}
      selectedFieldIndex={selectedFieldIndex}
      numberOfPeople={numberOfPeople}
      setNumberOfPeople={setNumberOfPeople}
      selectedMeetingIndex={selectedMeetingIndex}
      setSelectedMeetingIndex={setSelectedMeetingIndex}
      setMeetingName={setMeetingName}
      setMeetingDuration={setMeetingDuration}
      setMeetingPrice={setMeetingPrice}
      setSelectedDay={setSelectedDay}
      setSelectedTime={setSelectedTime}
    />,
    <SchedulerStep2
      step={step}
      setStep={setStep}
      selected={selected}
      // setSelected={setSelected}
      selectedFieldIndex={selectedFieldIndex}
      numberOfPeople={numberOfPeople}
      meetingName={meetingName}
      meetingPrice={meetingPrice}
      meetingDuration={meetingDuration}
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
      // selected={selected}
      selectedFieldIndex={selectedFieldIndex}
      setSelectedFieldIndex={setSelectedFieldIndex}
      // meetingName={meetingName}
      // meetingPrice={meetingPrice}
      // meetingDuration={meetingDuration}
      // numberOfPeople={numberOfPeople}
      savedMeeting={savedMeeting}
      setSavedMeeting={setSavedMeeting}
    />,
    <SchedulerStep4
      setSelectedFieldIndex={setSelectedFieldIndex}
      savedMeeting={savedMeeting}
    />,
  ];

  return (
    <Layout>
      <Head>
        <title>Umów spotkanie</title>
        <meta
          name="description"
          content="Zarezerwuj przez internet termin wizyty. Dostępne wizyty online oraz w gabinecie w miescowości Babimost - na granicy województwa lubuskiego i wielkopolskiego"
        />
        <meta
          property="og:title"
          content="Emilia Cwojdzińska - Umów spotkanie"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://emiliacwojdzinska.pl/umow-spotkanie"
        />
      </Head>
      <main>
        <div className="test">
          System w fazie testów
          <br />
          Rejestracja pod nr tel.:
          <br />
          <a
            className="row"
            rel="noopener noreferrer"
            href={`tel:${texts.home.contact.phone}`}
          >
            {texts.home.contact.phone}
          </a>
        </div>
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
