import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorHint from "./ErrorHint";
import SelectField from "./SelectField";

const SummaryForm = ({
  step,
  setStep,
  selectedFieldIndex,
  setSelectedFieldIndex,
  id,
  meetingName,
  meetingPrice,
  meetingDuration,
  numberOfPeople,
  setSavedMeeting,
}) => {
  const handleCancel = () => {
    if (
      window.confirm(
        "Wybrany termin wróci do puli i ktoś inny będzie mógł go zarezerwować. Czy zgadzasz się na to?"
      )
    ) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        mode: "cors", // no-cors, *cors, same-origin
        credentials: "include", // include, *same-origin, omit
      };

      const params = {
        status: "temp",
      };

      const url =
        process.env.API_URL +
        "meetings/" +
        id +
        "?" +
        new URLSearchParams(params);

      fetch(url, requestOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.success) {
              // setSavedMeeting(null);
              document.cookie = "id=;max-age=0";
              setSelectedFieldIndex(null);
              setStep(0);
            } else {
              console.log("Failed at deleting meeting of id", id);
            }
          },
          (error) => {
            console.log("Error:", error);
          }
        );
    }
  };

  const initialValues = {
    firstNameContact: "",
    lastNameContact: "",
    emailContact: "",
    phoneContact: "",
    paymentMethod: "",
    agreement1: false,
    agreement2: false,
  };

  const validationSchema = Yup.object({
    firstNameContact: Yup.string().required("Wpisz imię osoby kontaktowej"),
    lastNameContact: Yup.string().required("Wpisz nazwisko osoby kontaktowej"),
    // firstName2: Yup.string(),
    // lastName2: Yup.string(),
    // yearOfBirth2: Yup.number().typeError("Rok musi być liczbą"),
    // .test(
    //   "len",
    //   "Rok urodzenia powinien być 4-cyfrowy",
    //   (val) => val.toString().length === 4
    // )
    // .required("Wpisz rok urodzenia pacjenta")
    emailContact: Yup.string()
      .email("Adres email niepoprawny")
      .required("Wpisz adres email"),
    phoneContact: Yup.string()
      .min(9, "Numer telefonu powinien mieć co najmniej 9 znaków")
      .required("Wpisz numer telefonu"),
    paymentMethod: Yup.string().required("Wybierz metodę płatności"),
    agreement1: Yup.boolean().oneOf([true], "Potwierdź akceptację regulaminu"),
    agreement2: Yup.boolean().oneOf(
      [true],
      "Potwierdź akceptację informacji o danych osobowych"
    ),
  });

  switch (selectedFieldIndex) {
    case 0:
      if (meetingName.includes(" par")) {
        initialValues.firstName2 = "";
        initialValues.lastName2 = "";
      }
      break;

    case 1:
      initialValues.firstName2 = "";
      initialValues.lastName2 = "";
      initialValues.yearOfBirth2 = "";
      break;

    case 2:
      if (numberOfPeople === 2) {
        initialValues.firstName2 = "";
        initialValues.lastName2 = "";
      } else if (numberOfPeople === 3) {
        initialValues.firstName3 = "";
        initialValues.lastName3 = "";
      }
      break;

    default:
      break;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const finalValues = Object.assign(values);

        const requestOptions = {
          method: "PATCH",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalValues),
          mode: "cors", // no-cors, *cors, same-origin
          credentials: "include", // include, *same-origin, omit
        };

        const url =
          process.env.API_URL +
          "meetings/" +
          id +
          "/" +
          finalValues.paymentMethod;

        fetch(url, requestOptions)
          .then((res) => res.json())
          .then(({ success, savedMeeting, url }) => {
            setSubmitting(false);
            if (success) {
              setSavedMeeting(savedMeeting);
              if (url) {
                console.log("Redirecting to url:", url);
                window.location = url;
              } else {
                setStep(step + 1);
              }
            } else {
              alert(
                "Błąd podczas zapisywania spotkania. Odśwież stronę i spróbuj zarezerwować spotkanie ponownie."
              );
              console.log("PATCHing failed");
            }
          });
      }}
    >
      {({ values, isSubmitting, isValid, dirty }) => (
        <Form>
          <h2>
            Proszę podaj jeszcze kilka informacji
            <br />
            {/* (wymagane oznaczono *) */}
          </h2>
          <div className="form-field">
            <Field
              type="text"
              name="firstNameContact"
              placeholder="Imię osoby kontaktowej"
            />
            <ErrorMessage name="firstNameContact" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="text"
              name="lastNameContact"
              placeholder="Nazwisko osoby kontaktowej"
            />
            <ErrorMessage name="lastNameContact" component={ErrorHint} />
          </div>
          {/* <div className="form-field">
            <Field
              type="text"
              name="yearOfBirth2"
              placeholder={
                values.forSomeoneElse
                  ? "Rok urodzenia pacjenta"
                  : "Rok urodzenia"
              }
              autocomplete="off"
            />
            <ErrorMessage name="yearOfBirth2" component={ErrorHint} />
          </div> */}
          <div className="form-field">
            <Field
              type="email"
              name="emailContact"
              placeholder={
                values.forSomeoneElse
                  ? "Adres e-mail os. kontaktowej"
                  : "Adres e-mail"
              }
            />
            <ErrorMessage name="emailContact" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="tel"
              name="phoneContact"
              placeholder={
                values.forSomeoneElse
                  ? "Numer telefonu os. kontaktowej"
                  : "Numer telefonu"
              }
            />
            <ErrorMessage name="phoneContact" component={ErrorHint} />{" "}
          </div>
          <h2>Wybierz sposób płatności</h2>
          <div className="form-field">
            <Field
              name={"paymentMethod"}
              component={SelectField}
              value={values.paymentMethod}
              options={[
                {
                  value: "",
                  label: <p>wybierz z listy...</p>,
                  isDisabled: true,
                },
                {
                  value: "p24",
                  label: (
                    <>
                      <p>Płatność z góry</p>

                      <img src="/images/przelewy24.png" />
                    </>
                  ),
                },
                {
                  value: "in-person",
                  label: <p>Płatność podczas wizyty w gabinecie</p>,
                },
              ]}
            />
            <ErrorMessage name="paymentMethod" component={ErrorHint} />
          </div>
          <div className="form-field">
            <label>
              <Field type="checkbox" name="agreement1" />
              <span>
                Akceptuję{" "}
                <a href="/docs/Regulamin.pdf" target="_blank">
                  regulamin serwisu emiliacwojdzinska.pl
                </a>
              </span>
            </label>
            <ErrorMessage name="agreement1" component={ErrorHint} />
          </div>
          <div className="form-field">
            <label>
              <Field type="checkbox" name="agreement2" />
              <span>
                Akceptuję{" "}
                <a href="/docs/RODO.pdf" target="_blank">
                  informację o danych osobowych
                </a>
              </span>
            </label>
            <ErrorMessage name="agreement2" component={ErrorHint} />
          </div>
          <div className="button-container">
            <button type="button" className="nav" onClick={handleCancel}>
              Wstecz
            </button>

            <button
              type="submit"
              className={`nav${dirty && isValid ? "" : " inactive"}`}
              disabled={isSubmitting}
            >
              Dalej
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SummaryForm;
