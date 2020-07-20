import React from "react";
import moment from "moment-timezone";
import "moment/locale/pl";
import { useForm } from "react-hook-form";

const SchedulerStep3 = ({
  step,
  setStep,
  selected,
  meetingType,
  savedMeeting,
}) => {
  const meetingDateLocal = moment
    .utc(savedMeeting.meetingDate)
    .tz("Europe/Warsaw");

  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="scheduler">
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
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>
              Proszę podaj jeszcze kilka informacji
              <br />
              (wymagane oznaczono *)
            </h2>
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
            <h2>Wybierz sposób płatności</h2>
            <select
              name="paymentMethod"
              defaultValue=""
              ref={register({ required: true })}
            >
              {/* <option defaultValue>wybierz z listy...</option> */}
              <option value="" disabled>
                wybierz z listy...
              </option>
              <option
                value="przelewy24"
                style={{
                  backgroundImage: `url("/images/przelewy24.png")`,
                  backgroundSize: "auto",
                }}
              >
                Płatność z góry
              </option>
              <option value="personally">
                Płatność podczas wizyty w gabinecie
              </option>
            </select>
            <label htmlFor="agreement1">
              <input
                id="agreement1"
                name="agreement1"
                type="checkbox"
                ref={register({ required: true })}
              />
              <p>Akceptuję regulamin serwisu emiliacwojdzinska.pl</p>
            </label>
            <label htmlFor="agreement2">
              <input
                id="agreement2"
                name="agreement2"
                type="checkbox"
                ref={register({ required: true })}
              />
              <p>Akceptuję informację o danych osobowych</p>
            </label>
            <div className="button-container">
              <button
                type="button"
                className={`nav${step >= 3 ? " inactive" : ""}`}
                // onClick={step >= 3 ? null : () => setStep(step - 1)}
              >
                Wstecz
              </button>

              <button
                type="submit"
                className={`nav${selected < step + 1 ? " inactive" : ""}`}
              >
                Dalej
              </button>
              {/* <input
                type="submit"
                className={`nav${selected < step + 1 ? " inactive" : ""}`}
                value="Dalej"
              /> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SchedulerStep3;
