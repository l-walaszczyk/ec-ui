import React from "react";

const PeopleCounter = ({
  numberOfPeople,
  setNumberOfPeople,
  setSelectedMeetingIndex,
}) => {
  const handleButtonClick = (e) => {
    const newNumber =
      numberOfPeople + Number(e.currentTarget.dataset.increment);
    if (0 < newNumber && newNumber < 4) {
      setNumberOfPeople(newNumber);
      setSelectedMeetingIndex(null);
    }
  };

  return (
    <>
      {/* <div className="people-container"> */}
      <h2>
        Wybierz liczbę osób do badania
        <br />
        <span>
          w przypadku chęci zapisu więcej niż 3 osób proszę o kontakt
          telefoniczny lub mailowy
        </span>
      </h2>
      <h1></h1>
      <div className="number-of-people-container">
        <button type="button" data-increment="-1" onClick={handleButtonClick}>
          <span>-</span>
        </button>
        <p>{numberOfPeople}</p>
        <button type="button" data-increment="1" onClick={handleButtonClick}>
          <span>+</span>
        </button>
      </div>
      {/* </div> */}
    </>
  );
};
export default PeopleCounter;
