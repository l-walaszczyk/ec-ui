import React, { useState } from "react";
import "../styles/SchedulerPage.scss";
import SchedulerNavButtons from "../components/SchedulerNavButtons";
import SchedulerOptions from "../components/SchedulerOptions";
// import SchedulerStep0 from "../components/SchedulerStep0";
// import SchedulerStep1 from "../components/SchedulerStep1";

const SchedulerPage = () => {
  const [step, setStep] = useState(0);
  const [field, setField] = useState(null);

  return (
    <main>
      <section className="scheduler">
        <SchedulerOptions
          field={field}
          setField={setField}
          step={step}
          // setStep={setStep}
        />
        <SchedulerNavButtons step={step} setStep={setStep} field={field} />
      </section>
    </main>
  );
};

export default SchedulerPage;
