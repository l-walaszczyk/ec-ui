import React from "react";
import moment from "moment-timezone";
import "moment/locale/pl";
import { useForm } from "react-hook-form";

const SchedulerStep3 = ({ meetingType, savedMeeting }) => {
  const meetingDateLocal = moment
    .utc(savedMeeting.meetingDate)
    .tz("Europe/Warsaw");

  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="options-container">
      <div className="summary-container">
        <h2>Podsumowanie, dodatkowe informacje i wybór płatności</h2>
        <div className="summary">
          <p>
            Rodzaj spotkania: <span>{meetingType.name}</span>
          </p>
          <p>
            Data: <span>{meetingDateLocal.format("dddd, D MMMM YYYY")}</span>
          </p>
          <p>
            Godzina: <span>{meetingDateLocal.format("HH:mm")}</span>
          </p>
          <p>
            Czas trwania: <span>Do {meetingType.minutes} minut</span>
          </p>
          <p>
            Koszt: <span>{meetingType.price} zł</span>
          </p>
          <p>
            W trosce o anonimowość klientów, uprzejmie proszę o przybycie nie
            wcześniej niż o ustalonej godzinie.
          </p>
        </div>
        <div className="form-container">
          <h2>
            Proszę podaj jeszcze kilka informacji
            <br />
            (wymagane oznaczono *)
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="forSomeoneElse">
              <input
                id="forSomeoneElse"
                name="forSomeoneElse"
                type="checkbox"
                // value={false}
                ref={register}
              />
              <p>
                Zaznacz jeśli rezerwujesz termin dla innej osoby (nie dla
                siebie)
              </p>
            </label>
            {watch("forSomeoneElse") && (
              <>
                <input
                  type="text"
                  placeholder="* Imię osoby kontaktowej"
                  name="firstNameContact"
                  ref={register({
                    required: watch("forSomeoneElse") ? true : false,
                    maxLength: 80,
                  })}
                />
                <input
                  type="text"
                  placeholder="* Nazwisko osoby kontaktowej"
                  name="lastNameContact"
                  ref={register({
                    required: watch("forSomeoneElse") ? true : false,
                    maxLength: 80,
                  })}
                />
              </>
            )}
            <input
              type="text"
              placeholder={
                watch("forSomeoneElse") ? "* Imię pacjenta" : "* Imię"
              }
              name="firstNamePatient"
              ref={register({
                required: true,
                maxLength: 80,
              })}
            />
            {errors.firstNamePatient && (
              <span>Imię pacjenta jest wymagane</span>
            )}
            <input
              type="text"
              placeholder={
                watch("forSomeoneElse") ? "Nazwisko pacjenta" : "* Nazwisko"
              }
              name="lastNamePatient"
              ref={register({
                required: watch("forSomeoneElse") ? false : true,
                maxLength: 80,
              })}
            />
            <input
              type="text"
              placeholder={
                watch("forSomeoneElse")
                  ? "* Rok urodzenia pacjenta"
                  : "* Rok urodzenia"
              }
              name="yearOfBirth"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder={
                watch("forSomeoneElse")
                  ? "* Adres e-mail os. kontaktowej"
                  : "* Adres e-mail"
              }
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type="tel"
              placeholder={
                watch("forSomeoneElse")
                  ? "* Numer telefonu os. kontaktowej"
                  : "* Numer telefonu"
              }
              name="telephone"
              ref={register({ required: true, minLength: 9, maxLength: 12 })}
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default SchedulerStep3;
